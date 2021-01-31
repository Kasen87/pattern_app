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
      notificationMethod: ( payload ) => {
        payload.currentState = this.safelyCall(payload.getCurrentState)

        console.log(`${this.name} was told that ${payload.name} ${payload.currentState.newStatusString}.`);

        return this.notificationMethod(payload);
      }
    }
  }

  safelyCall( methodToCall ) {
    return this.isCallableMethod(methodToCall) ? methodToCall() : methodToCall;
  }

  isCallableMethod( methodToTest ) {
    return ( typeof methodToTest === typeof Function )
  }
}
