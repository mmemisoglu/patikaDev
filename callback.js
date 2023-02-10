//Callback 
//--------------------------------------
// const func1 = () => {
//     console.log("Func 1 tamamlandı")
// }
// const func2 = () => {
//     console.log("Func 2 tamamlandı")
// }
// func2()
// func1()
//--------------------------------------
//--------------------------------------
// const func1 = () => {
//     console.log("Func 1 tamamlandı")
//     func2()
// }
// const func2 = () => {
//     console.log("Func 2 tamamlandı")
//     func3()
// }
// const func3 = () => {
//     console.log("Func 3 tamamlandı")
// }
// func1()
//--------------------------------------
//Js kendisi single thread
//Js Senkron çalışır.
//--------------------------------------
// let x = 5;
// console.log(x)
// setTimeout(() => {
//     x = x + 5;
// },2000);
// console.log(x)
// x = x + 5;
// console.log(x)
//--------------------------------------
//Asekron kullanım (CallBack)
const books = [
    {name: "Kitap 1", author: "Yazar 1"},
    {name: "Kitap 2", author: "Yazar 2"},
    {name: "Kitap 3", author: "Yazar 3"}
]
const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    })
}
const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}
addBook({name: "Kitap 4", author: "Yazar 4"}, listBooks)
//--------------------------------------
