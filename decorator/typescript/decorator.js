var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Implements a concrete component
var ConcretComponent = /** @class */ (function () {
    function ConcretComponent() {
    }
    ConcretComponent.prototype.operation = function () {
        console.log('concrete component');
    };
    return ConcretComponent;
}());
//Decorator class which inherits from Component.
//The primary purpose is to define a wrapping interface
//for all concrete decorators.
//It have a reference to component
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        this.component.operation();
    };
    return Decorator;
}());
var ConcreteDecoratorComponent1 = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorComponent1, _super);
    function ConcreteDecoratorComponent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorComponent1.prototype.operation = function () {
        console.log('concrete decorator 1');
        _super.prototype.operation.call(this);
    };
    return ConcreteDecoratorComponent1;
}(Decorator));
var ConcreteDecoratorComponent2 = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorComponent2, _super);
    function ConcreteDecoratorComponent2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorComponent2.prototype.operation = function () {
        console.log('concrete decorator 2');
        _super.prototype.operation.call(this);
    };
    return ConcreteDecoratorComponent2;
}(Decorator));
var ConcreteDecoratorComponent3 = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorComponent3, _super);
    function ConcreteDecoratorComponent3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorComponent3.prototype.operation = function () {
        console.log('concrete decorator 3');
        _super.prototype.operation.call(this);
    };
    return ConcreteDecoratorComponent3;
}(Decorator));
var ConcreteDecoratorComponent4 = /** @class */ (function (_super) {
    __extends(ConcreteDecoratorComponent4, _super);
    function ConcreteDecoratorComponent4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteDecoratorComponent4.prototype.operation = function () {
        console.log('concrete decorator 4');
        _super.prototype.operation.call(this);
    };
    return ConcreteDecoratorComponent4;
}(Decorator));
function main() {
    var component = new ConcretComponent();
    var dec1 = new ConcreteDecoratorComponent1(component);
    var dec2 = new ConcreteDecoratorComponent2(dec1);
    var dec3 = new ConcreteDecoratorComponent3(dec2);
    var dec4 = new ConcreteDecoratorComponent4(dec3);
    dec4.operation();
    console.log();
    var dec = new ConcreteDecoratorComponent1(new ConcreteDecoratorComponent2(new ConcreteDecoratorComponent3(new ConcreteDecoratorComponent4(component))));
    dec.operation();
}
main();
