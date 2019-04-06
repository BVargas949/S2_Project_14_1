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

// once the window opens, 
window.onload = setStyles;

//cycle through all the page styles
function setStyles() {

      //variable with a function that gives a random number
      var styleNum = randInt(5);

      //variable that holds an HTML Node
      var fancySheet = document.createElement("link");

      //Give the HTML node an specific job (stylesheet link)
      fancySheet.setAttribute("rel", "styleSheet");

      //GIve the HTML Node an id attribute
      fancySheet.setAttribute("id", "fancySheet");

      //create an attribute string that can loop through values within a variable
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");

      //place the node within the element tree
      document.head.appendChild(fancySheet);

      //create another Node (figure element this time)
      var figBox = document.createElement("figure");

      // Give the node an ID of StyleThumbs
      figBox.setAttribute("id", "styleThumbs");

      //append the node into the div with an ID of "box"
      document.getElementById("box").appendChild(figBox);

      // The for loop shall loop theough all the images and Stylesheets, then it shall be appended to the HTML
      for (var i = 0; i <= 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");
            sheetImg.onclick = function (e) {
                  fancySheet.setAttribute("href", e.target.alt);
            }
            figBox.appendChild(sheetImg);
      }

      //create a styles nodes and append to the document head
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      //All the Styles chunks making up the node 
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  button: 0 px; \
                  margin-top: 500px \
      }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
                  }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
             outline: 1px solid red; \
             opacity: 1; \
      }", 2);


}


function randInt(size) {
      return Math.floor(size * Math.random());
}