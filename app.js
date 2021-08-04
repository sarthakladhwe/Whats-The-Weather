window.addEventListener('load', () => {
    let long;
    let lat;

    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/'
            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=3ed574e586d49fbadfba40a6860f20cf`;
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=3ed574e586d49fbadfba40a6860f20cf`;

            fetch(api)
            .then(response => {
                return response.json()
            })  
            .then(data => {
                console.log(data);
                const timezone = data.name;
                const {temp} = data.main;
                const {description} = data.weather[0];

                //Set DOM elements from the API
                temperatureDegree.textContent = temp;
                locationTimezone.textContent = timezone;
                temperatureDescription.textContent = description;
            })   
        });

           
    }
});