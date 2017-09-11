import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNewTask(task) {
      this.get('store').createRecord('task', task).save();
    },
    deleteTask(task) {
      this.get('store').findRecord('task', task.id, {backgroundReload: false }).then(function(task) {
        task.destroyRecord();
      });
    }
  }
});
