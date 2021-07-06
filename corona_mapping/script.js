function updateMap(){
    console.log("hello")
    fetch('data.json').then(response=> response.json())
    .then(rsp => {
        rsp.data.forEach(element => {
            // location marking for map
            latitude=element.latitude;
            longitude=element.longitude;

            cases=element.infected;
            if (cases>255){
                color="rgb(255,0,0)"
            }
            else{
                color=`rgb(${cases},0,0)`
            }
            new mapboxgl.Marker({
                draggable: false,
                color:color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}
// let interval = 2000;
setInterval(updateMap,2000);