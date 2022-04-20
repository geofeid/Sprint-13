//Enum messages
enum GreetingTime {
  morning = "Good Morning",
  afternoon = "Good Afternoon",
  evening = "Good Evening",
}

//Customer interface
interface Customer {
  name: string;
  loyal: boolean;
  visits: number;
}

//Gabriel
const gabriel: Customer = {
    name: 'Gabriel',
    loyal: true,
    visits: 2
  }

  //Greeting Function
  const greetingfun = (dayTime: GreetingTime, customer: Customer): string => {
    const loyal = 'Thank you for being a loyal customer!';
    const notLoyal = 'Please join us for benefits';
    let greeting = `${dayTime} ${customer.name}! `
    
    greeting += customer.loyal ? loyal : notLoyal;
   
    return greeting
  }

  console.log(greetingfun(GreetingTime.morning, gabriel));
