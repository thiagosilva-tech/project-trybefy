const { readFileSync } = require('fs');
const path = require('path');
const connection = require('./connection');

const runQuery = async (fileName) => {
  const challengeQuery = readFileSync(
    path.resolve(__dirname, fileName),
    'utf8',
  );
    
  return await connection.query(challengeQuery);
};

module.exports = {
  runQuery,
};