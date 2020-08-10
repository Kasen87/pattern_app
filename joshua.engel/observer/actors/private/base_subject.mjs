/* base_subject.js
 *
 *
 * Create a base subject class
 */

export default class BaseSubject {
  constructor({ name = "BaseSubject", observers = [] }) {
    this.name = name;
    this.observers = observers;
  }

  attachObserver({ name = "", notificationMethod = null }) {
    console.log(name, "Attaching...")
    this.observers.push({
      name: name,
      notify: notificationMethod
    });
    console.log("Current Observer Array:", this.observers)
  }

  detachObserver({ name = "" }) {
    console.log(name, "Detaching...")
    let remainingObservers = this.observers.flatMap( observer => {
      observer.name === name ? [] : observer
    });

    this.observers = remainingObservers;
  }

  notifyObservers({ notificationPayload = null }) {
    let observersToNotify = this.observers

    observersToNotify.forEach( observer => {
      observer.notify(notificationPayload)
    });
  }
}
