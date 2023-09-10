const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log('comms/router/post>>> ', req.body);
    const newComm = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComm);
  } catch (err) {
    res.status(400).json(err);
  }
});

/*
    // TODO:  Same as below maybe
    router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commData = await Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });

        if (!commData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
        }

        res.status(200).json(commData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

    // TODO:   I don't think comments are to be updateable
    router.put('/:id', withAuth, async (req, res) => {
    try {
        const newComm = await Comment.findByPk(req.params.id);
        await newComm.update({ ...req.body});
        await newComm.save();

        res.status(200).json(newComm);
    } catch (err) {
        res.status(400).json(err);
    }
    });
*/

module.exports = router;
