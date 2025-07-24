import React, {Component} from 'react';
import ReactDom from 'react-dom'

// class Demo extends Component {
//
//   state = {count: 0, show: true}
//
//   myRef = React.createRef()
//
//   add = () => {
//     this.setState(state =>({count: state.count + 1}))
//   }
//
//   unmount = () => {
//     this.setState({show: false})
//   }
//
//   show = () => {
//     alert(this.myRef.current.value)
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState( state => ({count: state.count+1}))
//     }, 1000)
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.show && (
//           <>
//             <input type="text" ref={this.myRef}/>
//             <h2>当前求和为：{this.state.count}</h2>
//             <button onClick={this.add}>点我➕1</button>
//             <button onClick={this.unmount}>卸载</button>
//             <button onClick={this.show}>点击提示数据</button>
//           </>
//         )}
//       </div>
//     );
//   }
// }

function Demo() {

  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(true)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount( count => count+1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function add() {
    // setCount(count+1) // 第一种写法
    setCount(count => count + 1) // 第二种写法
  }

  function unmount() {
    setShow(false)
  }

  function showTip() {
    alert(myRef.current.value)
  }

  return (
    <div>
      {show && (
        <>
          <input type="text" ref={myRef}/>
          <h2>当前求和为：{count}</h2>
          <button onClick={add}>点我➕1</button>
          <button onClick={unmount}>卸载</button>
          <button onClick={showTip}>点击提示数据</button>
        </>
      )}
    </div>
  )
}

export default Demo;