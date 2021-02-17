#include <iostream>
using namespace std;

//Products

class Button {
    public:
        virtual ~Button() {};
        virtual void render() = 0;
        virtual void onClick() = 0;
};

class LinuxButton: public Button {
    public:
        void render() {
            cout << "LinuxButton rendered" << endl;
        }
        void onClick() {
            cout << "LinuxButton onClick" << endl;
        }
};

class WindowsButton: public Button {
    public:
        void render() {
            cout << "WindowsButton rendered" << endl;
        }
        void onClick() {
            cout << "WindowsButton onClick" << endl;
        }
};

//Factories

class ButtonFactory {
    public:
        virtual ~ButtonFactory() {};
        virtual Button* createButton() = 0;
};

class LinuxButtonFactory: public ButtonFactory {
    public:
        Button* createButton() {
            return new LinuxButton();
        }
};

class WindowsButtonFactory: public ButtonFactory {
    public:
        Button* createButton() {
            return new WindowsButton();
        }
};

//Client code

class Dialog {
    public:
        Dialog(ButtonFactory &buttonFactory): buttonFactory(&buttonFactory), button(NULL) {};
        ~Dialog() {
            if (this->button != NULL)
                delete this->button;
        }

        string checkOS() {
            return "LINUX";
        }

        void render() {
            this->button = this->buttonFactory->createButton();
            this->button->render();
        }
    private:
        ButtonFactory *buttonFactory;
        Button* button;
};

int main(void) {
    WindowsButtonFactory factory;
    Dialog dialog(factory);
    dialog.render();
    return 0;
}
