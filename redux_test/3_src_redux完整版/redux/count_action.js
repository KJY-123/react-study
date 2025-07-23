/*
* 该文件专门为Count组件生成action对象
* */
import {INCREMENT, DECREMENT} from './constant'

export const createIncrementAction = (data) => ({type: INCREMENT, data}) // 不写return的箭头函数返回对象，外层需包裹'()'
export const createDecrementAction = (data) => ({type: DECREMENT, data})