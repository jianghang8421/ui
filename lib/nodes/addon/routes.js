import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('node-drivers', { path: '/node-drivers' });
  this.route('node-templates');
});
