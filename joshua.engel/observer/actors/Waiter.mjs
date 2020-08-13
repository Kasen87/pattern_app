/* Waiter.mjs
 *
 *
 * Bring the Waiter to life
 */

import BaseObserver from "./private/base_observer.mjs";

export default class Waiter extends BaseObserver {
	constructor({ name = "Waiter" }) {
		super({ name: name })

		this.tablesToWatch = [];
	}

	addTable({ table = null }) {
		if (!table) { return };

		this.tablesToWatch.push(table)
	}

	notificationMethod( payload = null ) {
		if (!payload) { return; }

		this.placeWater({name: payload.name})
	}

	placeWater({ name = null }) {
		let tableToWater = this.tablesToWatch.find(element => element.guest === name)

		if (!tableToWater) { return; }

		tableToWater.hasWater = true;
	}
}
