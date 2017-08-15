<script>                   
    var watcher;
    var geoLocator;
    var positions = 0;

    window.onload = function () {
        geoLocator = window.navigator.geolocation;
        posOptions = {enableHighAccuracy: true, timeout: 45000};

        watcher = geoLocator.watchPosition(successPosition, errorPosition, posOptions);
    }
    function successPosition(pos) {
        //on each positon, store it into local storage sequentially.
        //Then it can be retrieved sequentially
        //in order to redraw the route on a map.
        var p = "Latitude: " + pos.coords.latitude +
                        "Longitude: " + pos.coords.longitude;
        localStorage.setItem(position, p);
    }
    function errorPosition(err) {
        var sp = document.createElement("p");
        sp.innerText = "error: " + err.message; + "code; " + err.code;
        document.getElementById("geoResults").appendChild(sp);
    }
</script>