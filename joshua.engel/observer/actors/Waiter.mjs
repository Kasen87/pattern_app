/* Waiter.mjs
 *
 *
 * Bring the Waiter to life
 */

export class Waiter {
	constructor(name='Jessie') {
		this.name = name;
	}

	introduceSelf(myPatron=null) {
		if ( !myPatron ) { return; }

		console.log(`Hello, my name is ${this.name}.`);
		myPatron.introduceSelf();

		console.log(`Pleasure to have you here with us. I'll be nearby, so let me know if you need anything.`);

		myPatron.needSomething(this);
	}

	letMeKnow(myPatron=null) {
		console.log(`Looks like ${myPatron.yourName()} needs something!`);
	}
}
