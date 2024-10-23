// Ensure the script runs after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get a reference to the button element using its class
    var startButton = document.querySelector(".continue.w-button");

    // Add a click event listener to the button
     document.getElementById("pop").addEventListener("click", function() {
    // Play the music
    document.getElementById("bgMusic").play();

    // Hide the welcome page and show the main website
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
  });

        // Create an audio element
        var audio = new Audio("music/coded.mp3");

        // Enable looping for the audio, if desired
        audio.loop = true;

        // Play the audio file
        audio.play();
          document.getElementById("section_welcome").style.display = "none";
          document.getElementById("mainPage").style.display = "block";
    });

});