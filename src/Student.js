 
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



export  class Stundent{

    constructor(name){
        this.name = name;
        this.food = "Bereyani";
        this.age  = 50;
        this.skill = "MERN Stack";

        this.game = () => {
            return" i play football";
        }
    }

   info(name,job){
        return ` My name is ${ name } & i am  ${ job }`
    }
    auto( name, pass) {
        return ` your name is ${ name } & your password is ${ pass } `+ this.info("alo", "freelanching") ;
    }
   areal(){
       return` what is arecal function`
   }
    area(length,width){
        let area = length * width;
        // return " area : " + area ;
        return ` the name is company : ${this.name} and the type is ${ this.type } and the are = ${ area } and i like to eat ${ this.food } and i am ${ this.age } years olds and I am ${ this.skill }  ${ this.game() }`;
    }
}

export  function ageCal(name,year){
    let age = 2022 - year;
    return `Hi ${ name } your are ${ age } years Olds `;
}