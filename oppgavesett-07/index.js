mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hZXJpIiwiYSI6ImNrOHNvN3NpdDA5eWQzZWxtbDVlcWd6azkifQ.fDeT7dPDHC5ZnSf8YQyRxA';


const knapper = document.querySelector("#knapper")
const museumKnapper = document.querySelector("#museumKnapper")

const map = new mapboxgl.Map({
    container: 'kartet',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 16,
    center: [10.737190, 59.912322]
});

const byttModus = (evt) => {
    const knapp = evt.target
    const mode = knapp.dataset.mode

    map.setStyle(mode)
}

const velgMuseum = (evt) => {
    const knapp = evt.target
    const lng = knapp.dataset.lng
    const lat = knapp.dataset.lat

    map.flyTo({
        center: [lng, lat],
        zoom: 16
    })
}

const museer = [
    {
        navn: "Vikingskipshuset",
        tekst: "Vikingskipshuset, ofte kalt Vikingskipsmuseet, er et museum på Bygdøy i Oslo.",
        lng: 10.684409,
        lat: 59.904948
    },
    {
        navn: "Norsk Hermetikkmuseum",
        tekst: "Norsk Hermetikkmuseum er et museum som viser produksjon av fiskehermetikk.",
        lng: 5.725190,
        lat: 58.972546
    },
    {
        navn: "Gamle Bergen Museum",
        tekst: "Gamle Bergen Museum er et friluftsmuseum som ligger i bydelen Sandviken.",
        lng: 5.309325,
        lat: 60.418150
    },
    {
        navn: "Lofoten Krigsminne Museum",
        tekst: "Lofoten Krigsminne Museum er et militærhistorisk museum i Svolvær i Vågan kommune i Nordland.",
        lng: 14.564727,
        lat: 68.231263
    },
    {
        navn: "Svalbard Museum",
        tekst: "Svalbard museum er et natur- og kulturhistorisk museum for Svalbard og Arktis.",
        lng: 15.653029,
        lat: 78.222330
    }
]

const addMarker = (museum) => {
    const div = document.createElement("div")
    div.className = "museummarker"

    const marker = new mapboxgl.Marker(div)
    const minPopup = new mapboxgl.Popup()

    minPopup.setHTML(`
    <h2>${museum.navn}</h2>
    <p>${museum.tekst}</p>
    `)
    marker.setPopup(minPopup)

    marker.setLngLat([museum.lng, museum.lat])
    marker.addTo(map)
}

knapper.onclick = byttModus
museumKnapper.onclick = velgMuseum

const addMarkers = () => {
    for (const museum of museer) {
        addMarker(museum)
    }
}

map.on("load", addMarkers)