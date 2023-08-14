document.getElementById("darkModeButton").addEventListener("click", function() {
    var icon = document.querySelector("#darkModeButton i");
    var body = document.body;
    
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        icon.classList.remove("bi-brightness-high-fill");
        icon.classList.add("bi-moon-fill"); // You can use any appropriate icon for dark mode
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-brightness-high-fill");
    }
});

// -------this is dark moode js ------
const fullscreenButton = document.getElementById('fullscreenButton');
        let isFullScreen = false;

        fullscreenButton.addEventListener('click', toggleFullScreen);

        function toggleFullScreen() {
            if (!isFullScreen) {
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
                    document.documentElement.msRequestFullscreen();
                }
                fullscreenButton.textContent = 'Exit Full Screen';
                isFullScreen = true;
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE/Edge */
                    document.msExitFullscreen();
                }
                fullscreenButton.textContent = 'Enter Full Screen';
                isFullScreen = false;
            }
        }

        // -------full page and exit full page js over now ------

//  ----------disbaled all are property ------------------------
          // Disable shortcut keys
        //   document.addEventListener('keydown', function(event) {
        //     event.preventDefault(); // Prevent the default behavior of the shortcut key
        // });

        // Disable right-click context menu
        // document.addEventListener('contextmenu', function(event) {
        //     event.preventDefault(); // Prevent the default context menu
        // });
        // Disable text selection
        // document.addEventListener('selectstart', function(event) {
        //     event.preventDefault(); // Prevent text selection
        // });

 // --------------------diabled all property over now -----

        