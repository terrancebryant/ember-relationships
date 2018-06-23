import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  // players: DS.hasMany('player'),
  // coach: DS.belongsTo('coach')
});
