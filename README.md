# vue-cli-init-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 以下是测试案例

#### VConsole
1. nppm i vconsole -s
2. import VConsole from "vconsole/dist/vconsole.min.js";
3. new VConsole();

#### Vant
1. npm i vant -S  安装 Vant 2.x 版本
2. 配置按需引入 babel7用户在根目录下的babel.config.js配置
```javascript
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true
      },
      "vant"
    ]
  ]
```
3. main.js中引入全局样式(不知道为何官网没这个说明)
  + import "vant/lib/index.css";
4. 页面按需引入使用
```javascript
  import Vue from 'vue';
  import { Button } from 'vant';

  Vue.use(Button);
```


### 项目规范参考

1. # project-name
2. ## 项目规范
3. ### 组件 
4. ### 文件目录规范
5. ### 开发环境配置
6. ### 其他