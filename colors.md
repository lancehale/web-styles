---
layout: page
title: Colors
permalink: /colors/
---

This is the main page for our colors.


<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" 
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="100" height="50"
>
  <text font-size="16" x="10" y="20">
    <tspan fill="red">Hello</tspan>,
    <tspan fill="green">world</tspan>!
  </text>
</svg>

<symbol id="icon-stop2" viewBox="0 0 32 32">
<title>stop2</title>
<path d="M4 4h24v24h-24z"></path>
</symbol>
Note:
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

<svg class="icon blue icon-stop2"><path d="M4 4h24v24h-24z"></path></svg>
<svg class="icon green icon-stop2"><title>stop2</title>
<path d="M4 4h24v24h-24z"></path></svg>
<svg class="icon red icon-stop2"><use xlink:href="#icon-stop2"></use></svg>
<svg class="icon orange icon-stop2"><use xlink:href="#icon-stop2"></use></svg>
