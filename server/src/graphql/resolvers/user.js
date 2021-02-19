const db = require('../../../db.json')
const { v4: uuid } = require('uuid')
const fs = require('fs')

const createUser = (args) => {
  args.id = String(uuid())

  if(db.user.find(x => x.username === args.username)){
    return new Error('Username already exists')
  }
  db.user.push(args)
  fs.writeFile('db.json', JSON.stringify(db), function(err){
    if(err) return Error('Username already exists')
  })
  return db.user.find(x => x.username === args.username)

}

module.exports = {
  createUser
}