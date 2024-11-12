import User from "../model/User.js";
import bcrypt from 'bcrypt';
import createUserToken from "../utils/jwt/create-user-token.js";
import getToken from "../utils/jwt/get-token.js";
import getUserByToken from "../utils/jwt/get-user-by-token.js";

class UserController {

    async register(req, res) {
  
      const { name, email, password } = req.body
  
      if (!name) { return sendError(res, "The name is mandatory!") }
      if (!password) { return sendError(res, "The password is mandatory!") }
      if (!email) { return sendError(res, "The email is mandatory!") }
  
      const user = await User.findByEmail(email);
      if (user) {
        return res.status(401).json({ error: 'Email already used!' });
      }
  
      try {
        const passwordHash = await hashPassword(password) 
        const newUser = await User.create({ name, email, password: passwordHash });
  
        res.status(201).json(newUser)
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  
    async login(req, res) {
  
      const { email, password } = req.body
  
      if (!email) { return sendError(res, "The email is mandatory!") }
      if (!password) { return sendError(res, "The password is mandatory!") }
  
      const user = await User.findByEmail(email);
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials!'});
      }
  
      const checkPassword = await comparePassword(password, user.password)
  
      if (!checkPassword) {
        return res.status(401).json({ error: 'Invalid credentials!' });
      }
  
      await createUserToken(user, req, res)
    }
  
    async findAll(req, res) {
      User.findAll().then((result) => res.json(result));
    }
  
    async findUser(req, res) {
      try {
        getToken(req);
  
        const user = await User.findByPk(req.params.id);
        if (!user) {
          return sendError(res, "User not registered!");
        }
  
        res.status(200).json({ user });
      } catch (error) {
        console.error('Error searching for user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  


    async updateUser(req, res) {
  
      const token = getToken(req)
      const user = await getUserByToken(token)
  
      const { name, password, email } = req.body
  
      const passwordHash = await hashPassword(password)
  
      await User.update(
        {
          name: name,
          password: passwordHash,
          email: email
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
  
      User.findByPk(req.params.id).then((result) => res.json(result));
    }
  
    async deleteUser(req, res) {
  
      const token = getToken(req)
      const user = await getUserByToken(token)
  
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      User.findAll().then((result) => res.json(result));
    }
  };
  
  async function sendError(res, message) {
    res.status(422).json({ message })
  }
  
  async function hashPassword(password) {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
  }
  
  async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword)
  }
  
  export default new UserController();