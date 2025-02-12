const express = require('express')
const router = express.Router()
const companyRouter = require('./companies');

router.use(authentication);

router.use("/companies", companyRouter) //global middleware
router.post("/login", Controller);

module.exports = router;