const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getOneUser,
    updateUser,
 
    
} = require('../../controllers/users');


router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getOneUser);
router.route('/:id').put(updateUser);



module.exports = router;