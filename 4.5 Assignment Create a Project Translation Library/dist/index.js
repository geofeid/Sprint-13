"use strict";
const translateLibrary = {
    'gr': {
        'welcome': 'Καλωσήρθατε!'
    }
};
const translateFunc = (language, word) => {
    return translateLibrary[language][word];
};
console.log(translateFunc('gr', 'welcome'));
