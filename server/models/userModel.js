const db = require("../db");

const createUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, password], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = { createUser };
