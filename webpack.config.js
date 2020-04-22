
module.exports = {
	devtool: 'eval-source-map',
	//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
	//自动刷新显示修改后的结果
	devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
		//host: '192.168.0.104',
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
		port: 8090,
	  } ,
	  resolve: {
	          alias: {
	              'vue$': 'vue/dist/vue.esm.js'
	          },
	  },
	  
	 module: {
	         rules: [
	             // {
	             //     test: /(\.jsx|\.js)$/,
	             //     use: {
	             //         loader: "babel-loader",
	             //         options: {
	             //             presets: [
	             //                 "env", "react"
	             //             ]
	             //         }
	             //     },
	             //     exclude: /node_modules/
	             // }
	         ]
	     }
		 
		   
}
