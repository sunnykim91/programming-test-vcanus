let result = 0;

Object.prototype.add = function(n) {
    result += n;
    return result;
}

Object.prototype.subtract = function(n) {
    result -= n;
    return result;
}

function main() {
    result = add(4).add(5).subtract(3);
    console.log(result);
}

main();