exports.requireLogin = (req, res, next) => {
// To check if a user is registered or not
    if (req.session && req.session.user){
        return next();
    }

    else{
        return res.redirect('/login')
    }

}