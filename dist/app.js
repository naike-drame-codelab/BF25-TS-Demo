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
// variables & types
var myVariable = 42; // number
var myVariable2 = "Hello"; // string
var myVariable3 = true; // bool
var myVariable4 = new Date(); // Date
var myVariable5 = [1, 2, 3, 4]; // array
var myVariable6 = ["Riri", "Fifi", "Loulou"]; // array
var myVariable7 = null; // valeur nulle
// typer un objet
// let myVariable8: /*{ lname: string; fname: string }*/ IPerson = {
//   lname: "Ly",
//   fname: "Khun",
// }; //object
// let myVariable9: /*{ lname: string; fname: string }*/ PersonClass = {
//   lname: "Ly",
//   fname: "Khun",
// }; //object
var myVariable10 = {
    lname: "Ly",
    fname: "Khun",
}; //object
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    PersonClass.prototype.test = function () {
        console.log(42);
    };
    return PersonClass;
}());
var myVariable11 = "Blue";
var myVariable12 = "42";
myVariable12 = 42;
var myVariable13 = {
    id: 42,
    lname: "Ly",
    fname: "Khun",
    test: function () { return console.log(42); },
};
var myVariable14 = new PersonClass();
// typer une fonction
var myVariable15 = function (i) {
    return i % 2 == 0;
};
var myVariable16 = function () { return true; };
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.init = function () {
        console.log(42);
    };
    return Test;
}());
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Test2;
}(Test));
var myVariable17 = new Test2();
myVariable17.init();
