1. 设置了四个按钮，只有最后一个按钮能正常加值，其他按钮会失效
- 原因：因为onClick设置了相同的函数名，点击时导致所有按钮都调用了同一个函数
- 解决方法：设置不同的函数名即可

2. 如何保存值，即使切换路由时，也能保证获取之前的数据
- 解决方法：①使用redux公共管理数据；②使用localStorage将数据存储到本地

3. localStorage存储的数据发生改变后，页面如何实时渲染
- 解决方法：①调用forceUpdate()函数；②重新封装localStorage；③shouldComponentUpdate(nextProps, nextState)

4. 如何在localStorage上动态存储多个对象，以日期为key，多个键值对为值？
- 解决方法：创建一个对象，存储一个对象，每次预约就在数组上加一位（把对象往后面存） -> 在全局建立一个一维数组，直接将对象赋值给数组

5. 如何生成一个多位数的随机数？
- 解决方法：
|方法|描述|
|:--:|:--:|
|ceil(x)|对数进行上舍入，即向上取整。|
|floor(x)|对 x 进行下舍入，即向下取整|
|round(x)|四舍五入|
|random()|返回 0 ~ 1 之间的随机数，包含 0 不包含 1|
    - Math.ceil(Math.random()*10);     // 获取从 1 到 10 的随机整数，取 0 的概率极小。
    - Math.floor(Math.random()*10);    // 可均衡获取 0 到 9 的随机整数。
    - Math.round(Math.random());       // 可均衡获取 0 到 1 的随机整数。
    - Math.round(Math.random()*10);    // 基本均衡获取 0 到 10 的随机整数，其中获取最小值 0 和最大值 10 的几率少一半。
> 可参考：[JS - 生成随机数的方法汇总（不同范围、类型的随机数）](https://cloud.tencent.com/developer/article/1629795)
> 可参考：[菜鸟教程：js生成随机数](https://www.runoob.com/w3cnote/js-random.html)

6. antd 的日期选择器如何获取当前时间
> [解决方法](https://segmentfault.com/q/1010000011037059)
> [解决方法](https://cloud.tencent.com/developer/article/1582967)

7. 如何获取组件“日期选择器”的日期，并将其与疫苗的存值绑在一起，同时还要能在其他路由组件获取？
- 解决方法；<DatePicker>组件自带一个API：onChange，它接收两个参数，

8. 未捕获的错误：引发了跨源错误。React 无权访问开发中的实际错误对象
- 解决方法：①打开开发工具；②转到应用程序部分；③右键单击​​它清除本地存储。

9. 对象作为 React 子对象无效。如果您打算渲染一组子项，请改用数组?
> [解决方法](https://blog.csdn.net/kevinx610/article/details/97648059)
意思是 这个错误就是说本身react接受的子dom都是数组格式，但是传给dom的子元素不是数组。我这里是因为获取localStorage值的时候，值是一个字符串，应该转成object。

10. re-rendering不符合预期?
- 解决方法：
> [React生命周期shouldComponentUpdate介绍及性能优化](https://blog.csdn.net/weixin_43720095/article/details/104903588)  
> 在这里受到启发[React又见路由之重定向路由](https://blog.csdn.net/qq_34475058/article/details/90035987)  发现localStorage的存储值可以通过state获取   
> [Immutable.js](https://www.cnblogs.com/Darlietoothpaste/p/10156357.html)

> [深入探究Immutable.js的实现机制（一）](https://juejin.cn/post/6844903679644958728#heading-3)

12. state实现同步更新？
> [React详解setState异步和同步更新](https://blog.csdn.net/weixin_45389051/article/details/106987761)

13.react报错 TypeError: Cannot read property 'setState' of undefined?
> [解决方法](https://blog.csdn.net/huanghanqian/article/details/80548100)