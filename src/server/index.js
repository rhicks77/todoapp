const express = require('express')
const path = require ('path')
const app = express()
const port = 3000

app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/hello', (req, res) => {
    console.log ('Hello Server World')
    res.send('Hello Server World!')
    
})

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/public/script.js')
});

app.get('*', (req, res) => {
    // console.log(req)
    res.sendFile(__dirname + '/public/index.html')
}); 



app.listen(port, () => console.log(`Example app listening on port ${port}!`))



const a = {
    hello: 'world'
}

console.log(a)
// {hello:"world"}

console.log(a.hello)
// "world"

const b = {
    asdf: () => "hi",
    func: () => {
        console.log('hi')
        return "hi!"
    }
}

b.func()