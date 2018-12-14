let self;

export default class ScriptManager {

  _scripts: Set<any>;

  constructor() {
    if (!self) {
      self = this;
      this._scripts = new Set();
    }
    return self;
  }

  addScriptUrl(script) {
    if (!this._scripts.has(script)) {
      this._scripts.add(script);
      if (!!window) {
        const scriptEl = document.createElement('script');
        scriptEl.src = script;
        const firstScriptEl = document.getElementsByTagName('script')[0];
        firstScriptEl.parentNode.insertBefore(scriptEl, firstScriptEl);
      }
    }
  }

  replaceScriptUrl(script) {
    if (this._scripts.has(script)) {
      this._scripts.delete(script);

      if (!!window) {
        // remove old script tag
        const scripttags = document.getElementsByTagName('script');
        for (let i = scripttags.length - 1; i >= 0; i--) {
          if (
            scripttags[i].hasAttribute('src') &&
            scripttags[i].getAttribute('src').indexOf(script) !== -1
          ) {
            scripttags[i].parentNode.removeChild(scripttags[i]);
            break;
          }
        }
      }
    }
    this.addScriptUrl(script);
  }
}