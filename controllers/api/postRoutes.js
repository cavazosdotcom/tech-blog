// necessary requires
const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Get route for insomnia seed testing
router.get('/', async (req, res) => {
  // res.json({ success: true, hit: "Get Category" });
  try {
    // get all Post and JOIN Comment
    const postData = await Post.findAll({
        include: [{ model: Comment }]
    });

    res.status(200).json( postData );

  } catch (err) {
    res.status(500).json(err);
  }
});


// Post route, creates a post based on the users req.body
// with logged in authorization, asynchrously connect to the 'posts/' route and try an await to create a new Post from the Post model

router.post('/', withAuth, async (req, res) => {
  try {
    // post new Post
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // if the await is successful, then return json form of newPost
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Post route, creates a comment based on the users req.body, matches the corect post_id and user_id  
router.post('/:id/comments', withAuth, async (req, res) => {
  try {
    const newPost = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});


// Put route, edits the post bosed on the post's id
router.put('/:id', withAuth, async (req, res) => {
  try {
    // 
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// delete route, 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
