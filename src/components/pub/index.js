import Pub from '../pub.vue';

/* istanbul ignore next */
Pub.install = function (Vue) {
  Vue.component(Pub.name, Pub);
};

export default Pub;
