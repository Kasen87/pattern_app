/* base_observer.js
 *
 *
 * Create a base observer class
 */

export default class BaseObserver {
  constructor({ name = "BaseObserver" }) {
    this.name = name;
  }

  observeSubject({ subject = null }) {
    if (!subject) { return };

    subject.attachObserver(this.observerDetails());
  }

  ignoreSubject({ subject = null }) {
    if (!subject) { return };

    subject.detachObserver(this.observerDetails());
  }

  observerDetails() {
    return {
      name: this.name,
      notificationMethod: ( payload ) => { return this.notificationMethod(payload) }
    }
  }
}
