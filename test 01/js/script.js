let hero ='';
let similar = prompt('What animal is the superhero most similar to?');
let similar_rx = RegExp(/^[A-Z][a-z]+$/);
if (similar.length >20){
    alert ("Too much symbols");
    similar="";
} 
if (similar_rx.test(similar)===false){
    alert ("Mistake. Animal must be only in letters");
    similar="";
}else {

}

let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
if (gender !== 'male' && gender !== 'female' && gender !== '') {
    alert("Mistake. Sex must be 'male' or 'female' or blank.");
}

let age = prompt('Enter your age please');
let age_rx =RegExp (/^[0-9]+$/);
if (age_rx.test(age)===false){
    alert ("you must enter only numbers 1,2,3....")
    age ="";
}
if(age<18 && gender === 'male'){
    hero = 'boy';
}else if (age < 18 && gender === 'female'){
    hero = "girl";
} else if(age > 18 && gender === 'male'){
    hero = 'man';
}else if (age >18 && gender === 'female'){
    hero = 'woman'
}else if (age >=18 && gender === ''){
    hero = 'hero'
}else if (age <18 && gender === ''){
    hero = 'kid'
}
alert('The superhero name is: ' + similar + '-' + hero + '!');








// const var1 = /^[0-9]+$/i;
// const var2 = '1114'
// console.log(var1.test(var2));