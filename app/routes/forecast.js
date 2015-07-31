import Ember from 'ember';
import ForecastAdapter from 'forecast/adapters/forecast';

export default Ember.Route.extend({
  model: function() {
    var lat = (Math.random()*180 - 90).toFixed(3);
    var lng = (Math.random()*360 - 180).toFixed(3);
    var coords = lat + "," + lng;
    var adapter = ForecastAdapter.create();

    return adapter.find('forecast', coords);
  }
});
