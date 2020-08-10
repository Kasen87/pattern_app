/* Guest.js
 *
 *
 * Bring the Guest to life
 */

import BaseSubject from "./private/base_subject.mjs";

export default class Guest extends BaseSubject {
	constructor({ name = "Kevin" }) {
		super({name: name})

		this.isThirsty = false;
	}

	myState() {
		return {
			isThirsty: this.isThirsty,
		}
	};

	sitDown({ table = null }) {
		if (!table) { return };

		table.guest = this.name;
	}

	isWaiting({ seconds = 1 }) {
		setTimeout(() => {
			return this.becameThirsty();
		}, seconds * 1000)
	}

	drinkWater() {
		this.isThirsty = false;

		return this.statusChanged();
	}

	becameThirsty() {
		this.isThirsty = true;

		return this.statusChanged();
	}

	statusChanged() {
		let data = {
			name: this.name,
			state: this.myState()
		}

		return super.notifyObservers({ notificationPayload: data });
	}
}
