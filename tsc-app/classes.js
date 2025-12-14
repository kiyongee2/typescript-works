var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        return "멍멍~";
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        return "야옹~";
    };
    return Cat;
}());
// let dog = new Dog();
// dog.bark();
//union type 활용
function cry(animal) {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    else {
        return animal.meow();
    }
}
var dog = new Dog();
var cat = new Cat();
console.log(cry(dog));
console.log(cry(cat));
//접근 제한자
var Person = /** @class */ (function () {
    //생성자
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, ".concat(this.name));
    };
    return Person;
}());
var person = new Person("우영우");
//person.name;  //접근 불가
person.greet();
//사람을 상속받은 학생
var Car = /** @class */ (function () {
    function Car(model, year) {
        this.model = model;
        this.year = year;
    }
    Car.prototype.showInfo = function () {
        console.log("\uBAA8\uB378: ".concat(this.model, ", \uC5F0\uC2DD: ").concat(this.year));
    };
    return Car;
}());
//차를 상속받은 전기차
var EV = /** @class */ (function (_super) {
    __extends(EV, _super);
    function EV(model, year, battery) {
        var _this = _super.call(this, model, year) || this;
        _this.battery = battery;
        return _this;
    }
    EV.prototype.charge = function (amount) {
        this.battery += amount;
        if (this.battery > 100)
            this.battery = 100;
        console.log("\uBC30\uD130\uB9AC \uC794\uB7C9: ".concat(this.battery, "%"));
    };
    return EV;
}(Car));
var ev = new EV("IONIC6", 2024, 70);
ev.showInfo();
ev.charge(50);
