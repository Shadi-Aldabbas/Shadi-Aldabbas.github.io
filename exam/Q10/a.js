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


console.log(" const findFirstN = (n , arr) => { \n if(n > arr.length){ \n return 'Error: Insufficient items'; \n } \n else{ \n return arr.find(m => n==m); \n }\n} \n const x = findFirstN(5,[4,5,3,6]); \n console.log(x)");