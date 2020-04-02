const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathPlugins = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        scripts: './index.js'
    },

    devtool: 'source-map',

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
           {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-react-jsx'],
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader?name=/image/[name].[ext]"
            }
        ]
    },

    plugins: [
        new CaseSensitivePathPlugins(),
        new webpack.DefinePlugin({
            BROWSER_SUPPORTS_HTML5: true
        }),
        new webpack.ProvidePlugin({ // common imports for all the source
            react: 'React'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html',
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true
            }
        }),
        new ExtractTextPlugin('styles.css'),
    ],

    watch: true
};