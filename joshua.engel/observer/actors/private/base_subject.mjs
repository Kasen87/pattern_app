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
    this.observers.push({
      name: name,
      notify: notificationMethod
    });
  }

  detachObserver({ name = "" }) {
    let remainingObservers = this.observers.flatMap( observer => {
      return observer.name === name ? [] : observer
    });

    this.observers = remainingObservers;
  }

  notifyObservers({ notificationPayload = null }) {
    let observersToNotify = this.observers

    observersToNotify.forEach( observer => {
      observer?.notify(notificationPayload)
    });
  }
}
