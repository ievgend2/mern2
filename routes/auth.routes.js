const { Router } = require('express')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const router = Router()


// api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'This email already in use' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ emiail, password: hashedPassword })

        await user.save()
        res.status(201).json({ message: "User created sucessfully" })


    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
})

// api/auth/login
router.post('/login', async (req, res) => {

})




module.exports = router