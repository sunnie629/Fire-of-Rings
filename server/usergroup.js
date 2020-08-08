const users = [];

const addUser = ({ id, name, roomCode }) => {
  const user = { id, name, roomCode };
  users.push(user);
  return { user };
};

const removeUser = ({ name }) => {
  const index = users.findIndex((user) => user.name === name);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUsers = ({ roomCode }) => {
  const usersarr = users.filter((user) => user.roomCode === roomCode);
  return { usersarr };
};

module.exports = { addUser, removeUser, getUsers };
