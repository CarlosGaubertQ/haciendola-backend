import bcryptjs from "bcryptjs";
import { User } from "../models/User.js";

export const authenticateUsers = async (req, res) =>{
    const {user} = req.params
    const { password } = req.body
    try {
        const userFind = await User.findByPk(user)
        let compare = await bcryptjs.compare(password, userFind.Password)
        if(compare){
            return res.status(200).json({message: 'Authentication success'})
        }else{
            return res.status(500).json({message: 'Error Authentication'})
        }

       
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const getUsers = async (req, res) =>{
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export const createUser = async (req, res ) => {
    const {username, password } = req.body

    try {
        const hashPass = await bcryptjs.hash(password, 8)
    
        const newUser = await User.create({
            'Username':username,
            'Password':hashPass
        })

        console.log(newUser)

        res.send('Create User')
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateUser = async (req, res ) => {
    const {user} = req.params
    const { password } = req.body

    try {
        const userFind = await User.findByPk(user)
        const hashPass = await bcryptjs.hash(password, 8)
        userFind.Password = hashPass
        userFind.save()
        res.send('User update')

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteUser = async (req, res ) => {
    const {user} = req.params
    try {
        await User.destroy({
            where:{
                Username: user
            }
        })
        res.send("User deleted")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}