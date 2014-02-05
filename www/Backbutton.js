var Backbutton = {

    goHome: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'BackbuttonPlugin',
            'goHome', []);
    }
};

module.exports = Backbutton;