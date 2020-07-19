import GeometryImport from './Geometry/_import'

export default (Vue) => {
    GeometryImport(Vue)
    install(Vue);
};

function install(Vue) {
    Vue.component('FakeContent', () => import('./FakeContent.vue'))
}