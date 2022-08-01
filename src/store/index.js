import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        title: "Заголовок",
        body: "Тут само описание"
      },
      {
        id: 2,
        title: "Другой Заголовок",
        body: "Тут само описание"
      },
      {
        id: 3,
        title: "its title",
        body: "its body"
      },
      {
        id: 4,
        title: "its title on 4 card",
        body: "its body"
      },
      {
        id: 5,
        title: "its title in 5 card",
        body: "i dont care"
      },
    ]
  },
  getters: {
    allCards: state => {
      return state.cards
    },
    cardsCount: (state, getters) => {
      return getters.allCards.length
    },
    getNextId: (state, getters) => {
      return getters.cardsCount + 1
    },
    getCardById: (state) => (id) => {
      return state.cards.filter(card => card.id === id)
    },

  },
  mutations: {
    add_card(state, card) {
      state.cards.push(card);
    },
    delete_card(state, id) {
      state.cards = state.cards.filter((card) => card.id != id);
    },
  },
  actions: {
    addCard({ commit }, card) {
      console.log('action - addCard')
      commit("add_card", card);
    },
    deleteCard({ commit }, id) {
      console.log('action - delCard')
      commit("delete_card", id);
    },
  },
  modules: {
  }
})
