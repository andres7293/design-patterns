class Robot {
    private name: string;
    private size: number;
    private numArms: number;
    private numWheels: number;
    private numGuns: number;
    private numCameras: number;
    private canSpeak: boolean;
    private canMove: boolean;
    private canListen: boolean;

    constructor() {
        this.name = "";
        this.size = 0;
        this.numArms = 0;
        this.numWheels = 0;
        this.numGuns = 0;
        this.numCameras = 0;
        this.canSpeak = false;
        this.canMove = false;
        this.canListen = false;
    }
    setName(name: string): void {
        this.name = name;
    }
    setSize(size: number): void {
        this.size = size;
    }
    setNumArms(numArms: number): void {
        this.numArms = numArms;
    }
    setNumWheels(numWheels: number): void {
        this.numWheels = numWheels;
    }
    setNumGuns(numGuns: number): void {
        this.numGuns = numGuns;
    }
    setNumCameras(numCameras: number): void {
        this.numCameras = numCameras;
    }
    setCanSpeak(canSpeak: boolean): void {
        this.canSpeak = canSpeak;
    }
    setCanMove(canMove: boolean): void {
        this.canMove = canMove;
    }
    setCanListen(canListen: boolean): void {
        this.canListen = canListen;
    }
}

interface IBuilder {
    reset(): void;
    getResult(): Robot;
    setName(name: string): void;
    setSize(size: number): void;
    setNumArms(numArms: number): void;
    setNumWheels(numWheels: number): void;
    setNumCameras(numCameras: number): void;
    setNumGuns(numGuns: number): void;
    setCanSpeak(canSpeak: boolean): void;
    setCanListen(canListen: boolean): void;
    setCanMove(canMove: boolean): void;
}

class RobotBuilder implements IBuilder {
    private robot: Robot;
    constructor() { 
        this.robot = new Robot();
    }
    public getResult(): Robot {
        return this.robot;
    }
    public reset(): void {
        this.robot = new Robot();
    }
    public setName(name: string): void {
        this.robot.setName(name);
    }
    public setSize(size: number): void {
        this.robot.setSize(size);
    }
    public setNumArms(numArms: number): void {
        this.robot.setNumArms(numArms);
    }
    public setNumWheels(numWheels: number): void {
        this.robot.setNumWheels(numWheels);
    }
    public setNumCameras(numCameras: number): void {
        this.robot.setNumCameras(numCameras);
    }
    public setNumGuns(numGuns: number): void {
        this.robot.setNumGuns(numGuns);
    }
    public setCanSpeak(canSpeak: boolean): void {
        this.robot.setCanSpeak(canSpeak);
    }
    public setCanListen(canListen: boolean): void {
        this.robot.setCanListen(canListen);
    }
    public setCanMove(canMove: boolean): void {
        this.robot.setCanMove(canMove);
    }
}

class Director {
    public createWarRobot(builder: IBuilder): void {
        builder.reset();
        builder.setName("WarRobot");
        builder.setSize(50);
        builder.setNumArms(8);
        builder.setNumWheels(16);
        builder.setNumCameras(4);
        builder.setNumGuns(8);
        builder.setCanSpeak(false);
        builder.setCanMove(true);
        builder.setCanListen(false);
    }

    public createKitchenRobot(builder: IBuilder): void {
        builder.reset();
        builder.setName("KitchenRobot");
        builder.setSize(30);
        builder.setNumArms(4);
        builder.setNumWheels(4);
        builder.setNumCameras(1);
        builder.setNumGuns(0);
        builder.setCanSpeak(true);
        builder.setCanMove(false);
        builder.setCanListen(true);
    }
}

const robotBuilder = new RobotBuilder();
const director = new Director();

director.createWarRobot(robotBuilder);
console.log(robotBuilder.getResult());

director.createKitchenRobot(robotBuilder);
console.log(robotBuilder.getResult());
