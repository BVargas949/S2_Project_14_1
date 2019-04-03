"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Bryan Vargas
   Date:   04/02/19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/


window.addEventListener("onload", setStyles);

function setStyles() {
      var styleNum = randInt(5);
      // var link = document.createElement("link");
      link.setAttribute("rel", "styleSheet");
      link.setAttribute("id", "fancySheet");
      link.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancySheet);
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox)

      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".css")
            sheetImg.setAttribute("src", "na_style_" + i + ".css")
            sheetImg.addEventListener(function () {
                  fancySheet.setAttribute("")
            })
      }
}


function randInt(size) {
      return Math.floor(size * Math.random());
}