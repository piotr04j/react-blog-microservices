const express = require('express')
const { randomBytes } =  require('crypto')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser)

const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body
    posts[id] = title

    res.status(200).send(posts[id])
})


app.listen(4000, () => {
    console.log('hello from posts!')
})
