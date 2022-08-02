import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modalModule = {
  namespaced: true,
  state: () => ({
    editModal: {
      isOpen: false,
      editId: null
    },
  }),
  mutations: {
    openEdit(state) {
      state.editModal.isOpen = true
    },
    closeEdit(state) {
      state.editModal.isOpen = false
    },
    setEditId(state, payload) {
      state.editModal.editId = payload
    }
  },
  actions: {},
  getters: {
    getEditModalStatus: (state) => {
      return state.editModal.isOpen
    },
    getEditId: (state) => {
      return state.editModal.editId
    }
  }
}

const cardsModule = {
  namespaced: true,
  state: () => ({
    cards: [
      {
        id: 1,
        title: "Заголовок",
        body: "Тут само описание",
        status: 'todo'
      },
      {
        id: 2,
        title: "Другой Заголовок",
        body: "Тут само описание",
        status: 'todo'
      },
      {
        id: 3,
        title: "its title",
        body: "its body",
        status: 'todo'
      },
      {
        id: 4,
        title: "its title on 4 card",
        body: "its body",
        status: 'inprogress'
      },
      {
        id: 5,
        title: "its title in 5 card",
        body: "i dont care",
        status: 'done'
      },
    ],
  }),
  mutations: {
    add_card(state, card) {
      state.cards.push(card);
    },
    delete_card(state, id) {
      state.cards = state.cards.filter((card) => card.id != id);
    },
    edit_card(state, payload) {
      let test = state.cards.find(card => card.id === payload.id)
      test.title = payload.title ? payload.title : test.title 
      test.body = payload.body ? payload.body : test.body
      test.status = payload.status ? payload.status : test.status
    }
  },
  actions: {
    addCard({ commit }, card) {
      commit("add_card", card);
    },
    deleteCard({ commit }, id) {
      commit("delete_card", id);
    },
    editCard({commit}, payload){
      commit("edit_card", payload)
    }
  },
  getters: {
    todoCards: state => {
      return state.cards.filter(card => card.status === 'todo')
    },
    inprogressCards: state => {
      return state.cards.filter(card => card.status === 'inprogress')
    },
    doneCards: state => {
      return state.cards.filter(card => card.status === 'done')
    },
    allCards: state => {
      return state.cards
    },
    cardsCount: (state, getters) => {
      return getters.allCards.length
    },
    getCardsIds: (state) => {
      let idList = []
      state.cards.map(card => {
        idList.push(card.id)
      })
      return idList
    },
    getNextId: (state, getters) => {
      let ID_LIST = getters.getCardsIds
      let maxValue = getters.cardsCount + 1
      for (let i = 1; i <= maxValue; i++) {
        let res = ID_LIST.indexOf(i)
        if (res === -1) {
          return i
        }
      }
      return maxValue
    },
    getCardById: state => id => {
      return state.cards.find(card => card.id === id)
    }
  }
}

export default new Vuex.Store({
  modules: {
    edit: modalModule,
    cards: cardsModule
  }
})
