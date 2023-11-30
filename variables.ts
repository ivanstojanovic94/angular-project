//string, number, boolean, null, undefined
let myName:string | null | number = 1;
myName = 'Ivan';

let items: string[] | number[] = [];

const account: {
    name: string,
    balance: number,
    status: string 
} = {
    name: "Ivan",
    balance: 10,
    status: "Active"
};

interface IAccount{
    name: string,
    balance: number,
    status?: string,
    deposit?: () => void 
};

const account1: IAccount = {
    name: "Ivan",
    balance: 10,
};

let accounts: IAccount [];

class InvestmentAccount implements IAccount {
    constructor(
        public name: string, public balance: number
        ){

        }
        private withdraw(){
            
        }
}