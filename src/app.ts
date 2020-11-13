const anchor = document.querySelector("a")!;
// console.log(anchor.href); // error - anchor could bu null
// anchor && console.log(anchor.href); // runtime checking
console.log(anchor.href); // use ! to tell compiler anchor !== null for sure

// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const typeInput = document.querySelector("#type") as HTMLSelectElement;
const toFromInput = document.querySelector("#tofrom") as HTMLInputElement;
const detailsInput = document.querySelector("#details") as HTMLInputElement;
const amountInput = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event) => {
   event.preventDefault();
   console.log(typeInput.value, toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
});

/** Class */
// class Invoice {
//    readonly client: string;
//    private details: string;
//    public amount: number;

//    constructor(client: string, details: string, amount: number) {
//       this.client = client;
//       this.details = details;
//       this.amount = amount;
//    }

//    format() {
//       return `${this.client} owes ${this.amount} for ${this.details}`;
//    }
// }

class Invoice {
   constructor(readonly client: string, private details: string, public amount: number) {}

   format() {
      return `${this.client} owes ${this.amount} for ${this.details}`;
   }
}

const invoiceOne = new Invoice("Roni", "Empanada", 90);
const invoiceTwo = new Invoice("Gal", "Empanada", 150);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
