import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"

import Base from "./src/javascripts/components/Base"

const app = express()

app.use(express.static("build"))
app.use(express.static("public"))

app.get("/", (req,res) => {
  res.send(ReactDOMServer.renderToString(<Base/>))
})

app.listen(3000,()=>{
  console.log("listen http://localhost:3000")
})