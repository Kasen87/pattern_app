/* Guest.js
 *
 *
 * Bring the Guest to life
 */

export class Guest {
	constructor(name='Kevin') {
		this.name = name;
	}

	introduceSelf() {
		console.log(`Hello, my name is ${this.name}.`);
	}
}
