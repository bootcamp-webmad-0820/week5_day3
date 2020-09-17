// function initMap() {

//     const map = new google.maps.Map(document.querySelector('#map'),
//         {
//             center: directions.ironhackBCN.coords,
//             zoom: 17
//         }
//     )

//     const icon = { url: 'https://img.icons8.com/plasticine/2x/map-pin.png', scaledSize: new google.maps.Size(50, 50) }

//     new google.maps.Marker({
//         map,
//         position: directions.ironhackBCN.coords,
//         title: directions.ironhackBCN.title,
//         icon            // only URL
//     })
// }




// function initMap() {

//     if (navigator.geolocation) {

//         const map = new google.maps.Map(document.querySelector('#map'), {
//             zoom: 15,
//             center: directions.ironhackBCN.coords,
//             styles: mapStyles.yellowParks
//         })

//         let center = {}

//         // getCurrentPosition(successCallback, failureCallback)
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 center = { lat: position.coords.latitude, lng: position.coords.longitude }
//                 map.setCenter(center)
//                 new google.maps.Marker({ map, position: center })
//             },
//             err => console.log('No se pudo acceder a la localización:', err)
//         )

//     } else {
//         console.log('Unable to reach geolocation module')
//     }
// }





function initMap() {

    const map = new google.maps.Map(document.querySelector('#map'), { zoom: 12, center: directions.ironhackBCN.coords, styles: mapStyles.yellowParks })

    const directionRequest = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    const directionsService = new google.maps.DirectionsService
    const directionsDisplay = new google.maps.DirectionsRenderer

    directionsService.route(
        directionRequest,
        response => {
            console.log('El tiempo de viaje sería:', response.routes[0].legs[0].duration.text)
            directionsDisplay.setDirections(response)
            directionsDisplay.setMap(map)
        },
        err => console.log('Ha habido un error:', err)
    )


}