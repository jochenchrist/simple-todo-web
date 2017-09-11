import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      let task = this.get('task');
      this.sendAction("deleteTask", task);
    },
    markAsCompleted() {
      let task = this.get('task');
      task.checked = true;
      task.save();
    }
  }
});
