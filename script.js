let --- variabiabila resriptiva
var --- versiune mai veche"let"
const --- variabila constanta

let name = "Name"; //String
let age = 3123424; //Number
let bool = true; //boolen
let nul = null; //without value
let apple ; //undefined
let obj = {
    name: "name",
    age: 2342
} //obj

let n = Nan; // nan value
let nameF = (p1, p2) =>{
    console.clear();
    console.debug();
};

+ - * / % ** //math operation

// = atribuim
// == verificam/comparam valorile la fel 
// === verificam si tipul de date 


let value = 12.0




if(value == 12){
    console.log("True");
}else{
    console.log("Wrong");
}



for(i = 0;i<= 10; i++){
    // 0 => 1 => 2 => ... => 10
}
for(element => element.age); //for each
let count = 0;
while (count < 10){
    console.log();
    count = count + 1;
    //count +=1
}

function nameFunc(p1, p2, p3){
    //code
}

class className{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    classFunc(){
        console.log(this.p1 + this.p2);
    }
};