import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '//u-to-world.com:3000'

export function getFirstScreenData() {

  let api = {
    personalizedData: axios.get("/personalized"),
    bannerData: axios.get("/banner"),
    privateContent: $axios.get("/personalized/privatecontent") //独家放送
  };

  return axios.all([
    api.personalizedData,
    api.bannerData,
    api.privateContent
  ]).then((personalizedData, bannerData, privateContent) => {
      //debugger
    return Promise.resolve(personalizedData.data, bannerData.data, privateContent.data)
    
  })
}
