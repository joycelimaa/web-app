import jwt from 'jsonwebtoken'
import User from '../../model/User.js'

const getUserByToken = async (token) => {

    if(!token){
        return res.status(401).json({message: "Acesso negado!"})
    }

    const decoded = jwt.verify(token, 'usersecret')

    const userId = decoded.id

    const user = await User.findByPk(userId)

    return user
}

export default getUserByToken