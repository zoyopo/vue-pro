import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '//u-to-world.com:3000'

export function getFirstScreenData() {

  let api = {
    personalizedData: axios.get("/personalized"),
    bannerData: axios.get("/banner"),
    privateContent: axios.get("/personalized/privatecontent") //独家放送
  };

  return axios.all([
    api.personalizedData,
    api.bannerData,
    api.privateContent
  ]).then(
    //debugger
    axios.spread(function (personalized, banner, privateContent) {

      return Promise.resolve([personalized, banner, privateContent])

    })).catch(err => {
    return Promise.reject(err);
  })

}


export function getPlayList(userId) {

  return axios
    .get("/user/playlist", {
      params: {
        uid: userId
      }
    }).then(res => {

      return Promise.resolve(res);

    }).catch(err => {

      return Promise.reject(err);
    })
}

export function getSongSheetsData(params, apiNames) {

  let api = {
    playlistData: (function () {
      return axios.get("/top/playlist", {
        params
      });
    })(),
    tagData: axios.get("/playlist/hot"),
    songCategoriesData: axios.get("/playlist/catlist") //歌单分类
  };
  apiNames = apiNames || ["playlistData", "tagData", "songCategoriesData"];
  let arr = apiNames.map(item => api[item]);
  return axios.all(arr).then(
    //debugger
    axios.spread(function (playlistData, tagData, songCategoriesData) {

      return Promise.resolve([playlistData, tagData, songCategoriesData])

    })).catch(err => {
    return Promise.reject(err);
  })

}
