const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// takes user to the homepage
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
        }
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// takes user to create a new post, can only get to page to post if logged in
router.get('/posts', withAuth, async (req, res) => {
  try {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  // console.log(posts)
  res.render('create-post', { 
    posts, 
    logged_in: req.session.logged_in 
  });
} catch (err) {
  res.status(500).json(err);
}
});


// takes user to specific post with the matching id to edit, can only get here if logged in
router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(post)
    res.render('edit-post', {
      post,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// takes the user to individual post with matching id and corresponding comments with that matching post_id
router.get('/posts/:id/comments', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('comments', {
      post,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  const userData = await User.findAll()

  console.log(userData)
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get("/register", (req, res) => {
  if (req.session.logged_in) {
      res.redirect("/");
      return;
  }
  res.render("register");
});


module.exports = router;