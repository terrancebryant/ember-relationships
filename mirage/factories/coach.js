import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName()
  },
  lastName() {
    return faker.name.lastName()
  },
  avatar() {
    return 'https://pickaface.net/gallery/avatar/unr_shafin_160824_0316_y48ho.png'
  }
});
