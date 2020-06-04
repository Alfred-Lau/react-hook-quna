import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/header';

import TimeSelect from './components/TimeSelect';
import AddressSelect from './components/AddressSelect';
import Submit from './components/Submit';
import SingleSelect from './components/SingleSelect';

import CityTreeSelect from '../common/CityTreeSelect';

import { exchangeFromTo } from '../store/actions';

const App = function (props) {
  const { from, to, dispatch } = props;

  const [cityVisible, setCityVisible] = useState(false);
  const [isCityLoading, setIsCityLoading] = useState(false);

  const [time, setTime] = useState(new Date().getTime());
  /* 为了避免每次创建新的函数句柄生成造成重新渲染，我们需要使用 useE 把函数的使用包起来 ,这样保证函数只会生成一次，进而 Header 组件只会渲染一次*/
  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const handleSubmit = useCallback(() => {
    //我要提交
  }, []);

  const handleSelect = useCallback(() => {
    // 处理弹窗城市选择
  }, []);

  const handleVisible = useCallback(() => {
    setCityVisible(!cityVisible);
  }, [cityVisible]);

  return (
    <>
      <Header title="火车票" goBack={goBack}></Header>
      <div className="bg-image"></div>
      <div className="search-box">
        <AddressSelect
          exchangeFromTo={() => dispatch(exchangeFromTo())}
          from={from}
          to={to}
          toggleSelector={handleVisible}
        ></AddressSelect>
        <TimeSelect time={time}></TimeSelect>
        <SingleSelect></SingleSelect>
        <Submit title="搜索" onSubmit={handleSubmit}></Submit>
      </div>
      <CityTreeSelect
        cityData={{}}
        cityVisible={cityVisible}
        handleSelect={handleSelect}
        goBack={handleVisible}
        isLoading={isCityLoading}
      ></CityTreeSelect>
    </>
  );
};

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
