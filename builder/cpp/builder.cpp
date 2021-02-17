#include <iostream>
using namespace std;

class Robot {
    public:
        Robot(): 
            size(0), 
            numArms(0), 
            numWheels(0), numCameras(0),
            numGuns(0),
            canSpeak(false),
            canMove(false),
            canListen(false) {}

        void setSize(int size) { this->size = size; }
        void setNumArms(int numArms) { this->numArms = numArms; }
        void setNumWheels(int numWheels) { this->numWheels = numWheels; }
        void setNumCameras(int numCameras) { this->numCameras = numCameras; }
        void setNumGuns(int numGuns) { this->numGuns = numGuns; }
        void setCanSpeak(bool canSpeak) { this->canSpeak = canSpeak; }
        void setCanMove(bool canMove) { this->canMove = canMove; }
        void setCanListen(bool canListen) { this->canListen = canListen; }
        friend ostream& operator << (ostream& os, Robot *r);

    private:
        int size;
        int numArms;
        int numWheels;
        int numCameras;
        int numGuns;
        bool canSpeak;
        bool canMove;
        bool canListen;
};

class BuilderInterface {
    public:
        virtual void setSize(int size) = 0;
        virtual void setNumArms(int numArms) = 0;
        virtual void setNumWheels(int numWheels) = 0;
        virtual void setNumCameras(int numCameras) = 0;
        virtual void setNumGuns(int numGuns) = 0;
        virtual void setCanSpeak(bool canSpeak) = 0;
        virtual void setCanMove(bool canMove) = 0;
        virtual void setCanListen(bool canListen) = 0;
};

class RobotBuilder: public BuilderInterface {
    public:
        RobotBuilder() {
            this->robot = new Robot;
        }
        ~RobotBuilder() {
            if (this->robot != NULL)
                delete this->robot;
        }
        Robot* getResult() {
            return this->robot;
        }
        void reset() {
            if (this->robot != NULL) {
                delete this->robot;
                this->robot = new Robot;
            }
        }
        void setSize(int size) {
            this->robot->setSize(size);
        }
        void setNumArms(int numArms) {
            this->robot->setNumArms(numArms);
        }
        void setNumWheels(int numWheels) {
            this->robot->setNumWheels(numWheels);
        }
        void setNumCameras(int numCameras) {
            this->robot->setNumCameras(numCameras);
        }
        void setNumGuns(int numGuns) {
            this->robot->setNumGuns(numGuns);
        }
        void setCanSpeak(bool canSpeak) {
            this->robot->setCanSpeak(canSpeak);
        }
        void setCanMove(bool canMove) {
            this->robot->setCanMove(canMove);
        }
        void setCanListen(bool canListen) {
            this->robot->setCanListen(canListen);
        }
    private:
        Robot* robot;
};

class Director {
    public:
        void createWarRobot(RobotBuilder &builder) {
            builder.setSize(50);
            builder.setNumArms(8);
            builder.setNumWheels(16);
            builder.setNumCameras(4);
            builder.setNumGuns(8);
            builder.setCanSpeak(false);
            builder.setCanMove(true);
            builder.setCanListen(false);
        }
        void createKitchenRobot(RobotBuilder &builder) {
            builder.setSize(30);
            builder.setNumArms(4);
            builder.setNumWheels(4);
            builder.setNumCameras(1);
            builder.setNumGuns(0);
            builder.setCanSpeak(true);
            builder.setCanMove(false);
            builder.setCanListen(true);
        }
    private:
};

ostream& operator << (ostream& os, Robot *r) {
    os << "{"
        << "size=" << r->size
        << ",numArms=" << r->numArms
        << ",numWheels=" << r->numWheels
        << ",numCameras=" << r->numCameras
        << ",numGuns=" << r->numGuns
        << ",canSpeak=" << r->canSpeak 
        << ",canMove=" << r->canMove
        << ",canListen=" << r->canListen
        << "}";
    return os;
}

int main(void) {
    RobotBuilder robotBuilder;
    Director director;
    director.createWarRobot(robotBuilder);

    Robot* robot = robotBuilder.getResult();
    cout << "WarRobot=";
    cout << robot << endl;

    robotBuilder.reset();
    director.createKitchenRobot(robotBuilder);
    cout << "KitchenRobot=";
    cout << robot << endl;
    return 0;
}
