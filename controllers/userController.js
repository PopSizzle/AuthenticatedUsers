const {
  fetchUserByUsername,
  fetchUserById,
  fetchAllUsers,
  insertUserToDb,
  deleteUserById,
} = require('../model/usersOrm');

module.exports = {
  getAllUsersApi: async (req, res) => {
    try {
      const users = await fetchAllUsers();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },

  getUserByIdApi: async (req, res) => {
    const { userId } = req.params;
    try {
      res.json(await fetchUserById(userId));
    } catch (e) {
      console.log('error occurred');
      res.status(400)
        .json(e);
    }
  },

  deleteUserByIdApi: async (req, res) => {
    console.log(`deleting user ${res.user}`);
    const { userId } = req.params;
    // if (parseInt(userId) !== req.user.id){
    //   return res.status(401)
    //     .json({ error: 'You are not allowed to delete another user'});
    // }
    try{
      const deletedUser = await deleteUserById(userId);
      res.json(deletedUser);
    } catch (e) {
      console.log('error occurred', e);
      res.status(400)
        .json(e);
    }
  },
};