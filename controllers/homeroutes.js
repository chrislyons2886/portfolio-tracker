const router = require('express').Router();
const { Project, User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

 
    res.render('homepage', { title: 'Welcome | Home'})
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  console.log(req.session.user_id)
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
   
    const user = userData.get({ plain: true });
    console.log(user)
    res.render('profile',{ 
      title: 'Profile',
      logged_in: true,
      user: user
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

// // Use withAuth middleware to prevent access to route
// router.get('/profile', async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Project }],
    // });

    // const user = userData.get({ plain: true });
    // console.log(user)
//     res.render('profile', {
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login', { title: 'Login'});
});

module.exports = router;