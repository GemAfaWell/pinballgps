// the logic to fetch the location and display it on the screen
function fetchPinballLocation() {
    // grab the submit button
    const submit = document.querySelector('#submit');
    // get the latitude and longitude from the input fields
    const lat = document.querySelector('#latitude');
    const lon = document.querySelector('#longitude');

    // add an event listener to the submit button
    submit.addEventListener('click', (e) => {
        // prevent the default behavior of the form
        e.preventDefault();
        // grab the latitude and longitude from the input fields
        // use fetch to get the data from the API
        fetch(`https://www.pinballmap.com/api/v1/locations/closest_by_lat_lon.json?lat=${lat.value}&lon=${lon.value}&max_distance=5&send_all_within_distance=true`)
            .then(response => response.json())
            .then(data => data.locations)
            .then(locations => {
                let htmlOutput = ``;
                // loop through the locations array
                const locationArr = Object.values(locations);
                locationArr.forEach(location => {
                    // create a new div for each location
                    htmlOutput += `
                        <div class="location">
                            <h3>${location.name}</h2>
                            <p>${location.street}</p>
                            <p>${location.city}, ${location.state}</p>
                            <p>${location.phone}</p>
                            <p>${location.distance.toFixed(1)} miles away</p>
                        </div>
                    `;
                });

                // display the locations on the screen
                const locationsContainer = document.querySelector('#locations');
                locationsContainer.innerHTML = htmlOutput;
            })
            .catch(error => console.log(error));
    });
}

fetchPinballLocation();