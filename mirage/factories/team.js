import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.company.companyName()} Football Team`
  },
  afterCreate(team, server){
    server.createList('players', 10, { team })
    server.create('coach', { team })
  },
});
