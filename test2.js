function Factorial(num){
    if(num === 1){
        return num;
    } else {
        return num * Factorial(num - 1);
    }
}

function main() {
    let result = Factorial(4);
    console.log(result);
}

main();