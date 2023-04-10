const getLocation = document.getElementById("getLocation");

getLocation.addEventListener("click", evr=>{
    if("geolocation" in navigator){
        let watchID = navigator.geolocation.getCurrentPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let googleMap = "https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400";
            const mapImage = document.getElementById("mapImage");
            mapImage.src=googleMap;

            console.log(latitude,longitude);
        },error=>{
            console.log(error.code);
        });
    } else {
        console.log("Not Supported");
    }
});