const path = require('path');
import pageRoutes from './config/router.config';
const server = 'http://localhost:3000';

// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      dll: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ]
      },
      hardSource: false,
      locale: {
        enable: true, // default false
        default: 'en-US', // default zh-CN
        baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
      },
    }],
  ],
  alias:{
    components:path.resolve(__dirname,'src/components'),
        utils:path.resolve(__dirname,'src/utils'),
        services:path.resolve(__dirname,'src/services'),
        models:path.resolve(__dirname,'src/models'),
        // themes:path.resolve(__dirname,'src/themes'),
        images:path.resolve(__dirname,'src/assets')
  },
  routes: pageRoutes,
  // proxy: {
  //   "/api": {
  //     "target": 'http://192.168.2.120:8081',
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api" : "/api" }
  //   }
  // }
}
