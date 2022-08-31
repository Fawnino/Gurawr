module.exports = (client) => { 
const express = require("express")
const fs = require('fs')
const os = require('os')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  const ram = os.totalmem() / 1000
  const cores = os.cpus.length
  const cpu = os.cpus()[0].model
  const users = client.users.cache.size
  const guilds = client.guilds.cache.size
  
  let file = fs.readFileSync("./home.html", { encoding: "utf8" })
  file = file.replace("$$ram$$", ram)
  file = file.replace("$$cores$$", cores)
  file = file.replace("$$cpu$$", cpu)
  file = file.replace("$$users$$", users)
  file = file.replace("$$guilds$$", guilds)
    res.sendFile('../html/home.html', { root: __dirname })
  res.send(file)
})


app.listen(port, () => {
    console.log(`App is running on Port: ${port}`)
 })
  app.enable('Trust Proxy')
  app.set("etag", false)
  app.use(express.static(__dirname + "./website"))

  app.use((req, res, next) => {
    console.log(`- ${req.method}: ${req.url} ${res.statusCode} ( by ${req.ip} }`)
    next()
  })
}