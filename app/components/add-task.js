import Ember from 'ember';

export default Ember.Component.extend({
  newTaskName: "",
  actions: {
    addNewTask() {
      if(!this.newTaskName) {
        return;
      }
      let newTask = {"name": this.newTaskName};
      this.set('newTaskName', '');
      this.sendAction('addNewTask', newTask);
    }
  }
});
