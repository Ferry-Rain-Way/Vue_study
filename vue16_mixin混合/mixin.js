// 组件中通用的代码放在这里 (混合)

const mixin01 ={
    data() {
        return {
            //验证属性名相同 →
            name :"王五",
            //不同的属性名 ,补充进去
            sex:"男"
        }
    },
    //若存在相同生命周期钩子,都会被调用,且此处的会被优先调用
    mounted(){
        console.log("mixin中的mounted调用")
    }
}

 const mixin02 ={
    data() {
        return {
            //验证属性名相同 → 使用组件中的属性值
            name :"小雪",
            //不同的属性名 ,补充进去
            sex:"女"
        }
    },

}

//可以这样写
export {mixin01,mixin02};
//或者
//export const = mixin01{}  export const = mixin01{}  

//但是这样写好像是错误的
// export default mixin01;