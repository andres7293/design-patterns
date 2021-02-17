//USE ABSTRACT FACTORY WHEN YOU NEED TO WORK WITH FAMILIES OF RELATED PRODUCTS 

// Products

abstract class Button {
    public abstract render(): void;
}

abstract class CheckBox {
    public abstract render(): void;
}

class LinuxButton implements Button {
    public render(): void {
        console.log('LinuxButton');
    }
}

class WindowsButton implements Button {
    public render(): void {
        console.log('WindowsButton');
    }
}

class LinuxCheckbox implements CheckBox {
    public render(): void {
        console.log('LinuxCheckbox');
    }
}

class WindowsCheckBox implements CheckBox {
    public render(): void {
        console.log('WindowsCheckBox');
    }
}

// Factories

abstract class AbstractFactory {
    abstract createButton(): Button;
    abstract createCheckBox(): CheckBox;
}

class LinuxFactory implements AbstractFactory {
    public createButton(): Button {
        return new LinuxButton();
    }
    public createCheckBox(): CheckBox {
        return new LinuxCheckbox();
    }
};

class WindowsFactory implements AbstractFactory {
    public createButton(): Button {
        return new WindowsButton();
    }
    public createCheckBox(): CheckBox {
        return new WindowsCheckBox();
    }
};

//Client code

class GUI {
    private factory: AbstractFactory;
    constructor(factory: AbstractFactory) {
        this.factory = factory;
    }

    public render() {
        const button = this.factory.createButton();
        const checkBox = this.factory.createCheckBox();
        button.render();
        checkBox.render();
    }
}

const lfactory = new LinuxFactory();
const lgui = new GUI(lfactory);
lgui.render();

const wfactory = new WindowsFactory();
const wgui = new GUI(wfactory);
wgui.render();
