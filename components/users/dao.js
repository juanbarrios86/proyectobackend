import User from './model.js';

class usersDao {
  async create(newUserData) {
    try {
      const newUser = new User(newUserData);
      newUser.cart = [];
      await newUser.save();
      return newUser;
    } catch (error) {
      console.log(`Error creando usuario en la base de datos . ${error}`);
    }
  }
  async getUser(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.log(`Error al buscar el usuario en la base de datos . ${error}`);
    }
  }
}
export default new usersDao();
