// Products

abstract class Button {
    abstract render(): void;
}

class LinuxButton extends Button {
    public render(): void {
        console.log('LinuxButton');
    }
};

class WindowsButton extends Button {
    public render(): void {
        console.log('WindowsButton');
    }
};

//Factories

interface IButtonFactory {
    createButton(): Button;
};

class LinuxButtonFactory implements IButtonFactory {
    public createButton(): Button {
        return new LinuxButton();
    }
};

class WindowsButtonFactory implements IButtonFactory {
    public createButton(): Button {
        return new WindowsButton();
    }
};

// Client code

class Dialog {
    private factory: IButtonFactory;

    constructor(factory: IButtonFactory) {
        this.factory = factory;
    }

    public render(): void {
        const button = this.factory.createButton();
        button.render();
    }
};

const factory = new WindowsButtonFactory();
const dialog = new Dialog(factory);
dialog.render();
