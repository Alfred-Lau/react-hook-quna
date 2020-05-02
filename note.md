# React Hooks 去哪网

## 知识点

1. 删除 除某一文件外的其他文件

```bash
ls | grep -v serviceWorker.js | xargs rm
```

2. 单页改多页

3. redux 的数据结构和操作设计 是难点

4. 异步 action ： action return 一个函数 （dispatch[, getState]）=>{/_ async operation_/ dispatch({type:'',payload})}

5. reducer 的两个参数， prevState【需要默认值】, action

6. action 的参数 payload: action 你光创建没用，你要 dispatch
