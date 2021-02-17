#include <iostream>
using namespace std;

//USE ABSTRACT FACTORY WHEN YOU NEED TO WORK WITH FAMILIES OF RELATED PRODUCTS 

//Products

class Button {
    public:
        virtual ~Button() {};
        virtual void render() = 0;
};

class CheckBox {
    public:
        virtual ~CheckBox() {};
        virtual void render() = 0;
};

class LinuxButton: public Button {
    public:
        void render() {
            cout << "LinuxButton" << endl;
        }
};

class WindowsButton: public Button {
    public:
        void render() {
            cout << "WindowsButton" << endl;
        }
};

class LinuxCheckbox: public CheckBox {
    public:
        void render() {
            cout << "LinuxCheckbox" << endl;
        }
};

class WindowsCheckbox: public CheckBox {
    public:
        void render() {
            cout << "WindowsCheckbox" << endl;
        }
};

//Factories

class AbstractFactory {
    public:
        virtual ~AbstractFactory() {};
        virtual Button* createButton() = 0;
        virtual CheckBox* createCheckbox() = 0;
};

class WindowsFactory: public AbstractFactory {
    public:
        Button* createButton() {
            return new WindowsButton();
        }
        CheckBox* createCheckbox() {
            return new WindowsCheckbox();
        }
};

class LinuxFactory: public AbstractFactory {
    public:
        Button* createButton() {
            return new LinuxButton();
        }
        CheckBox* createCheckbox() {
            return new LinuxCheckbox();
        }
};

//Client code

class GUI {
    public:
        GUI(AbstractFactory *factory): factory(factory), button(NULL), checkBox(NULL) {};

        ~GUI() {
            if (this->button)
                delete this->button;
            if (this->checkBox)
                delete this->checkBox;
        }
        
        void render() {
            this->button = this->factory->createButton();
            this->checkBox = this->factory->createCheckbox();

            this->button->render();
            this->checkBox->render();
        }
    private:
        AbstractFactory *factory;
        Button* button;
        CheckBox* checkBox;
};

int main(void) {
    //linux version
    LinuxFactory linuxFactory;
    GUI guiLinux(&linuxFactory);
    guiLinux.render();

    cout << endl;

    //windows version
    WindowsFactory windowsFactory;
    GUI guiWindows(&windowsFactory);
    guiWindows.render();
    return 0;
}
