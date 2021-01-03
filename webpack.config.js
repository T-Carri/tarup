const path= require('path');
const {CleanWebpackPlugin}= require('clean-webpack-plugin');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports={
    entry:'./src/app/index.js',
    output:{
        path:path.resolve(__dirname + 'dist'),
        filename: 'bundle.[hash].js'
}, 
module:{        
    rules:[
        {
test:/\.(js|jsx)$/,
exclude:/node_modules/,
use:'babel-loader', 
resolve:{extensions:['.js', '.jsx']},
},
{
    test:/\.ejs$/,
    
    use:['style-loader', 'css-loader'],
}
]
} , 
plugins:[
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
        
        template:'./src/views/T1.ejs',
    })
]
};