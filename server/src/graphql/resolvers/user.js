
const { UserInputError } = require('apollo-server')
const db = require('../../../db.json')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const createUser = (args) => {
  // add random id for user
  args.id = String(uuid())

  // if args username is found, throw error
  if(db.user.find(x => x.username === args.username)){
    throw new UserInputError('Username already exists', { invalidArgs: args })
  }

  // add args data into db.users arr
  db.user.push(args)

  // write to file with fs so the user gets saved to the mock database
  fs.writeFile('db.json', JSON.stringify(db), function(err){
    if(err) console.log(err)
  })

  // return added user
  return db.user.find(x => x.username === args.username)

}

const login = (args) => {
  // find user based on args
  const user = db.user.find(x => x.username === args.username)
  // throw error if user is not found or password is wrong
  if(!user || args.password !== user.password){
    throw new UserInputError('Wrong credentials')
  }

  // make obj for token
  const useForToken = {
    username: user.username,
    id: user.id
  }

  // sign jwt token
  return { value: jwt.sign(useForToken, secret) }
}

module.exports = {
  createUser,
  login
}