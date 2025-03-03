// variables & types
let myVariable: number = 42; // number
let myVariable2: string = "Hello"; // string
let myVariable3: boolean = true; // bool
let myVariable4: Date = new Date(); // Date
let myVariable5: number[] = [1, 2, 3, 4]; // array
let myVariable6: Array<string> = ["Riri", "Fifi", "Loulou"]; // array
let myVariable7: number | null = null; // valeur nulle

// typer un objet
// let myVariable8: /*{ lname: string; fname: string }*/ IPerson = {
//   lname: "Ly",
//   fname: "Khun",
// }; //object
// let myVariable9: /*{ lname: string; fname: string }*/ PersonClass = {
//   lname: "Ly",
//   fname: "Khun",
// }; //object
let myVariable10: /*{ lname: string; fname: string }*/ PersonT = {
  lname: "Ly",
  fname: "Khun",
}; //object

interface IPerson {
  lname: string;
  fname: string;
  test: () => void;
}

class PersonClass {
  lname: string;
  fname: string;
  test() {
    console.log(42);
  }
}

type PersonT = {
  lname: string;
  fname: string;
};

type Color = "Blue" | "Red" | "Green";

let myVariable11: Color = "Blue";

let myVariable12: string | number = "42";
myVariable12 = 42;
let myVariable13: IPerson & { id: number } = {
  id: 42,
  lname: "Ly",
  fname: "Khun",
  test: () => console.log(42),
};

let myVariable14: PersonClass = new PersonClass();

// typer une fonction
let myVariable15: (i: number) => boolean = (i: number) => {
  return i % 2 == 0;
};

type testFn = () => boolean;
let myVariable16: testFn = () => true;

interface OnInit {
  init(): void;
}

class Test implements OnInit {
  init(): void {
    console.log(42);
  }
}

class Test2 extends Test {
  title: string;
  foo: number;
}

let myVariable17 = new Test2();
myVariable17.init();
