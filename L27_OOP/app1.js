(function () {
    var n = "ime";
    //创建一个函数当作类来使用
    function People(name) {
        this._name = name;
    }
    People.prototype.say = function () {
        alert("People Hello" + this._name);
    }
    window.People = People;
}());//加个小括号代表可以执行
(function () {
    function Student(name) {
        this._name = name;
    }
//证明Student 是People 的子类。
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("student say" + this._name);
    }
    window.Student = Student;
}());
var s = new Student("Bruce lee");
s.say();
