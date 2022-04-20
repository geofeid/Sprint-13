interface WordTranslation {
    [language: string]: {
      [greeting: string]: string;
    }
  }

  const translateLibrary: WordTranslation = {
    'gr': {
      'welcome': 'Καλωσήρθατε!'
    }
  }

  const translateFunc = (language: string, word: string): string => {
    return translateLibrary[language][word]
}

console.log(translateFunc('gr', 'welcome'))
