import React from 'react'

function ListItem(props){
  return <li>{props.value}</li>
}
export default class NumberList extends React.Component{
  render() {
    const listItems = this.props.numbers.map((number, index) =>
      <ListItem key={index} value={number}></ListItem>
    );
    return (
      <ul>
        {this.props.numbers.map((number,index) =>
          <ListItem key={index} value={number} />
        )}
      </ul>
    )
  }
}