import { listConfig } from '@/api/system/config'
const config = {
  state: {
    adminKey: '',
  },

  mutations: {
    SET_ADMIN_KEY: (state, adminKey) => {
      state.adminKey = adminKey
    },
  },

  actions: {
    // 获取系统配置信息
    GetConfig({ commit }) {
      return new Promise((resolve, reject) => {
        listConfig().then(res => {
          commit('SET_IS_ADMIN', res.isAdmin)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default config
