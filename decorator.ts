function MenyItem(itemId: string){
    return(targer: Function) => {
        targer.prototype.id = itemId;
    }
}

@MenyItem('abc')
class Pizza {
    id: string;

    constructor(private idPizza: string){
        this.id = idPizza;
    }
}
@MenyItem('cba')
class Hamburger {
    id: string;

    constructor(private idHamburger: string){
        this.id = idHamburger;
    }
}

console.log(new Pizza("1").id)