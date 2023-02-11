import fs from "fs"

fs.writeFile("employees.json","{'name:' 'Employee 1 Name', 'salary:' 2000}","utf8",err => {
    if(err) console.log(err)
    console.log("Başarılı şekilde oluşturuldu.")
})

fs.readFile("employees.json","utf8",(err,data) => {
    if(err) console.log(err)
    console.log(data)
    console.log("Okuma işlemi başarıyla gerçekleşti")
})

fs.appendFile("employees.json",'{name: "Deneme 1", salary: 1000}',err => {
    if(err) console.log(err)
    console.log("Güncelleme başarıyla gerçekleşti")
})

fs.unlink("employees.json", err =>{
    if(err) console.log(err)
    console.log("Silme işlemi başarıyla gerçekleşti.")
})
