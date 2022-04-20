//Interface Coffee Selection
interface CoffeeSelection {
    ml: number;
    type: BrewType[];
    milk?: DairyType[];
    additions?: string[];
  }

  //Enum brew
  enum BrewType {
    drip_brew =  'Drip Brew',
    pour_over =  'Pour Over',
    cold_brew =  'Cold Brew',
    espresso =  'Espresso',
    ristretto =   'Ristretto' 
  }

  //Enum dairy
  enum DairyType {
    plain = 'Milk',
    steamed = 'Steamed Milk',
    whipped = 'Whipped Cream',
    iced = 'Ice Cream',
    scalded = 'Scalded Milk',
    foamed = 'Foamed Milk',
    half = 'Half and Half',
    warmed = 'Warmed Milk'  
  }

  //Cappuccino creation
  const Cappuccino: CoffeeSelection = {
    ml: 200,
    milk: [DairyType.steamed, DairyType.foamed],
    type: [BrewType.espresso],
    additions: ['chocolate']
  }
  
  //Espresso creation
  const BlackEye: CoffeeSelection = {
    ml: 250,
    type: [BrewType.espresso, BrewType.espresso, BrewType.drip_brew]
  }
  
  console.log(Cappuccino)
  console.log(BlackEye)
