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


console.log("10- const findFirstN = (n , arr) => { \n if(n > arr.length){ \n return 'Error: Insufficient items'; \n } \n else{ \n return arr.find(m => n==m); \n }\n} \n const x = findFirstN(5,[4,5,3,6]); \n console.log(x)");
console.log("1- true => its an inline element, if you put  and  beside each other they will be at the same line \n 2- false \n 3- false 4- true 5- false");
console.log("6- 18, because of Closures that bind a loop variable have this bug we can fix it by using let instead of var");
console.log("7- 12, no closure here and 4 * 3 = 12");
console.log("8- 18, because f will take C values which are (a,b,c) and then he make b = a which means b was 19 but now it 18");
console.log("شوف كيف بدخن");
