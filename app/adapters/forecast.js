import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  find: function(name, coords) {
    return ajax("/" + coords)
  }
});
