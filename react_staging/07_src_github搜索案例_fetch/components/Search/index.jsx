import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {



  search = async () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const {keyWordElement: {value:keyWord}} = this
    // 发送请求前通知List更新状态
    // this.props.updateAppState({isFirst: false, isLoading: true})
    PubSub.publish('atguigu', {isFirst: false, isLoading: true})
    // 发送网络请求---使用axios发送
    /*axios.get(`/api1/search/users?q=${keyWord}`).then(
      res =>{
        // 请求成功后通知App更新状态
        // this.props.updateAppState({isLoading: false, users: res.data.items})
        PubSub.publish('atguigu', {isLoading: false, users: res.data.items})
      },
      err => {
        // 请求失败后通知App更新状态
        // this.props.updateAppState({isLoading: false, err: err.message})
        PubSub.publish('atguigu', {isLoading: false, err: err.message})
      }
    )*/

    // 发送网络请求---使用fetch发送（未优化）
    // fetch('/api1/search/users2?q=${keyWord}').then(
    //   response => {
    //     console.log('联系服务器成功了');
    //     return response.json()
    //   },
    //   error => {
    //     console.log('失败了', error);
    //     return new Promise(() =>{})
    //   }
    // ).then(
    //   response => {console.log('获取数据成功了', response)},
    //   error => {console.log('获取数据失败了', error)}
    // )

    // 发送网络请求---使用fetch发送（优化）
    try {
      const response = await fetch('/api1/search/users2?q=${keyWord}')
      const data = await response.json()
      PubSub.publish('atguigu', {isLoading: false, users: data.items})
      console.log(data)
    } catch (err) {
      console.log('请求出错', err)
      PubSub.publish('atguigu', {isLoading: false, err: err})
    }
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">搜索 Github 用户</h3>
          <div>
            <input ref={c => this.keyWordElement=c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
            <button onClick={this.search}>搜索</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;