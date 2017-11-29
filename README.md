# react-words

一个简单的React文字效果组件<br/>
CSS3实现

## 示例图 目前拥有以下几种效果
type = 0 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/1.gif)<br/>
type = 1 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/2.gif)<br/>
type = 2 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/3.gif)<br/>
type = 3 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/4.gif)<br/>
type = 4 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/5.gif)<br/>
type = 5 默认 ： ![image](https://github.com/javaLuo/react-vcode/blob/master/example/assets/6.gif)<br/>


## 1. 安装

````
npm install react-words -save
````

## 2. 使用

````
import Words from 'react-words';

 <Words
  show={boolean: true/false}    // 必填 控制显示或隐藏 默认false
  type={number: 0/1/2/3/4/5}    // 选择一种动画效果 默认0
  speed={number}                // 动画的速度 默认300（毫秒）
 >Hello World!</Words>
 
````

## 3. 参数


````bash
show                # boolean 必填 控制显示还是隐藏，true/false，通过改变这个值来触发动画效果
type                # number  选择一种动画效果 0/1/2/3/4/5，默认0
speed               # number  单个文字的动画执行速度 默认300，单位ms

````

