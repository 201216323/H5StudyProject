/**
 * Created by Administrator on 2016/11/13.
 */
//var person={
//    name:"Bruce Chang",
//    age :30,
//    eat :function(){
//        alert("能吃！")
//    }
//}
//alert(person.name);
function Person(){
}
Person.prototype={
    name:"Bruce Lee",
    age:30,
    eat:function(){
        alert("我在吃");
    }
}
var p = new Person();
alert(p.age);