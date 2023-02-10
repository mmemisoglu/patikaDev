//Promise structure
//----------------------------------
// const promise1 = new Promise((resolve,reject) => {

//     resolve("Veriler alındı.");
//     reject("Bağlantı hatası.");
// });

// promise1
//     .then(value => {
//         console.log(value);
//     }).catch(error => {
//         console.log(error);
//     })
//----------------------------------
//Asekron kullanım (Promise)
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
const addBook = newBook => {
    const promise1 = new Promise((resolve,reject) => {
        books.push(newBook)
        resolve(books)
        reject("Bir hata oldu. ")
    })
    return promise1
}
addBook({name: "Kitap 10", author: "Yazar 10"})
    .then(() => {
        console.log("Yeni liste")
        listBooks();
    }).catch(error => {
        console.log(error)
    })
//--------------------------------------