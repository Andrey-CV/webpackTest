//in config nodeJS code
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js', //input
    output: {
        path: path.resolve(__dirname, './dist'), //'./dist/' - but absolutly!
        filename: 'main.js',
        publicPath: 'dist/' //относительная ссылка
    },
    devServer: {
        overlay: true //error сразу на экране
    },
    module: {
        rules: [
            {
                test: /\.js$/, //задаём правило в виде regexp
                loader: 'babel-loader', //который установили
                exclude: '/node_modules/' //задаём исключение из правила
            },
            {
                test: /\.css$/,
                //порядок важен:
                //css будет храниться внутри main.js
                /* use: ['style-loader' //считывает данные с файла
                    , 'css-loader'] //подключает к странице 
                */
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader", //ликвидирует последствия style-loader (для отката)
                    use: "css-loader"
                })
            }
        ]
    },
    //devtool: 'eval-sourcemap' //карта кода - помещает всю карту в main.js (раздувая его!!!)

    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => { //for sourcemap
    let production = options.mode === 'production';

    //настройка conf в зависимости от режима работы (dev or prod)
    conf.devtool = production 
                    ? false //'source-map'//false - скрываем свой код!
                    : 'eval-sourcemap'; 

    //console.log(options);
    return conf;
}