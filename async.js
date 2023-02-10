//async
//Senaryo; 
//Verileri alacak , verileri temizleyecek
//Veriler alınamazsa catch bloğu çalışacak
//---------------------------------------------
// var getData = (data) => {
//     return new Promise((resolve, reject) => {
//         console.log("Veriler alınmaya çalışılıyor...")
//         if (data) {
//             resolve("Veriler alındı")
//         } else {
//             reject("Veriler alınamadı")
//         }
//     })
// }
// var cleanData = (receivedData) => {
//     return new Promise((resolve, reject) => {
//         console.log("Veriler düzenleniyor..")
//         if (receivedData) {
//             resolve("Veriler düzenlendi.")
//         } else {
//             reject("Veriler düzenlenemedi.")
//         }
//     })
// }
// getData(true)
//     .then(result => {
//         console.log(result);
//         return cleanData(true)
//     }).then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err)
//     })
// ---- async await Structures ----
// async function processData() {
//     try {
//         console.log(await getData(true))
//         console.log(await cleanData(false))
//     } catch (error) {
//         console.log(error)
//     }
// }
// processData();
//---------------------------------------------
// Example-1 Books

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

// addBook({name: "Kitap 10", author: "Yazar 10"})
//     .then(() => {
//         console.log("Yeni liste")
//         listBooks();
//     }).catch(error => {
//         console.log(error)
//     })

async function showBooks() {
    try{
        await addBook({name: "Kitap 12", author: "Yazar 12"})
        listBooks();
    }catch(err){
        console.log(err)
    }
    
}
showBooks();

async function f() {
    return Promise
}
