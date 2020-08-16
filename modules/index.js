const welcome = function(req,res) {
  res.send({ name: 'test project', aim: 'learn express'})
}

module.exports = {
  welcome
}
