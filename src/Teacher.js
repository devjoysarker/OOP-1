import { Stundent } from "./Student.js";

export  const data = [
    {
        name  : 'Joy Sarker',
        age   : 27
    },
    {
        name  : 'Momon shaib',
        age   : 27
    },
    {
        name  : 'Plash Das',
        age   : 27
    }
]

export default class Teacher extends Stundent  {

    constructor(name){
        super(name);
        this.name = name;
    }

    agecal(name,year){
        let data = new Date();
        let age  = data.getFullYear() - year;

        return ` Hi ${ name }, you are ${ age } years old`;
    }

    goal(){
        return this.game();
    }
}