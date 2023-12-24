document.getElementById("shareButton").addEventListener("click", async () => {
            var inputText = document.getElementById("textInput").value;

            if (navigator.share) {
                await navigator.share({
                    title: `Behind everything, there is a reason! - ${inputText}`,
                    url: `https://engineerdevsoul.github.io/engineersouldev//?q=${inputText}`,
                });
            } else {
                console.log("Web Share API not supported");
            }
        });
document.getElementById("playButton").addEventListener("click", function() {
    var inputText = document.getElementById("textInput").value.toLowerCase();

    var videoContainer = document.getElementById("videoContainer");
    var alternativeContentContainer = document.getElementById("alternativeContentContainer");
    var alternativeGif = document.getElementById("alternativeGif");
    var alternativeAudio = document.getElementById("alternativeAudio");
    var video = document.getElementById("myVideo");

    if (isThala(inputText)) {
        // Display the video container
        videoContainer.style.display = "block";
        alternativeContentContainer.style.display = "none";

        // Set the source of the video
        video.src = "3b37a044.mp4";

        // Play the video
        video.muted = false; // You can set this to true if needed
        video.play().then(() => {
            console.log('Video is playing');
        }).catch(error => {
            console.error('Error playing video:', error);
        });
    } else {
        // Display the alternative content container (GIF)
        videoContainer.style.display = "none";
        alternativeContentContainer.style.display = "block";

        // Display the alternative GIF
        alternativeGif.style.display = "block";
        // Play the alternative audio
        alternativeAudio.play().then(() => {
            console.log('Audio is playing');
        }).catch(error => {
            console.error('Error playing audio:', error);
        });
    }
});

function isThala(string) {
    let isNumber = !!parseInt(string);
    let arrayOfValue = string.split("");
    if (isNumber) {
      let sum = 0;
      arrayOfValue.forEach((e) => {
        sum += parseInt(e);
      });
      return sum == 7;
    } else {
      return arrayOfValue.length == 7;
    }
}
