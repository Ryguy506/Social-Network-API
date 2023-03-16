const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getOneThought);
router.route('/:id').put(updateThought);
router.route('/:id').delete(deleteThought);
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;