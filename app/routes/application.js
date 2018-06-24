import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      teams: this.get('store').findAll('team'),
      players: this.get('store').findAll('player')
    });
  }
});
