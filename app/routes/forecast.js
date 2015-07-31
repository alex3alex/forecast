export default Ember.Route.extend({
  model: function() {
    var lat = (Math.random()*180 - 90).toFixed(3);
    var lng = (Math.random()*360 - 180).toFixed(3);

    return { lat: lat, lng: lng }
  }
});
