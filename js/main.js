 document.addEventListener('DOMContentLoaded', function () {
            let spanNode = document.querySelector('.home__multiple');
            let words = ['Web Designer', 'Web Developer', 'Web Master'];
            let i = 0;
            let j = 0;
            let intervalId = null;

            function displayNextLetter() {
                spanNode.textContent += words[i][j];
                j++;
                if (j === words[i].length) {
                    clearInterval(intervalId);
                    j = 0;
                    i = (i + 1) % words.length;
                    setTimeout(startNextWord, 2000);
                }
            }

            function startNextWord() {
                spanNode.textContent = '';
                intervalId = setInterval(displayNextLetter, 200);
            }

            startNextWord();
        });

        document.addEventListener('DOMContentLoaded', function () {
            const video = document.querySelector('.video');
            const image = document.querySelector('.hero');
            let isVideoPlaying = false;

            function showVideo() {
                video.style.display = 'block';
                image.style.display = 'none';
                video.play();
                isVideoPlaying = true;
            }

            function hideVideo() {
                video.style.display = 'none';
                image.style.display = 'block';
                video.pause();
                video.currentTime = 0;
                isVideoPlaying = false;
            }

            function toggleVideo() {
                if (isVideoPlaying) {
                    hideVideo();
                } else {
                    showVideo();
                }
            }

            function handleVideoClick() {
                toggleVideo();
                video.removeEventListener('ended', handleVideoEnd);
                setupVideoClickEvent();
            }

            function handleVideoEnd() {
                hideVideo();
                setupVideoClickEvent();
            }

            function setupVideoClickEvent() {
                image.addEventListener('click', handleVideoClick);
                video.addEventListener('click', handleVideoClick);
                video.addEventListener('ended', handleVideoEnd);
            }

            // Add event listener to replay the video
            video.addEventListener('ended', function () {
                video.addEventListener('click', handleVideoClick);
            });

            setupVideoClickEvent();
        });

 