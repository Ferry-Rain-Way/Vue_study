// 定义插件

const obj ={
        //此处接收Vue构造函数和自定义参数
        install(Vue,a,b,c){
           console.log(Vue,a,b,c)
        }
}
export default obj;