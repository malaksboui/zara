const express = require ("express")
const router =express.Router()
import {getUser, userLogin ,signupUser }  from '../controller/user';

router.get("/getall", getUser);
router.post("/login",userLogin);
router.post("/signup",signupUser)


export default router 