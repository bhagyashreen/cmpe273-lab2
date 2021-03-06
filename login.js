function Login() {
        // sessionId -> user map
        this.sessionMap = {
                99999 : { name: 'Foo', email: 'foo@bar.com' }
        };
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
        return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
        return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
        * Generate unique session id and set it into sessionMap like foo@bar.com
        */
        var sessionId = new Date().getTime();
        this.sessionMap[sessionId] = { name: _name, email: _email }

        console.log('new session id ' + sessionId + ' for login::' + _email);

        return sessionId;
};

Login.prototype.refreshid = function(sessionId) {

        var newsessionId = new Date().getTime();
        var old_name = this.sessionMap[sessionId].name;
        var old_email = this.sessionMap[sessionId].email;
        
        this.sessionMap[newsessionId]= { name: old_name, email: old_email};
        delete this.sessionMap[sessionId];

        //var newsessionId = new Date().getTime();
        //this.sessionMap[newsessionId]= { name: old_name, email: old_email}
        
        //console.log('logout::' + sessionId);

        //console.log('new session id '+ newsessionId + ' for login ::' + old_email);
        return newsessionId;
   /*
        * TODO: Remove the given sessionId from the sessionMap
        */
};

Login.prototype.delete = function(sessionId) {

        delete this.sessionMap[sessionId];


        console.log('logout::' + sessionId);
   /*
        * TODO: Remove the given sessionId from the sessionMap
        */
};

/**
 * Logout from the server
 */
Login.prototype.logout = function(sessionId) {

        delete this.sessionMap[sessionId];

        console.log('logout::' + sessionId);
   /*
        * TODO: Remove the given sessionId from the sessionMap
        */
};

// Export the Login class
module.exports = new Login();
                                                                          