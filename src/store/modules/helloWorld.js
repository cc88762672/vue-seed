const state = {
  increment: 0,
};

const getters = {};
Object.keys(state).forEach(prop => {
  getters[prop] = state => state[prop];
});

const mutations = {};
Object.keys(state).forEach(prop => {
  const setProp = `set${prop.charAt(0).toUpperCase()}${prop.slice(1)}`;
  mutations[setProp] = (state, payload) => {
    state[prop] = payload;
  };
});

// actions不做统一处理，因为大多数情况下，并不需要使用异步设置值
// 若需要使用actions，注意：mutation_type的命名规则为set开头加上state对象属性的camel形式
// const actions = {
//   async setIncrement({ commit }, value) {
//     commit('setIncrement', await value);
//   },
// };
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
