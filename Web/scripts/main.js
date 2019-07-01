var position = { lat: 13.8170403, lng: 100.5200337 };//บางซื่อ
new Vue({
    el: '#app',
    data() {
        return {
            Restaurants: null
        }
    },
    methods: {
        onLoad: async function (data) {
            console.log("OnLoad()");

            var maps = new google.maps.Map(document.getElementById('map'), {
                center: position,
                zoom: 14
            });

            for (var i = 0; i < data.length; i++) {

                marker = new google.maps.Marker({
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(data[i].Lat, data[i].Lng),
                    title: data[i].Name,
                    map: maps,

                });
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {

                        if (marker.getAnimation() !== null) {
                            marker.setAnimation(null);
                        } else {
                            marker.setAnimation(google.maps.Animation.BOUNCE)
                        }
                    }

                })(marker, i));

            }

        },
        onClickRestaurant: async function (Restaurant) {

            var maps = new google.maps.Map(document.getElementById('map'), {
                center: { lat: Restaurant.Lat, lng: Restaurant.Lng },
                zoom: 14
            });

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(Restaurant.Lat, Restaurant.Lng),
                title: Restaurant.Name,
                map: maps,
            });

            marker.setAnimation(google.maps.Animation.BOUNCE);

        },
        onSearch: async function () {

            var input = this.txt_search;
            var resultsMap = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: position,
            });
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({ 'address': input }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not succressful for the following reason : ' + status);
                }


            });

        }
    },
    mounted() {
        fetch("http://localhost:53157/api/Restaurant")//connect Web api rest ful
            .then(response => response.json())
            .then((data) => {

                this.Restaurants = data;
                this.onLoad(data);
            })

    }
    //template: `
    //<table class="table table-hover">
    //    <tr>
    //        <th style="width: 20px">#</th>
    //        <th>ชื่อ</th>
    //        <th>ที่อยู่</th>
    //        <th style="width: 40px">Label</th>
    //    </tr>
    //    <tr v-for="Restaurant, i in Restaurants">
    //        <td>{{Restaurant.Id}}.</td>
    //        <td>{{Restaurant.Name}}</td>
    //        <td>{{Restaurant.Description}}</td>
    //        <td></td>
    //    </tr>
    //</table>

    //`,

});
function initMap() { }