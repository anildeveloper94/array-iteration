// // // 23/08/24
// // // task:
// // // -----
// // // Map
// // // 1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]


// let arr=[1,2,3,4,5]
// x=arr.map(function(a){
//     return `${a*2}`
// })
// console.log(x)

// let arr1=[1,2,3,4,5]
// let x1=arr1.map((a)=>{
// return `${a*2}`
// })
// console.log(x1)

let p=[4,6,8,10]
let k=p.map(function(b){
return`${b/3}`
})
console.log(Math.floor(k))
// // let s=[1,3,5,7]
// // let x2=s.map((m,n)=>
// //      `${m},${n}`
// // )
// // console.log(x2)


// // // x=arr.map ((a,b)=>{x.return(`${x*2}`)                 

// // // })


// // // 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]
// // let x5=["hello", "world"];
// // let y5=x5.map((a)=>{
// //     return a.toUpperCase()
// // })
// // console.log(y5)
// // arr=[2,3,4,5]


// // Filter
// // 1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]
// // 2. Get 'strings longer than 5 characters: ["hello", "world", "abc"] → ["hello", "world"]
// // ForEach
// // 1. Log each number in an array: [1, 2, 3, 4, 5] → console logs each number
// // let array=[1, 2, 3, 4, 5]
// // let x=array.foreach((a)=>{
// //   return a
// // })
// // console.log(x)
// // 2. Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"]

// // Every
// // 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true
// let x2=[1,2,3,4,5]
// let x4=x2.every((a)=>{
//     return (a>3)
// })
// console.log(x4)
// // 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false
// let array1=["hello", "world", "abc"]


// // Some
// // 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true
//     let z=[1, 2, 3, 4, 5]
//     let y=z.some((z)=>{
//         return z>3
//     })
//     console.log(y)
// // 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true
//     let c=["hello", "world", "max"]
//     let k=c.some((c)=>{
//         return c
//     })
// Find
// // 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2
// let arr7=[1, 2, 3, 4, 5]
// let y6=arr7.find((a)=>{
// return a>=2
// })
// console.log(y6)
// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"
// let arr3= ["hello", "world", "max"]    
// arr2=[1,2,3,4,5]
// let z8=arr2.find((a)=>{
// return a="x"
// })
// console.log(z8)
// FindIndex
// 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1

// 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2
// let arr6=["hello", "world", "max"]
// let k=arr6.findIndex(function(f){
// return f=="max"
// })
// console.log(k)