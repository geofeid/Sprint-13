interface WordTranslation {
    [language: string]: {
      [greeting: string]: string;
    }
  }

  interface NumberTranslation {
    [m: string]: {
      [n: number]: string;
    }
  }

  const translateNumber: NumberTranslation = {
    'gr': {
      1: 'Ένα',
      2: 'Δύο',
      3: 'Τρία',
      4: 'Τέσσερα',
      5: 'Πέντε'
    }
  }

  const translateLibrary: WordTranslation = {
    'gr': {
      'welcome': 'Καλωσήρθατε!'
    }
  }

  const translateFunc = (language: string, input: string | number): string => {
    if(typeof input == 'string'){
      return translateLibrary[language][input]
    } else if (typeof input == 'number') {
      const purchases_left = (5 - input);
      return `Σας ευχαριστούμε για την αγορά σας μόνο  ${translateNumber[language][purchases_left]} έμειναν μέχρι τη δωρεάν κούπα καφέ!`
    } else {
      return 'Incorrect input type detected'
    }
  }

console.log(translateFunc('gr', 'welcome'))
console.log(translateFunc('gr', 3))
