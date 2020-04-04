import express from "express"
import studenti from "./studenti"

const app = express()
const port= 3001
console.log("Hello world u konzoli")

   

// 203
 app.get('/', (req, res) =>{
   
    let studenti = [  {oib: "12312349172", ime: "Hrvoje", prezime: "Horvat"},  
                    {oib: "82723412342", ime: "Ivana", prezime: "Ivić"},  
                    {oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović"}, ]
                    let rezultat= studenti.map(({ oib,ime,prezime}) =>  [ime,prezime,`(${oib})`]
                    .join(' '))
                    
res.send(` ${rezultat}`)

    console.log(rezultat) // ["Hrvoje Horvat (12312349172)", "Ivana Ivić (82723412342)", "Stjepan Stjepanović (97283742342)"]
})


// 204
app.get('/brojslova', (req, res) =>{
   
    let studenti = [  {oib: "12312349172", ime: "Hrvoje", prezime: "Horvat"},  
                    {oib: "82723412342", ime: "Ivana", prezime: "Ivić"},  
                    {oib: "97283742342", ime: "Stjepan", prezime: "Stjepanović"}, ]

                    let suma = studenti.reduce( (s, e) =>{
                    return s + e.ime.length  }, 0)
                       
                       res.send(`Zbroj slova svih studenata je: ${suma}`)
                   
  
}) 

// 205 


//201
/* app.get('/', (req, res) =>{

let a = parseInt(req.query.a)
    let b= parseInt(req.query.b)
    let zbroj = a + b
  
    res.send(`Suma je: ${zbroj}`)
  
    

}),
app.get('/oduzimanje', (req, res) =>{
    let a = parseInt(req.query.a)
    let b= parseInt(req.query.b)
    let razlika = a - b
    
    res.send(`Razlika  je: ${razlika}`)
}),
app.get('/mnozenje', (req, res) =>{
    let a = parseInt(req.query.a)
    let b= parseInt(req.query.b)
    let umnozak = a * b
    
    res.send(`Umnozak  je: ${umnozak}`)
}),
app.get('/dijeljenje', (req, res) =>{
    let a = parseInt(req.query.a)
    let b= parseInt(req.query.b)
    let djeljenje = a / b
    
    res.send(`Rezultat djeljenja je: ${djeljenje}`)
}),


// 202
 */
app.get('/fib', (req, res) =>{
    function fib(a){
    let arr = [0, 1];
    for (let i = 2; i < a + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[a]
  }
      
    console.log(fib(parseInt(req.query.a)))
    res.json(fib(parseInt(req.query.a)))
})












/* app.get('/studenti', (req, res) =>{
    console.log("Svi studenti : ");
    res.json(studenti)
  console.log(studenti)

}),
app.get('/studenti/first', (req, res) =>{
    
    console.log("Prvi student : ");
     let prvi = studenti[0];
     
    res.json(prvi)
     console.log(prvi);


}),
app.get('/studenti/last', (req, res) =>{
    console.log("Zadnji student : ");
    let zadnji = studenti[studenti.length - 1];
    
    res.json(zadnji)
    console.log(zadnji);
  

}) */

app.listen(port, () => console.log(`Slusam na portu ${port}!`))