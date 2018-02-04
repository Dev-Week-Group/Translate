const translate = function() {

    function translate( text ) {
        return fetch(`https://translation.googleapis.com/language/translate/v2?target=es&q=${text}&key=AIzaSyAIFdFRm1VfdaMqVoTBtH9mm8WXmNz4Cew`)
    }

    return {
        translate
    }
}();