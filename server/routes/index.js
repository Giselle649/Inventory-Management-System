const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication');
const memberController = require('../controllers/MemberController');
const authorization = require('../middlewares/authorization');
const permissionController = require('../controllers/PermissionController');

//PUBLIC
router.get("/login", memberController.login)
router.get("/", memberController.login)

//GLOBAL MIDDLEWARE
router.use(authentication); 

//MEMBERS
router.get("/members", authorization.read, memberController.getAllMember)
router.get("/members/:id", authorization.read, memberController.getMemberById)
router.get("/members/:id/permissions", authorization.read, memberController.getMemberPermission)
router.post("/members/register", authorization.create, memberController.register)
router.delete("/members/:id", authorization.delete, memberController.deleteMemberById)
router.put("/members/:id", authorization.update, memberController.updateMemberById)

//PERMISSIONS
router.get("/permissions", authorization.read, permissionController.getAllPermission)
router.get("/permissions/:id", authorization.read, permissionController.getPermissionById)
router.post("/permissions", authorization.create, permissionController.addPermission)
router.delete("/permissions/:id", authorization.delete, permissionController.deletePermissionById)
router.put("/permissions/:id", authorization.update, permissionController.updatePermissionById)



module.exports = router;