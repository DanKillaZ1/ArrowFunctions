const user01 = new object()
user01.id = 1
user01.name = 'John'
user01.age = 25

const user02 = new object()
user02.id = 2
user02.name = 'Mary'
user02.age = 30

const user03 = new object()
user03.id = 3
user03.name = 'Peter'
user03.age = 28

const car01 = new object()
car01["marca"] = "Fiat"

const car02 = new object()
car02["marca"] = "Ford"

console.log(object.values(user01))
console.log(object.values(user02))
console.log(object.values(user03))

console.log(object.entries(user01))
console.log(object.entries(user02))
console.log(object.entries(user03))

user01.age = user01.idade + 1

console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf',{
    enumerable: true,
    writable: false,
    value: '000.000.000-00'
})

console.log(Object.entries(user01))