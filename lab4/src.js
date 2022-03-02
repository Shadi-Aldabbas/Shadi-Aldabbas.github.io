const logitBaby = () => {
    const email = document.getElementById("email").value;
    const URL = document.getElementById("URL").value;
    const checkOut = document.getElementById("checkOut").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(URL);
    console.log(checkOut);
    console.log(password);

}
const popitUpBaby = () => {
    const Quantity = document.getElementById("Quantity").value;
    const Name = document.getElementById("Name").value;
    const ProductNumber = document.getElementById("ProductNumber").value;
    const Supplier = document.getElementById("Supplier").value;
    const Price = document.getElementById("Price").value;
    const Date = document.getElementById("Date").value;

    alert( Quantity +'\n' + Name + '\n'+ ProductNumber + '\n'+ Supplier + '\n'+ Price + '\n'+ Date);

}