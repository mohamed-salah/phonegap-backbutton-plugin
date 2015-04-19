var Backbutton = {

    goHome: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'BackbuttonPlugin',
            'goHome', []);
    }
    goHome: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'BackbuttonPlugin',
            'goBack', []);
    }
};

module.exports = Backbutton;