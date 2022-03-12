const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    // res.json({ success: true, hit: "Get Category" });
  try {
    const postData = await Post.findAll({
        include: [{ model: Comment }]
    });

    res.status(200).json( postData );

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
