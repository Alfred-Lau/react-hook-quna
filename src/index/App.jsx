import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/header';

import TimeSelect from './components/TimeSelect';
import AddressSelect from './components/AddressSelect';
import Submit from './components/Submit';
import SingleSelect from './components/SingleSelect';

const App = function (props) {
  /* 为了避免每次创建新的函数句柄生成造成重新渲染，我们需要使用 useE 把函数的使用包起来 ,这样保证函数只会生成一次，进而 Header 组件只会渲染一次*/
  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const handleSubmit = useCallback(() => {
    //我要提交
  }, []);

  return (
    <>
      <Header title="火车票" goBack={goBack}></Header>
      <div className="bg-image"></div>
      <div className="search-box">
        <AddressSelect></AddressSelect>
        <TimeSelect></TimeSelect>
        <SingleSelect></SingleSelect>
        <Submit title="搜索" onSubmit={handleSubmit}></Submit>
      </div>
    </>
  );
};

export default connect()(App);
