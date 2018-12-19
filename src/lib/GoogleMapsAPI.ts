import ScriptManager from './ScriptManager';

const API_KEY = ``;

class GoogleMaps {

  scriptManager: any;

  constructor(apiKey: string = API_KEY) {
    this.scriptManager = new ScriptManager().addScriptUrl(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`);
  }

  private async _getGoogleMapsAPI() {
    return new Promise((resolve, reject) => {

      const detect = (windowObjectName, maxTries, tries = 0) => {
        if (window && window[windowObjectName]) {
          resolve(window[windowObjectName]);
        } else if (tries > maxTries) {
          reject({ status: 'Google Places API has not loaded' });
        }
        setTimeout(() => {
          detect(windowObjectName, maxTries, tries + 1);
        }, 100);
      };

      detect('google', 50);
    });
  }

  async getGoogleMapsAPI() {
    const google: any = await this._getGoogleMapsAPI().then(res => res);
    return google;
  }

  async getMap() {
    const map: any = await this.getGoogleMapsAPI().then(res => res.maps);
    return map;
  }

  async getAutocompleteService() {
    const service: any = await this.getGoogleMapsAPI().then(res => new res.maps.places.AutocompleteService());
    return service;
  }

  async fetchPlacePredictions(input: string) {
    const predictions: any =
      await this.getAutocompleteService()
                .then(service => {
                  return new Promise((resolve, reject) => {
                    service.getPlacePredictions({ input }, resolve);
                  });
                })
                .then(predictions => predictions);

    return predictions;
  }

}

export const googleMaps = new GoogleMaps();

export const fetchPlacePredictions = (input: string) => input && googleMaps.fetchPlacePredictions(input);

export const getMap = () => googleMaps.getMap();