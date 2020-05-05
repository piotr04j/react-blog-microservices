const express = require('express')
const { randomBytes } =  require('crypto')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const commentsByPostId = {}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentsByPostId[req.params.id] || []
    comments.push({ id, content })
    commentsByPostId[req.params.id] = comments
    res.status(200).send(comments)
})


app.listen(4001, () => {
    console.log('hello from posts!')
})