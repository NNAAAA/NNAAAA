var r = [], n = 0, a = 0, b = 1, next;
 
function nextFibonacci() {
    next = a + b;
    return b = (a = b, next); // <===
}
 
while(n++ < 10) {
    r.push(nextFibonacci());
}
console.log(r);