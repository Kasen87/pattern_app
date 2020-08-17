/* manager.mjs
 *
 *
 * This is a singleton class.
 */

class Manager {
  constructor() {
    if (!Manager.instance) {
      this._data = []
      Manager.instance = this;
    }

    return Manager.instance;
  }

  add(item) {
    this._data.push(item)
  }
}

const MANAGER = new Manager();

Object.freeze(MANAGER);

export default MANAGER;
