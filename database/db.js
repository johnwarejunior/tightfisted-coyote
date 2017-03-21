const {db} = require('./connection.js')

const getAllItems = () => {
  return db.any('SELECT * FROM todo')
}

const addItems = (task) => {
  return db.none('INSERT INTO todo(task) VALUES($1)', task)
}

module.exports = {
  getAllItems,
  addItems
}
