const {
  findAllUsers,
  findUserByIdQuery,
  findUserByUsername,
  insertUserQuery,
  deleteUserByIdQuery,
} = require('./sqlQueries');

const conncection = require('../config/connection');

// Gets record of a single user by username
const fetchUserByUsername = async (username) => {
  try {
    const [rows] = await connection.query(findUserByUsername, username);
    return rows[0];
  } catch (e) {
    throw new Error(e);  
  }
};

// Gets one user by Id
const fetchUserById = async (userId) => {
  try{
    const [rows] = await connection.query(findUserByIdQuery, userId);
    return rows[0];  
  } catch (e) {
    throw new Error(e);
  }
}

// Gets all users
const fetchAllUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

// Insert User
const insertUserToDb = async (username, password) => {
  try {
    const [result] = await connection.query(insertUserQuery, [username, password]);
    const [userResult] = await connection.query(findUserByIdQuery, result.insertId);
    return userResult[0];
  } catch (e) {
    throw new Error(e);
  }
};

// Delete User by Id
const deleteUserById = async (userId) => {
  try {
    const [rows] = await connection.query(findUserByIdQuery, userId);
    await connection.query(deleteUserByIdQuery, userId);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  fetchUserByUsername,
  fetchUserById,
  fetchAllUsers,
  insertUserToDb,
  deleteUserById
};