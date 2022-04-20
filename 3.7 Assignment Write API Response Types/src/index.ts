import fetch from 'node-fetch'
//CustomerItem interface
interface CustomerItem {
    id: number;
    name: string;
    address: {
       street: string;
       suite: string;
     },
    company: {
       name: string;
     }
  };

  //Customer interface 
  interface Customer {
    id: number;
    name: string;
    street_address: string;
    company_name: string;
  };

  //Promise
  type PromisedCustomer = Promise<Customer[]>

  //Api stored
const apiURL = 'https://jsonplaceholder.typicode.com/users'

//FetchFunction
const fetchFunction = async (url: string): PromisedCustomer => {
    const response = await fetch(url).then(response => response.json());
  
    return response.map((customer: CustomerItem): Customer => {
              return {
                id: customer.id,
                name: customer.name,
                street_address: `${customer.address.suite} ${customer.address.street}`,
                company_name: customer.company.name
              }
          })
  }
  
  fetchFunction(apiURL).then(users => console.log(users))

