export let message="Es6 Module";

export function user(name){
    console.log(`Hello ${name}`);
}

export class test{
    constructor(){
        console.log("I am Using Module  Constructor Calling");
    }
}


//export {message,user,test};