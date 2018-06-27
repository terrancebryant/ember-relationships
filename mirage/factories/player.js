import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName()
  },
  lastName() {
    return faker.name.lastName()
  },
  avatar() {
    return 'https://pickaface.net/gallery/avatar/vasil.stoqnov.10052ab55879de20.png'
  },
});
