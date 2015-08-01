import Ember from 'ember';
import ForecastAdapter from 'forecast/adapters/forecast';

export default Ember.Route.extend({
  model: function() {
    return this.adapter.find('forecast', this._getRandomCoords());
  },
  adapter: ForecastAdapter.create(),
  actions: {
    fetchForecast: function() {
      var self = this;
      this.adapter.find('forecast', this._getRandomCoords()).then(function(newForecast) {
        console.log(newForecast);
        self.controller.set('model', newForecast);
      });
    }
  },
  _getRandomCoords: function() {
    var lat = (Math.random()*180 - 90).toFixed(3);
    var lng = (Math.random()*360 - 180).toFixed(3);
    return lat + "," + lng;
  }
});
