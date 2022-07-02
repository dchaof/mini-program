// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'我爱你'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad')

    // this.setData({
    //   msg:'i love you'
    // })
    // console.log(this.data.msg)

    //非自身钩子函数
    // setTimeout(()=>{
    //   this.setData({
    //     msg : 'i love you'
    //   })
    //   console.log(this.data.msg)
    // },2000)
  },

  handleParent(){
    console.log('父')
  },
  handleChild(){
    console.log('子')
  },

  //进行路由跳转
  toLogs(){
    //写路径的时候一定要最前面写上 / 根目录  否则就会在该组件的路径上进行叠加
    //navigateTo跳转后有返回按钮  
    //redirectTo跳转后没有返回按钮 左上角有首页按钮
    //reLaunch跳转后没有返回按钮 左上角有首页按钮
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})