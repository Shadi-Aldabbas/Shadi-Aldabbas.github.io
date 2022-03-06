// Using JavaScript, implement code for a function named, findFirstN(...), which takes as parameter, a number, n, and an array, a, and will find and return the first n items in the array.
const findFirstN = (n , arr) => {
    if(n > arr.length){
        return "Error: Insufficient items";
    }
    else{
        return arr.find(m => n==m);
    }
}
const x = findFirstN(5,[4,5,3,6]);
console.log(x)


