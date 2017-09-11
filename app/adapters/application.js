import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://104.236.122.231:8080',
  namespace: 'api',
  headers: {
    'Accept' : 'application/hal+json'
  }
});
