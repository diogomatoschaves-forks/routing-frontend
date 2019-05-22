
const mapboxgl = jest.genMockFromModule('mapbox-gl/dist/mapbox-gl');

class Map {
  addControl = () => jest.fn()
  on = (input) => {
    if (input === 'click') {
      const event = {
        lngLat: {
          lat: 53,
          lng: 12
        }
      }
      return () => jest.fn(event)
    }
    else return () => jest.fn()
  }
  // on = () => jest.fn()
  remove = () => jest.fn()
  fitBounds = () => jest.fn()
}

class Marker {
  setLngLat = jest.fn().mockImplementation(() => ({
    addTo: jest.fn()
  }))
  addTo = () => jest.fn()
  remove = () => jest.fn()
  getLngLat = () => jest.fn()
}

class LngLatBounds {
  extend = () => jest.fn()
}

const GeolocateControl = jest.fn()
const NavigationControl = jest.fn()
const Point = jest.fn()

mapboxgl.Map = Map
mapboxgl.Marker = Marker
mapboxgl.GeolocateControl = GeolocateControl
mapboxgl.NavigationControl = NavigationControl
mapboxgl.Point = Point
mapboxgl.LngLatBounds = LngLatBounds

export default mapboxgl;