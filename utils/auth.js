// Checking that the User is logged in, if not the user is redirected to the login page.
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
  
module.exports = withAuth;