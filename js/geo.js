// geolocation
function getGeolocation() {
    const geoButton = document.querySelector('#geolocation');
    const lat = document.querySelector('#latitude');
    const long = document.querySelector('#longitude');
    geoButton.addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((position) => {
            lat.value = position.coords.latitude;
            long.value = position.coords.longitude;
        });
    });
}

// call the function to get the geolocation
getGeolocation();