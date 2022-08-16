
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        externalResolver: true,
    },
}

const mw =  (req, res) => (
    httpProxyMiddleware(req, res, {
            target: "http://localhost:5000",
            changeOrigin: true,
            secure: false,
        // https://retoolapi.dev
            pathRewrite: [{
                patternStr: '^/api/init',
                replaceStr: '/geeOvB/data'
            },{
                patternStr: `^/api/filter`,
                replaceStr: `/geeOvB/data`
            },{
                patternStr: `^/api/post`,
                replaceStr: `/geeOvB/data`
            },{
                patternStr: `^/api/test`,
                replaceStr: ``
            }],
            cookieDomainRewrite: {
                "*": "localhost"
            },
            // cookiePathRewrite: {
            //     "*": "/new"
            // // },
            // headers: {
            //     'Set-Cookie': "test=value; Domain=newdomain",
            //
            // }
        })
);

export default mw;

