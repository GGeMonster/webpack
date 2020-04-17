#windows  管理员cmd运行
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack

//项目的依赖模块  自动创建这个package.json文件
npm init

// 安装Webpack
npm install --save-dev webpack

#命令打包    全局安装后命令
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
# webpack {entry file} {destination for bundled file}
webpack app/main.js -o public/bundle.js

#非全局安装命令
# webpack非全局安装的情况
node_modules/.bin/webpack app/main.js public/bundle.js


#注：package.json中的script会安装一定顺序寻找命令对应位置，本地的node_modules/.bin路径就在这个寻找清单中，
#所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。

#npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，
#如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build，我们在命令行中输入npm start试试，


#生成Source Maps
devtool: 'eval-source-map'


#使用webpack构建本地服务器   windows 管理员cmd运行
npm install --save-dev webpack-dev-server
#配置文件webpack.config.js
devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
#package.json中的scripts对象中添加如下命令
"server": "webpack-dev-server --open"
#运行
npm run server
#关闭
ctrl+c


#Loaders
#Loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置，Loaders的配置包括以下几方面：
 #   test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
  #  loader：loader的名称（必须）
   # include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    #  query：为loaders提供额外的设置选项（可选）






