import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      list: ['oi', 'ola'],
      msg: 'Pressione qualquer tecla',
    };
  },
  mutations: {
    setMsg(state, newMsg) {
      state.msg = newMsg;
    },
    addItem(state, item) {
      state.list.push(item);
    },
    deleteItem(state, item) {
      const index = state.list.findIndex((el) => el === item);
      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },
  },
  actions: {
    updateMsg({ commit }, newMsg) {
      commit('setMsg', newMsg);
    },
    addItemToList({ commit }, item) {
      commit('addItem', item);
    },
    deleteItemFromList({ commit }, item) {
      commit('deleteItem', item);
    },
  },
  getters: {
    getList(state) {
      return state.list;
    },
    getMsg(state) {
      return state.msg;
    },
  },
});

export default store;
