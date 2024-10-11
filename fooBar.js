
function fooBar(){
    const result = [];
    for (let i = 100; i >= 1; i--){
        let isPrime = true;
        if (i < 2){
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(i); j++){
                if (i % j == 0){
                    isPrime = false;
                    break;
                }
            }
        }

        if (!isPrime){
            if (i % 3 == 0 && i % 5 == 0){
                result.push('FooBar');
            } else if (i % 3 == 0){
                result.push('Foo');
            } else if (i % 5 == 0){
                result.push('Bar');
            } else {
                result.push(i);
            }
        }
    }

    return result;
}

let result = fooBar();
let output = result.join(', ');
console.log(output);