let name = "beert"
let chars = [ ];
for(let i = name.length; i >= 0; i--){
    chars.push(name[i])
}

chars.forEach (c => {
    console.log(c)
})

let bw = chars.map( c => {
    return c+c;
})
console.log(bw)

let q = [1,5,12,22]

let initialValue = 0;

let sum = q.reduce ((n,m) =>
    n+m, initialValue
);
console.log(sum);


let filtered = q.filter(n =>{
        return n !== 5
})

console.log(filtered)