window.addEventListener('load', () => {
    let long;
    let lat;

    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureDescription = document.querySelector('.temperature-description');
    let imageIcon = document.querySelector('#img-src');
    let degreeSection = document.querySelector('.degree-section');
    let temperatureSpan = document.querySelector('.degree-section span');


    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = 'https://cors-anywhere.herokuapp.com/'
            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=3ed574e586d49fbadfba40a6860f20cf`;
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=3ed574e586d49fbadfba40a6860f20cf`;

            fetch(api)
            .then(response => {
                return response.json()
            })  
            .then(data => {
                console.log(data);
                const timezone = data.name;
                const {temp} = data.main;
                const {description, icon} = data.weather[0];

                //Set DOM elements from the AP
                temperatureDegree.textContent = temp.toFixed(1);
                locationTimezone.textContent = timezone;
                temperatureDescription.textContent = description;

                //http://openweathermap.org/img/wn/04d@2x.png
                imageIcon.src = "http://openweathermap.org/img/wn/" + icon + "@4x.png";

                //Celcius to F
                let fahrenheit = temp * 9 / 5 + 32;

                degreeSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "C") {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = fahrenheit.toFixed(1);
                    } else {
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = temp.toFixed(1);
                    }
                })
            })   
        });
    }

    
});