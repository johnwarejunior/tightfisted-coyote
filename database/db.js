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

const updateItems = (id, task) => {
  const psql = `UPDATE todo SET task=$2 WHERE id=$1 RETURNING *`
  return db.oneOrNone(psql, [id, task])
}

const setRank = (id, rank) => {
const psql= `UPDATE todo SET rank=$2 WHERE id=$1`
return db.one(psql, [id, rank])
}

module.exports = {
  getAllItems,
  addItems,
  completeItems,
  deleteItems,
  updateItems,
  setRank
}
