
        // immediately invoke function---------------


// let printMe = function(value) {
//     console.log(`your value is ${value}`);
// };

// printMe((function(n) {
//     return n * n;
// })(10));


    //reduce-----------------------------

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15





let book = [{name:"html", price: 200},
    {name:"css", price: 400},
    {name:"javascript", price: 500},
    {name:"node js", price: 600},
    {name:"react js", price: 700},]

//    let filterBooks= book.filter((b)=>{
//         return b.price<=500;
//     })

//     var addGST = book.price.map((b)=>{
//         b.price+=price*10/100;
//         return b;
//     })

//     console.log(addGST)

//     let finalvalue = filterBooks.reduce((accumulator, currentValue)=>{
//         return accumulator+currentValue.price
//     },0)

    // let addGST = finalvalue+(finalvalue*30/100);
    // console.log(addGST)


    let addGST = book.map((x)=>{
        let gstp = x.price*30/100
        let gst = x.price+gstp;

        return gst;
        
    })

    console.log(addGST);

    let filterBook = addGST.filter((x)=>{
        return x>500;
    })

    console.log(filterBook)

    let finalvalue = filterBook.reduce((accumulator, currentValue)=>{
                 return accumulator+currentValue
             },0)

             console.log(finalvalue)

            
        






