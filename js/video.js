(function() {
    var video = document.getElementById("video"),
        vendorUrl = window.URL || window.webkitUR;

        navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetMedia;
        
})();