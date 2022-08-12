const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = app => {
    app.use(
        createProxyMiddleware('getdata',
            {
                target: "https://retoolapi.dev/geeOvB/data",
                changeOrigin: true
            }
        )
    )
}