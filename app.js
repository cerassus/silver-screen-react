const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const path = require('path');

const root = __dirname + '/public'
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))
  
app.listen(3000, (err) => {
    const date = new Date().toGMTString();
    if (err) throw err
    console.log(`> Ready on port: 3000 on ${date}`)
})

