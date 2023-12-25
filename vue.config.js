module.exports ={
  pages:{
    index:{
      entry:'src/main.js'
    }
  },
  //关闭语法检查
  lintOnSave:false,
  //开启代理服务器(将向该服务器发送请求)
  //只能配置一个服务器,且不能控制走不走代理 
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //第二种配置代理的方式
  //此代理接收8080符合条件的请求,将请求转发至5000端口
    devServer: {
      proxy: {
        //通过请求前缀判断是否走代理

        //第一个代理:
        '/hello': {
          target: 'http://localhost:5000',
          pathRewrite:{"^/hello":''},//匹配所有以hello开始的路径,将hello替换为'',即删除hello
          ws: true,
          //用于控制请求头中的host值 [告不告诉目标服务器我是代理这件事 ]
          //true: 不告诉, 伪装成与目标服务器一样的端口
          //false:告诉, 暴露原始端口
          changeOrigin: true //不写默认true
        },

        //第二个代理
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{"^/demo":''},
          ws: true,
          changeOrigin: true 
        },

      }
    }
}