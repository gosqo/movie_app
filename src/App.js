import React from 'react';


// 클래스형 컴넌트가 되려면 App 클래스가
// 리액트가 제공하는 Component 클래스를 상속해야함.
class App extends React.Component{

  // static 같은 존재 
  state = {
    count: 0,
  };

  // add 에 익명 함수 할당.
  add = () => {
    // current 인자를 받아 객체{ count : current.count + 1 }를 반환하는 함수.
    this.setState(current => ({ count : current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count : current.count - 1 }));
  }

  // thread, Java main 메서드 처럼 요청 시 자동 실행.
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }



}

export default App;
