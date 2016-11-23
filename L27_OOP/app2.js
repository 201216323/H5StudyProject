(function(){
    var n = "ime";
    function Person(name){
        var _this = {}
        _this._name = name;
        _this.sayHello = function(){
            alert("Hello"+_this._name);
        }
        return _this;
    }
    window.Person = Person;
}());
function Teacher(name){
    //对象的赋值操作
    var _this = Person(name);
    var surperSay = _this.sayHello;

    _this.sayHello = function(){
        surperSay.call(this);
        alert("Teacher hello"+_this._name);
    }
    return _this;
}
var t = new Teacher("bruce lee");
t.sayHello();