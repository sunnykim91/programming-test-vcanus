function Factorial(num){
    let temp = 1;
    for(let i = 1; i <= num; i++) {
        temp = i*temp;
    }
    return temp;
}

function main() {
    let result = Factorial(4);
    console.log(result);
}

main();