if (document.querySelector('#leaflet') && window.innerWidth > 660) {

    Icon = L.icon({
        iconUrl: '/icons/map_marker.svg',

        iconSize: [46, 56], // size of the icon
        iconAnchor: [17, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });

    let mymap = null;
    initNewMap();

    const mapList = document.querySelector('.map-list');
    const cityMarkers = mapList.querySelectorAll('[data-map-coords][data-map-popup]');

    cityMarkers.forEach(marker => {
        addCityMarker(marker.dataset.mapCoords, marker.dataset.mapPopup);
    });

    mapList.addEventListener('click', e => {
        const target = e.target.closest('.map-list__item');
        const markers = target.querySelectorAll('[data-map-coords][data-map-popup]');

        let _coords = [...markers].reduce((prev, next) => {
            prev.push({
                coords: next.dataset.mapCoords,
                popup: next.dataset.mapPopup
            });
            return prev;
        }, [])

        let firstCoords = _coords[0].coords.split(',');
        const latlng = {
            lat: (firstCoords[0]),
            lng: (firstCoords[1])
        }
        mymap.setView(latlng, 12)

    })

    function initNewMap(coords = [53.25294555344943, 45.829022579082434], zoom = 4) {
        mymap = L.map('leaflet', {
            zoomControl: false
        }).setView(coords, zoom);

        L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
                attribution: '_',
                minZoom: 4,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            })
            .addTo(mymap);
    }

    function addCityMarker(coords, text) {
        if (!coords) return;
        let _coords = coords.split(',');

        var marker = L.marker([Number(_coords[0]), Number(_coords[1])], {
                icon: Icon
            })
            .setZIndexOffset(100).addTo(mymap);
        marker.bindPopup(text);

        marker.on('click', function (e) {
            const targetList = document.querySelector('.map-list [data-map-coords="' + e.latlng.lat + ', ' + e.latlng.lng + '"]');
            if (targetList) {
                targetList.parentNode.querySelector('[data-spoiler-button]').click();
            }
            mymap.setView(e.latlng, 12);
        });
    }
}