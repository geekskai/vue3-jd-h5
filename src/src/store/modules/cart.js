const state = {
  items: [],
  name: 'test',
  count: 0,
  // cartArray: JSON.parse(localStorage.getItem('cartArray')) || [],
  checkoutStatus: null
}

// getters
const getters = {
  // goodsCount(state) {
  //   let count = 0
  //   state.cartArray.forEach(it => {
  //     count += it.count
  //   })
  //   return count
  // },
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({
      id,
      quantity
    }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout({
    commit,
    state
  }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', {
      items: []
    })
  },

  addProductToCart({
    state,
    commit
  }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', {
          id: product.id
        })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', {
        id: product.id
      }, {
        root: true
      })
    }
  }
}

// mutations
const mutations = {
  addToCart(state) {
    state.count++
  },
  pushProductToCart(state, {
    id
  }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity(state, {
    id
  }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  setCartItems(state, {
    items
  }) {
    state.items = items
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
