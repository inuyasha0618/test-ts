// import * as _ from 'lodash';
// const str: string = _.padStart("Hello world", 20, "**");
// console.log(str);

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`My name is ${this.name}, I'm ${this.age} years old`);
    }
}


export default Person;