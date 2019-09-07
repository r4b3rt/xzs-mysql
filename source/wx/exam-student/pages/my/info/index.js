// pages/user/info/index.js
const app = getApp()
Page({
  data: {
    sexItems: app.globalData.sexEnum,
    levelItems: app.globalData.levelEnum,
    sexId: null,
    sexVal: null,
    levelIndex: null,
    levelVal: null,
    position: 'right',
  },
  handleSexChange({
    detail = {}
  }) {
    this.setData({
      sexVal: detail.value
    });
    for (let i = 0; i < this.data.sexItems.length; i++) {
      if (this.data.sexItems[i].value == detail.value) {
        this.setData({
          sexId: this.data.sexItems[i].key
        });
      }
    }
  },
  bindDateChange(e) {
    let {
      value
    } = e.detail;
    this.setData({
      birthDay: value
    })
  },
  bindLevelChange(e) {
    let levelIndex = parseInt(e.detail.value);
    this.setData({
      levelIndex: levelIndex,
      levelVal: this.data.levelItems[levelIndex].key
    })
  },
  loadUserInfo() {
    let _this = this
    _this.setData({
      spinShow: true
    });
    app.formPost('/api/wx/student/user/current', null).then(res => {
      if (res.code == 1) {
        app.globalData.userInfo = res.response
        _this.setData({
          info: res.response
        });
      }
      _this.setData({
        spinShow: false
      });
    }).catch(e => {
      _this.setData({
        spinShow: false
      });
      app.message(e, 'error')
    })
  },
  formSubmit: function(e) {
    let _this = this
    wx.showLoading({
      title: '提交中',
      mask: true
    })
    e.detail.value.sex = this.data.sexId;
    e.detail.value.userLevel = this.data.levelVal;
    app.formPost('/api/wx/student/user/update', e.detail.value)
      .then(res => {
        if (res.code == 1) {
          this.loadUserInfo();
          wx.switchTab({
            url: '/pages/my/index/index'
          })
        } else {
          app.message(res.message, 'error')
        }
        wx.hideLoading()
      }).catch(e => {
        app.message(e, 'error')
        wx.hideLoading()
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let userInfo = app.globalData.userInfo;
    let _this = this;
    for (let i = 0; i < this.data.sexItems.length; i++) {
      if (this.data.sexItems[i].key == userInfo.sex) {
        _this.setData({
          sexVal: this.data.sexItems[i].value,
          sexId: userInfo.sex
        });
      }
    }
    for (let i = 0; i < this.data.levelItems.length; i++) {
      if (this.data.levelItems[i].key == userInfo.userLevel) {
        _this.setData({
          levelVal: this.data.levelItems[i].key,
          levelIndex: i
        });
      }
    }
    _this.setData({
      realName: userInfo.realName,
      age: userInfo.age,
      birthDay: userInfo.birthDay,
      phone: userInfo.phone,
      userLevel: userInfo.userLevel,
    });
  }
})