// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(){
    destructivelyAppendCat = [...cats];
    cats.push('Ralph');
};

function destructivelyPrependCat (){
    destructivelyPrependCat = [...cats];
    cats.unshift('Bob');
};

function destructivelyRemoveLastCat(){
    destructivelyRemoveLastCat = [...cats];
    cats.pop();
};

function destructivelyRemoveFirstCat(){
    destructivelyRemoveFirstCat = [...cats];
    cats.shift();
};

function appendCat(new_name) {
    console.log(new_name);

   const appendCat_1 = [...cats];
   appendCat_1.push(new_name)
   console.log(appendCat_1);

     return appendCat_1;
    
};

function prependCat(name){

    const prependCat_1 = [...cats];
    prependCat_1.unshift('Arnold')
    console.log(prependCat_1);
    return prependCat_1;
}

function removeLastCat(name) {
 const removeLastCat_1 = [...cats];
 removeLastCat_1.pop()
 return removeLastCat_1;
}

function removeFirstCat(name){
    const removeFirstCat_1 = [...cats];
    removeFirstCat_1.shift();
    return removeFirstCat_1;
}












