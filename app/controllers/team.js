import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    edit(model) {
      model.save().then(() => {
        this.transitionToRoute('application');
      });
    },
    destroy(model) {
      model.destroyRecord().then(() => {
        this.transitionToRoute('application');
      });
    }
  }
});
