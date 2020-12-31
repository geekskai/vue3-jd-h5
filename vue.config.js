const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  },
  configureWebpack: {
    devServer: {
      disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
      before(app) { // 改完接口需要重启才能生效
        // 用户信息池
        const userpoor = [{
          username: 'admin',
          password: '123'
        },
        {
          username: 'grists',
          password: '123456'
        }
        ]
        // mock注册数据
        app.get('/api/register', (req, res) => {
          const {
            username,
            password
          } = req.query
          const userlength = userpoor.filter(user => {
            user.username === username
          }).length
          if (userlength > 0) {
            res.json({
              code: 0,
              message: '用户名已经存在!',
              result: []
            })
          } else {
            res.json({
              code: 1,
              message: '注册成功！',
              result: []
            })
          }
        })
        // 登录接口
        const tokenKey = 'xdafsfasfsfsf'
        app.get('/api/login', (req, res) => {
          const {
            username,
            password
          } = req.query
          if (username === 'zhangsan' && password === '123456' || username === 'tom' && password === '123') {
            res.json({
              code: 1,
              message: '登录成功!',
              token: tokenKey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000),
              result: []
            })
          } else {
            res.json({
              code: 0,
              message: '账号或者密码错误',
              result: {}
            })
          }
        })
        app.get('/api/banner', (req, res) => {
          res.json({
            code: 1,
            message: 'success',
            data: [{
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
            },
            {
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
            }
            ]
          })
        })
        app.get('/api/rollinglist', (req, res) => {
          res.json({
            code: 1,
            message: 'success',
            data: [
              [{
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              }

              ],
              [{
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              }
              ],
              [{
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              }
              ],
              [{
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              }
              ],
              [{
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              },
              {
                url: 'https://m.cdclass.net',
                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                label: '分类一'
              }
              ]
            ]
          })
        })
        app.get('/api/classify', (req, res) => {
          const {
            type
          } = req.query
          switch (type) {
            case '0':
              res.json({
                code: 1,
                message: 'success',
                data: [{
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                },
                {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                },
                {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                }, {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                }
                ]
              })
              break
            case '1':
              res.json({
                code: 1,
                message: 'success',
                data: [{
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米1'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为1'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀1'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果1'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo1'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo1'
                }
                ]
              })
              break
            case '2':
              res.json({
                code: 1,
                message: 'success',
                data: [{
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米2'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为2'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀2'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果2'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo2'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo2'
                }
                ]
              })
              break
            case '3':
              res.json({
                code: 1,
                message: 'success',
                data: [{
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米3'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为3'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀3'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果3'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo3'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo3'
                }
                ]
              })
              break
            default:
              res.json({
                code: 1,
                message: 'success',
                data: [{
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                },
                {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                },
                {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                }, {
                  image: 'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                  label: '小米'
                },
                {
                  image: 'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                  label: '华为'
                },
                {
                  image: 'https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                  label: '荣耀'
                },
                {
                  image: 'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                  label: '苹果'
                },
                {
                  image: 'https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png',
                  label: 'vivo'
                },
                {
                  image: 'https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png',
                  label: 'oppo'
                }
                ]
              })
              break
          }
        })
      }
    }
  }

}
