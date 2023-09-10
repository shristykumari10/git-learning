let book = [
    { name: "html", price: 200 },
    { name: "css", price: 400 },
    { name: "javascript", price: 500 },
    { name: "node js", price: 600 },
    { name: "react js", price: 700 },
];

let finalValue = book
    .flatMap((x) => {
        let gstp = x.price * 30 / 100;
        let gst = x.price + gstp;
        return gst > 500 ? [gst] : [];
    })
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

console.log(finalValue);
