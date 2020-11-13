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
