import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/latest/latest'

import './app.css'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/latest/latest',
      "pages/hotest/hotest",
      "pages/node/node"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#000",
      selectedColor: "#56abe4",
      backgroundColor: "#fff",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/latest/latest",
          text: "最新",
          iconPath: "images/latest.png",
          selectedIconPath: "images/lastest_on.png"
        },
        {
          pagePath: "pages/hotest/hotest",
          text: "最热",
          iconPath: "images/hotest.png",
          selectedIconPath: "images/hotest_on.png"
        },
        {
          pagePath: "pages/node/node",
          text: "节点",
          iconPath: "images/node.png",
          selectedIconPath: "images/node_on.png"
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
