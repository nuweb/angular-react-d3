module.exports = {
    context: __dirname + '/client',
    entry: './app.js',
    output: {
        path: __dirname + '/client',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./client",
        port: 1111
    }
}