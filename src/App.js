import React from 'react';
import Comment from '@/components/comment.js';
import Clock from '@/components/clock.js';
import Toggle from '@/components/toggle.js';
import NumberList from '@/components/numberList.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: 1,
      comment: {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
      }
    }
  }
  render(){
    return(
      <div>
        {this.state.id===0 &&
          <Comment
            date={this.state.comment.date}
            text={this.state.comment.text}
            author={this.state.comment.author}>
          </Comment>
        }
        {this.state.id===1 &&
          <Clock />
        }
        {this.state.id===2 &&
          <Toggle />
        }
        <NumberList numbers={[1,2,3,4,5]}></NumberList>
      </div>
    );
  }
}