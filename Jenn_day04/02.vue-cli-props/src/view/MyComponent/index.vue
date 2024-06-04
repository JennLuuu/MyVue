<!--
 * @Author: Jenn_Lu 1129694837@qq.com
 * @Date: 2024-05-31 20:07:19
 * @LastEditors: Jenn_Lu 1129694837@qq.com
 * @LastEditTime: 2024-06-01 11:58:01
 * @FilePath: \07.vue-cli\src\view\MyComponent\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <p>MyComponent组件</p>
    <p>使用父组件传递过来的数据{{ num }}</p>
    <p>{{ person }}</p>
  </div>
</template>

<script>
/* 
props：
  父子组件传递数据（通信）
    父组件以标签属性的形式给子组件传递数据
    传递数据时，要传递动态数据，绑定v-bind：
    :person="person"

  子组件声明接收父组件传递的通信数据
    声明接收的方式有三种：
    * 方式1：数组形式
      - props:['num']
    * 方式2：对象形式
      - props:{
            num: Number，
        }
      - 对象的key是接收的数据
      - value是接收数据的类型
    * 方式3：对象全写形式（常用方式3，限制用户使用规范，更好维护操作）
      - props:{
          num:{
            type: Number,
            required: true,
            //default: 0
          },
        }
      - type：限制数据的类型
      - required：限制数据是否是必传项
      - default：数据的默认值
        - type是基本数据类型，default写对应的空值即可(0,"")
        - type是引用数据类型，default要写成回调函数,可以写箭头函数，返回值是对应的空值（{}、[])
props特点：只读不改
想要修改props数据（子->父）
 1. 先在数据源（父组件）定义更新数据的方法   
 2. 再把方法传递给要使用的子组件（通过标签属性的方式）
 3. 子组件声明接收方法（props）
 4. 子组件通过this调用方法（其实调用的就是数据源的方法） 
*/
export default {
  name: "MyComponent",
  /* // 方式1：数组形式接收
  props:['num'] */

  /* //方式2：对象形式
  props:{
    num: Number,
  } */

  //方式3：对象全写形式
  props: {
    num: {
      type: Number,
      required: true,
      //default: 0,
    },
    person: {
      type: Object,
      required: true,
      //default:()=>({})
    }
  },
};
</script>
