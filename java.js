/**
 * Created by Gintarė on 2017-07-14.
 */
// The Menu
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" none", "");
    }

    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("current").click();

// Map
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(41.878114, -87.629798),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}
var marker = new google.maps.Marker({
    position: uluru,
    map: map
});
