/**
 * 1、请说出下列最终的执行结果，并解释为什么？
 */
var a = [];
for (var i =0 ; i < 10; i++){
    a[i] = function (){
        console.log(i); //10
    };
}
a[6](); 
/**
 * 打印结果：10
 * 原因：因为var 内层声明的i覆盖了外层声明的i，i为10。
 */


 /**
  * 2、请说出下列最终的执行结果，并解释为什么？
  */
var tmp = 123;
if(true){
    console.log(tmp); //tmp is not defind
    let tmp;
}
/**
 * 打印结果：tmp is not defind
 * 原因：因为let为块级作用域，在块级作用域内定义的成员外部是无法访问的。
 */


 /**
  * 3、结合ES6新语法，用最简单的方式找出数组中的最小值？
  */
 var arr = [12, 34, 32, 89, 4]
 var minNum = Math.min(...arr);
 console.log(minNum); // 4
/**
 * 打印最小值结果：4
 * 原因：利用Math.min()方法求最小值，但是该方法的参数是一个数值列表，
 * 而不是一个数组，故使用ES6新增的扩展运算符将数组转换成列表，
 * 然后传递到Math.min()方法。
 */

 /**
  * 4、请详细说明var,let,const 三种声明变量的方式之间的具体差别？
  */
/**
 * var, var的作用域是全局的，不管在哪都可以使用的。
 * let, let的作用域是块级的，声明的变量只在作用域范围内有效，出了作用域就找不到，只要出了作用域就会报错了
 * const, const的作用域是块级的，声明常量（必须赋值）是不可以更改的，更改就会报错。
 * 比较差异：
 *   1、作用域上面 var是全局的 let和const则是块级作用域的。
 *   2、在同一作用域下var可以声明同名变量，而let和const则不能。
 *   3、var声明的变量还可以先声明在赋值，如果声明后没有赋值就打印则会打印出undefined, 而let 变量和const变量，声明后未进行赋值打印则会直接报错。
 */

 /**
  * 5、请说出下列代码最终输出的结果，并解释为什么？
  */
 var a = 10;
 var obj = {
     a: 20,
     fn(){
         setTimeout(() => {
             console.log(this.a) //20
         })
     }
 }
 obj.fn();
 /**
  * 打印最小值结果：20
  * 箭头函数没有this的机制，不会改变this的指向，在箭头函数的外面一层，this是什么，我们在里面拿到的this就是什么
  * 箭头函数当中，this始终指向当前作用域里面的this
  */

/**
 * 6、简述symbol类型的用途？
 */
/**
 * 用途：
 *   1、最主要的作用就是为对象添加独一无二的属性名，就是用作对象的 key
 *   2、阻止对象属性名冲突
 *   3、模拟私有属性
 */

 /**
 * 7、说说什么是浅拷贝，什么是深拷贝？
 */
/**
 * 基本数据类型，拷贝是直接拷贝变量的值，而引用类型拷贝的其实是变量的地址
 * 而浅拷贝和深拷贝就是在这个基础之上做的区分。
 * 浅拷贝：如果在拷贝这个对象的时候，只对基本数据类型进行了拷贝，而对引用数据类型只是进行了引用的传递，而没有重新创建一个新的对象，则认为是浅拷贝。
 * 深拷贝：如果在对引用数据类型进行拷贝的时候，创建了一个新的对象，并且复制其内的成员变量，则认为是深拷贝。
 */

 /**
 * 8、谈谈你是如何理解JS异步编程的，EventLoop是做什么的，什么是宏任务，什么是微任务？
 */
 /**
 * 1、JS异步编程：因为JavaScript是单线程语言的，在某个特定的时刻只有特定的代码能够被执行，并阻塞其它的代码，也就是说，同一个时间只能做一件事。
 *    异步编程解决了上面的问题，异步编程从早期的 callback、事件发布\订阅模式到 ES6 的 Promise、Generator 在到 ES2017 中 async。
 * 2、EventLoop是做什么的？
 *    主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。
 *    javascript上， 所有同步任务都在主线程上执行，也可以理解为存在一个“执行栈”。
 *    主线程之外，还有一个任务队列。每当一个异步任务有结果了，就往任务队列里塞一个事件。 
 *    当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。
 * 3、什么是宏任务？
 *    参与了事件循环的任务。包括整体代码script，setTimeout，setInterval、I/O、UI render。
 * 4、什么是微任务？
 *    直接在 Javascript 引擎中的执行的，没有参与事件循环的任务。Promise、Object.observe、MutationObserver。
 */


/**
 * 9、将下面异步代码使用Promise改进？
 */
setTimeout(function (){
    var a = "hello ";
    setTimeout(function (){
        var b = "lagou ";
        setTimeout(function (){
            var c = "I Love U";
            console.log(a + b +c)
        },10)
    },10) 
},10)

//改进后
new Promise((resolve, reject) => {
    setTimeout(function () {
      var a = 'hello ';
      resolve(a);
    }, 10);
  })
    .then((a) => {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          var b = 'lagou ';
          resolve(a + b);
        }, 10);
      });
    })
    .then((ab) => {
      setTimeout(function () {
        var c = 'I Love U';
        console.log(ab + c);
      }, 10);
    });

/**
 * 10、请简述Typescript与JavaScript之间的关系？
 */
/**
 * 简述：TypeScript是Javascript的超集，TypeScript是由微软开发的自由和开源的编程语言，可以编译出纯净、 简洁的JavaScript代码，并且可以运行在任何浏览器上。
 *       TypeScript的优势：它有更多的规则和类型限制，代码具有更高的预测性、可控性，易于维护和调试。
 *       TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程，是一种给 JavaScript 添加特性的语言扩展。
 *       
 */


/**
 * 10、请谈谈你所认为的Typescript优缺点？
 */
/**
 * Typescript优点：
 *      1、TypeScript 的亮点在于良好的 IDE 支持：类型检测、语法提示、重构。
 *      2、 支持ES6。
 * 
 * Typescript缺点：
 *      1、TypeScript 不保证任何运行时类型检查
 *      2、any 类型就是字面意思，编译器允许任何操作或赋值。
 *         any的扩散会毁掉你类型系统的健全性。
 *      3、TypeScript 并非健全的类型系统
 */