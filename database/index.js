const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Secret00',
  database: 'todo',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the mySQL database');
});

const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM tasks`;
    connection.query(query, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const addTask = (data) => {
  const { taskName, dueDate } = data;
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO tasks (task_name, due_date, is_done) VALUES (${taskName}, ${dueDate}, ${finished})`;
    connection.query(query, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const changeChecked = (data) => {
  const { bool, id } = data;
  return new Promise((resolve, reject) => {
    const query = `UPDATE tasks SET is_done = !is_done WHERE id = ${id}`;
    connection.query(query, (err, result, fields) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = { getAllTasks, addTask };