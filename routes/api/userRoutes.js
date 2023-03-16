const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
 
    
} = require('../../controllers/users');


router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getOneUser);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend);
router.route('/:id/friends/:friendId').delete(removeFriend)


module.exports = router;