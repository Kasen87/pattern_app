/* Bartender.mjs
 *
 *
 * Bring the Bartender to life
 */
import BaseObserver from './private/base_observer.mjs'
export default class Bartender extends BaseObserver {
	constructor(name='Alex') {
		super({name: name});
	}

	notificationMethod( payload = null ) {
		console.log(`Bartender Benny was notified that ${payload.name} is thirsty: ${payload.state.isThirsty}`)
	}
}
