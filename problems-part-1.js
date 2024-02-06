/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
*/
const number = [12,23,43,65,77,88,46,76,55];
function avarageOfOdd(array){
    let odd = [];
    for(let number of array){
        if(number % 2 !== 0){
            odd.push(number)
        }
    }
    sum = 0;
    for(let element of odd){
        sum += element;
    }
    return sum;
}
const oddAvarae = avarageOfOdd(number);
console.log(oddAvarae);

console.log('====================');


// remove duplicate items from array 
const myArray = ['shahin', 'shifat', 'rifat', 'shahin', 'rifat', 'shahin'];
function removeDuplicate(array){
    let singleItem = [];
    for(let item of array){
        if(singleItem.includes(item) === false){
            singleItem.push(item);
        }
    }
    return singleItem;
}
console.log(removeDuplicate(myArray));