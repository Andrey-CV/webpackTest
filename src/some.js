//privit:
function sum(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

//public (on export):
/* function avg(...numbers) {
    return sum(...numbers) / numbers.length;
} */

class SomeMath {
    avg(...numbers) {
        return sum(...numbers) / numbers.length;
    }

    max(...numbers) {
        let max = Infinity;

        for (let i = 0; i < array.length; i++) {
            if(numbers[i] > max){
                max = numbers[i];
            }
        }

        return max;
    }

    merge(a, b){
        console.log(a);

        return {
            ...a, //деструкторизация obj
            ...b
        }
    }
}

export default new SomeMath();