import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/header';

import TimeSelect from './components/TimeSelect';

const App = function (props) {
  /* 为了避免每次新的函数生成造成重新渲染，我们需要使用 useE 把函数的使用包起来 ,这样保证函数只会生成一次，进而 Header 组件只会渲染一次*/
  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <>
      <Header title="火车票" goBack={goBack}></Header>
      <TimeSelect></TimeSelect>
    </>
  );
};

export default connect()(App);
