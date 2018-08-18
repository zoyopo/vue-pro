import * as types from './mutation-types'

const mutations = {
  [types.storeCategoriesInfo] (state, CategoriesInfo) {
    state.CategoriesInfo = CategoriesInfo
  },
  [types.storePlayListInfo] (state, playListInfo) {
    state.playListInfo = playListInfo
  },
  [types.storeUserInfo] (state, userInfo) {
    state.userInfo = userInfo
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  },

  [types.FETCH_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  },
  [types.SET_CURRENT_SONG] (state, currentSong) {
    state.currentSong = currentSong
  },
  [types.SET_PLAY_STATE] (state, playState) {
    state.play = playState
  }
}

export default mutations
