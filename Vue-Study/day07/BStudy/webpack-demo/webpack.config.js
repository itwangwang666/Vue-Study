const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/main.js', //entry是指打包文件的入口,可以使用相对路径
    output:{
        path:path.join(__dirname,'dist'), //output是指输出的目录,必须是绝对路径
        filename:'bundle.js'
    },
    devServer:{
        contentBase:"./src",
        open:true,
        post:3000
    },
    mode: 'development'
};