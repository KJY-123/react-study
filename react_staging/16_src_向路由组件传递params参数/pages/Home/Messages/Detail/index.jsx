import React, {Component} from 'react';

const DetailData = [
  {id: '01', content: '你好，中国'},
  {id: '02', content: '你好，世界'},
  {id: '03', content: '你好，未来的自己'}
]
class Detail extends Component {
  render() {
    const {id, title} = this.props.match.params
    const findResult = DetailData.find(item =>{
      return item.id === id
    })
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findResult.content}</li>
      </ul>
    );
  }
}

export default Detail;