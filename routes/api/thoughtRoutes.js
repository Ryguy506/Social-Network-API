const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,

} = require('../../controllers/thoughts');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getOneThought);
router.route('/:id').put(updateThought);
router.route('/:id').delete(deleteThought);


module.exports = router;