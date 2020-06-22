// Instruction to every other class on how they can be an argument to addMarker method
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  mapperContent(): string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapDiv = document.getElementById(divId);
    this.googleMap = new google.maps.Map(mapDiv, {
      backgroundColor: 'black',
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('mouseover', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.mapperContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
