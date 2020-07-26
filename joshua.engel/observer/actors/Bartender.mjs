/* Bartender.mjs
 *
 *
 * Bring the Bartender to life
 */

export class Bartender {
	constructor(name='Alex') {
		this.name = name;
	}

	introduceSelf(myPatron=null) {
		if ( !myPatron ) { return; }
		console.log(`Hello, my name is ${this.name}.`);
		myPatron.introduceSelf();

		console.log(`If you need anything, let me know. I'll be around the bar.`);

		myPatron.needSomething(this);
	}

	letMeKnow(myPatron=null) {
		console.log(`Ah, ok! Looks like ${myPatron.yourName()} needs something!`);
	}

}
