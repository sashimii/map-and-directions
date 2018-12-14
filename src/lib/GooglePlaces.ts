import ScriptManager from './ScriptManager';

export default class GooglePlaces {

  scriptManager: any;

  constructor(apiKey) {
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

}
