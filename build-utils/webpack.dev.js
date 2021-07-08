const port = process.env.PORT || 3000;

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: port,
        hot: true
    },
}

module.exports = config;