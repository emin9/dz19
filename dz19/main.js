let a = [
    'lorem',123,true,'ipsum'
]
console.log(a.length)
console.log(a[0],a[a.length - 1])

a.unshift('aa','bb')

console.log(a)

a.pop()
a.pop()
a.shift()
console.log(a);

let number = [
    1,3,5,7,9
]
number.splice(2,2,4,4)

console.log(number)