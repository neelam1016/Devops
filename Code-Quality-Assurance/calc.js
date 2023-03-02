let a = 5;
let b=6;
const func=()=>{
    console.log("Hello")
 }
const calc=()=>{
    add=(a,b)=>{
        return (a+b)
    },
    sub=(a,b)=>{
        return (a-b)
    }
}
console.log(calc.add(a,b))
console.log(calc.sub(a,b))