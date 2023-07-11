// This JavaScript file defines the functions for the meme movement web page.

// This function enables the Start button and disables the Stop button.
function enableStartButton() {
  /* The Start button is enabled and the Stop button is disabled. */
  document.getElementById("start-button").disabled = false;
  document.getElementById("stop-button").disabled = true;
  }
  
  // This function disables the Start button and enables the Stop button.
  function enableStopButton() {
  /* The Start button is disabled and the Stop button is enabled. */
  document.getElementById("start-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
  }
  
  // This function resets the meme image to its original position.
  function resetMeme() {
  /* The meme image is reset to its original position. */
  var meme = document.getElementById("meme");
  meme.style.left = "0px";
  meme.style.top = "0px";
  }
  
  // This function moves the meme image to the right and down.
  function moveMeme() {
  /* The meme image is moved to the right and down. */
  var meme = document.getElementById("meme");
  var x = 0;
  var y = 0;
  
  animationInterval = setInterval(function() {
  x += 20;
  y += 20;
  meme.style.left = x + "px";
  meme.style.top = y + "px";
  }, 500);
  }
  
  // This function stops the movement of the meme image.
  function stopMeme() {
  /* The movement of the meme image is stopped. */
  clearInterval(animationInterval);
  resetMeme();
  }
  
  // This function is called when the web page loads.
  window.onload = function() {
  /* The Start button is enabled by default. */
  enableStartButton();
  
  // When the Start button is clicked, the Stop button is enabled and the meme image is moved.
  document.getElementById("start-button").onclick = function() {
  enableStopButton();
  moveMeme();
  };
  
  // When the Stop button is clicked, the Start button is enabled and the meme image is stopped.
  document.getElementById("stop-button").onclick = function() {
  enableStartButton();
  stopMeme();
  };
  };
  
  // Add the flashing bolts animation to the meme image.
  var image = document.getElementById("meme");
  
  // Create an animation object.
  var animation = new Animation(image);
  
  // Add the flash keyframe animation.
  animation.addKeyframe({
  time: 0,
  border: "1px solid yellow"
  }, {
  time: 1,
  border: "1px solid red"
  });
  
  // Set the animation to loop infinitely.
  animation.loop = true;
  
  // Start the animation.
  animation.play();
  