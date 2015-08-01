import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  find: function(name, coords) {
    return ajax("/" + coords).then(function(result) {
      var forecast = {
        latitude: result.latitude,
        longitude: result.longitude,
        timezone: result.timezone,
        temperature: result.currently.temperature,
        apparentTemperature: result.currently.apparentTemperature,
        humidity: result.currently.humidity,
        summary: result.currently.summary,
        precipIntensity: result.currently.precipIntensity,
        precipProbability: result.currently.precipProbability
      };

      return forecast;
    });
  }
});
