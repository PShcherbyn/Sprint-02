let firstNumber= prompt('Enter first number from 1 to 100');
let secondNumber= prompt('Enter second number from 1 to 100');
if(firstNumber < 1 || firstNumber > 100 || secondNumber < 1 || secondNumber > 100 ){
    alert('Wrong number! Only from 1 - 100');
    location.reload(true);
}

let x = 0;
let y = 0;
if(firstNumber > secondNumber){
    x = secondNumber;
    y = firstNumber;
}
else{
    x = firstNumber;
    y = secondNumber;
}

for(let i = x; i <= y; i++){
    let s = i + "";
    let flag = false;
    if(i % 2 === 0){
        s += " is even";
        flag = true;
    }
    if(i % 3===0){
        if(flag) s += ",";
        s += " is a multiple of 3" ; 
        flag = true;
    }
    if (i % 10===0){
        if(flag) s += ",";
        s += " is a multiple of 10";
    }
    if(!flag){
        s += " -";
    }
    console.log(s);
}

