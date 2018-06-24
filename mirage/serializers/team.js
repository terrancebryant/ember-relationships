import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['players', 'coach'],
  embed:true
});
