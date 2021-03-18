//Abstract view of the object we want to decorate
interface Component {
    operation(): void;
}

//Implements a concrete component and its functionality
class ConcretComponent implements Component {
    constructor() {}
    operation(): void {
        console.log('concrete component');
    }
}

//Decorator class which inherits from Component.
//The primary purpose is to define a wrapping interface
//for all concrete decorators.
//It have a reference to component
class Decorator implements Component {
    private component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    //Base decorator simply delegates all work to wrapped component
    operation(): void {
        this.component.operation();
    }
}

//Concrete decorator must call wrapped object methods buy also add
//its own functionality
class ConcreteDecoratorComponent1 extends Decorator {
    operation(): void {
        console.log('concrete decorator 1');
        super.operation();
    }
}

class ConcreteDecoratorComponent2 extends Decorator {
    operation(): void {
        console.log('concrete decorator 2');
        super.operation();
    }
}

class ConcreteDecoratorComponent3 extends Decorator {
    operation(): void {
        console.log('concrete decorator 3');
        super.operation();
    }
}

class ConcreteDecoratorComponent4 extends Decorator {
    operation(): void {
        console.log('concrete decorator 4');
        super.operation();
    }
}

function main() {
    const component: Component = new ConcretComponent();
    const dec1: Decorator = new ConcreteDecoratorComponent1(component);
    const dec2: Decorator = new ConcreteDecoratorComponent2(dec1);
    const dec3: Decorator = new ConcreteDecoratorComponent3(dec2);
    const dec4: Decorator = new ConcreteDecoratorComponent4(dec3);

    dec4.operation();

    console.log();

    const dec: Decorator = new ConcreteDecoratorComponent1(new ConcreteDecoratorComponent2(new ConcreteDecoratorComponent3(new ConcreteDecoratorComponent4(component))));
    dec.operation();
}

main();
