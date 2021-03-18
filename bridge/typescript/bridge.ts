//The purpose of this pattern is to split large classes into two separates of hierarchies: abstraction and implementation which can be independent of each other
//For example, in this example, ILog is an abstraction of logging methods, and the client uses this abstraction.
//The implementations are the differente logging mechanisms: Console, Network or SerialPort. The client is constructed using one of 
//the implementations.
interface ILog {
    log(text: string): void;
}

class ConsoleLog implements ILog {
    constructor() {}
    log(text: string): void {
        console.log('[ConsoleLog] ' + text);
    }
}

class NetworkLog implements ILog {
    constructor() {}
    log(text: string): void {
        console.log('[NetworkLog] ' + text);
    }
}

class SerialPortLog implements ILog {
    constructor() {}
    log(text: string): void {
        console.log('[SerialPortLog] ' + text);
    }
}

class App {
    private log: ILog;
    constructor(log: ILog) {
        this.log = log;
    }
    run(): void {
        this.log.log('My app is running...');
    }
}


const netLog: ILog = new NetworkLog();
const consoleLog: ILog = new ConsoleLog();
const serialPortLog: ILog = new SerialPortLog();

const app1: App = new App(netLog);
app1.run();

const app2: App = new App(consoleLog);
app2.run();

const app3: App = new App(serialPortLog);
app3.run();