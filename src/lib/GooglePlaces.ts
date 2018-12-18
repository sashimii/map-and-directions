import ScriptManager from './ScriptManager';

const API_KEY = `AIzaSyBrNsDqNvWcz4dTEsXWYl3dQWQRJ59D1IE`;

class GooglePlaces {

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

export const GooglePlacesAPI = new GooglePlaces();

export const fetchPlacePredictions = (input: string) => input && GooglePlacesAPI.fetchPlacePredictions(input);