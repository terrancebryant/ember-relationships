import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.company.companyName()} Football Team`
  },
  avatar() {
    return 'https://www.shareicon.net/data/128x128/2016/06/30/788972_people_512x512.png'
  },
  afterCreate(team, server){
    server.createList('player', 10, { team })
    server.create('coach', { team })
  },
});
