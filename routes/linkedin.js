const router=require('express').Router()
router.route('/callback')
var Linkedin = require('node-linkedin')('app-id', 'secret', 'callback');
var linkedin = Linkedin.init('my_access_token',{
    timeout:1000
});
var auth_url = Linkedin.auth.authorize(scope);
var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];

router.get('/oauth/linkedin', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    Linkedin.auth.authorize(res, scope);
});
Linkedin.auth.authorize(res, scope, '/callback');
router.get('/oauth/linkedin', function(req, res) {
    // set the callback url
    Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/oauth/linkedin/callback');
    Linkedin.auth.authorize(res, scope);
});
router.get('/oauth/linkedin/callback', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if ( err )
            return console.error(err);
 
        /**
         * Results have something like:
         * {"expires_in":5184000,"access_token":". . . ."}
         */
 
        console.log(results);
        return res.redirect('/callback');
    });
});
module.exports=router

