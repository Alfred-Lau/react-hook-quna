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

7. !! prop-types 在 react 中要作为套路

8. useCallback 只要需要传递给子组件的函数属于静态函数，我们就最好使用 useCallback 把它包裹起来

9. img 的 src 属性可以设置 svg 图片

10. useMemo 和 bindActionCreator 的结合 ？？

11. form 提交

12. createContext 需要和 useContext 配合使用，后者相当于 Context.Consumer
