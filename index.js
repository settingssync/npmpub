import HelloWorld from './src/components/hello';
import Pub from './src/components/pub';

const components = [
  HelloWorld,
  Pub,
];

const install = (Vue) => {
  components.forEach((component) => {
    console.log('Vue===', Vue);
    Vue.component(component.name, component);
    console.log(component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install, HelloWorld, Pub };
