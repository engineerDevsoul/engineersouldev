document.getElementById("playButton").addEventListener("click", function() {
    var inputText = document.getElementById("textInput").value.toLowerCase();

    var videoContainer = document.getElementById("videoContainer");
    var alternativeContentContainer = document.getElementById("alternativeContentContainer");
    var alternativeGif = document.getElementById("alternativeGif");
    var alternativeAudio = document.getElementById("alternativeAudio");
    var video = document.getElementById("myVideo");

    // Replace 'YOUR_TEXT_CONDITION' with the desired text condition
    if (inputText === '7') {
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
