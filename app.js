window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3ed574e586d49fbadfba40a6860f20cf`
        });

        
    }
});