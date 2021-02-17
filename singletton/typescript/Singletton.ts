class Singletton {
    private static instance: Singletton;
    private constructor() { }
    public static getInstance(): Singletton {
        if (Singletton.instance == undefined) {
            Singletton.instance = new Singletton();
        }
        return Singletton.instance;
    }
}

const o1 = Singletton.getInstance();
const o2 = Singletton.getInstance();

if (o1 === o2) {
    console.log('o1 === o2');
}
else {
    console.log('o1 !== o2');
}
