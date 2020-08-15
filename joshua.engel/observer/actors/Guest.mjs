/* Guest.js
 *
 *
 * Bring the Guest to life
 */

export class Guest {
	constructor(name='Kevin') {
		this.name = name;
		this.providers = [];
	}

	introduceSelf() {
		console.log(`Hello, my name is ${this.name}.`);
	}

	yourName() {
		return this.name;
	}

	letThemKnow(whatToSay='Hey!'){
		if ( this.providers.length > 0 ) {
			this.providers.forEach((provider) => {
				provider.letMeKnow(this);
			})
		}
	}

	sitsDown() {
		console.log(`${this.name} sits down.`);
	}

	needSomething(myProvider=null) {
		if ( !myProvider ) { return; }
		console.log(`${this.name} thinks: Ok, I will let them know if I need anything.`);
		this.providers.push(myProvider);
	}

	isWaiting(seconds=5) {
		for (let i = 0; i < seconds; i++) {
			console.log('...');
		}
		this.letThemKnow(`I'm thirsty`);
	}
}
