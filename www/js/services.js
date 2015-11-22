/**
 * Created by Theo on 11/21/2015.
 */
angular.module('services', [])

  .service('UserService', function() {

    // data is stored on local storage; should be on the database

    var setUser = function(user_data) {
      window.localStorage.starter_facebook_user = JSON.stringify(user_data);
    };

    var getUser = function(){
      return JSON.parse(window.localStorage.starter_facebook_user || '{}');
    };

    return {
      getUser: getUser,
      setUser: setUser
    };
  });
