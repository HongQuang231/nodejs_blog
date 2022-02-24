const express = require('express') // req thư viện express
const app = express()  // gọi express
const port = 3000 // địa chỉ cổng run app

// route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app lắng nghe cổng 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})