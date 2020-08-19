/* manager.mjs
 *
 *
 * This is a singleton class.
 */

class Manager {
  constructor( startingData = [] ) {
    this._data = startingData;
  }

  add(item = false) {
    if (item === false) { throw new TypeError() }

    this._data.push(item)
  }

  get() {
    return Manager.instance;
  }
}

let newManagerInstance = (data) => {
  if (Manager.instance) { return Manager.instance };

  let newInstance = new Manager(data);
  Object.freeze(newInstance);
  Manager.instance = newInstance;

  return Manager.instance;
}

export const MANAGER = {
  new: (data) => { return newManagerInstance(data); }
}
