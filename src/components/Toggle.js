import React from 'react'

// this指向 之 绑定this
export class Toggle1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    // 绑定词法作用域this
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// this指向 之 属性初始化器
export default class Toggle2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
  }
  handleClick = () => {
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// this指向 之 回调函数中使用箭头函数
// 每次loggingButton渲染的时候都会创建一个不同的回调函数。造成严重的性能问题
export class Toggle3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
  }
  handleClick() {
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}