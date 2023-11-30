function addShipping(price: number, shipping: number){
    console.log(price + shipping);
} 
addShipping(10, 5);

function returnShipping(price: number, shipping: number) : number | boolean{
    return price + shipping;
}
returnShipping(10, 34);