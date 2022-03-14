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

// router.post('/new', withAuth, (req, res) => {
//   res.render('create-post')
// });
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
