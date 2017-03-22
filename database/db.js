const { db } = require('./connection.js')

const getAllItems = () => {
  return db.any('SELECT * FROM todo')
}

const addItems = (task) => {
  const psql = `INSERT INTO todo(task) VALUES($1)`
  return db.none(psql, [task])
}

const completeItems = (id) => {
  const psql = `UPDATE todo SET completed  = NOT completed WHERE id=$1`
  return db.none(psql, [id])
}

const deleteItems = (id) => {
  const psql = `DELETE FROM todo WHERE id=$1`
  return db.none(psql, [id])
}

module.exports = {
  getAllItems,
  addItems,
  completeItems
}
