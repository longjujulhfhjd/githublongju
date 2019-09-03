//import {obj} from './module2.js'
//console.log(obj)
//导出用*时，默认导出会被忽略 取别名忽略的就能导出了
export *  as module2 from './module2.js'

let a=1
let aa=function(){
	console.log('aa')
}
//导出一个未定义的
//export let c=1;
//export {
//	//不能再里面定义，不能导入没定义的
//	a,
//	aa
//	//
//}
//默认导出export default 
//export default aa























