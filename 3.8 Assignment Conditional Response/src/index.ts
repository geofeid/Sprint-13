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

  //AlbumItem interface
  interface AlbumItem {
    userId: number;
    id: number;
    title: string;
  }

  //Album interface
  interface Album {
    id: number;
    title: string;
  }

  //Promise
  type PromisedCustomer = Promise<Customer[] | Album[]>

type PromisedCustomerData<T> = T extends Promise<Customer[] | Album[]> ? T : never;

const isCustomerItem = (variableToCheck: any): variableToCheck is CustomerItem => {  
  return variableToCheck.company !== undefined;
}

  //Api stored
const apiURL = 'https://jsonplaceholder.typicode.com/users'
const albumURL = 'https://jsonplaceholder.typicode.com/albums/1/photos'

//FetchFunction
const fetchFunction = async (url: string): PromisedCustomerData<PromisedCustomer> => {
    const response = await fetch(url).then(response => response.json());
  
    return response.map((customer: CustomerItem | AlbumItem): Customer | Album => {
      if(isCustomerItem(customer)){
              return {
                id: customer.id,
                name: customer.name,
                street_address: `${customer.address.suite} ${customer.address.street}`,
                company_name: customer.company.name
              }
            }
            else {
              return {
                id: customer.id,
                title: customer.title
              }
            }
          })
  }
  
  fetchFunction(apiURL).then(users => console.log(users))
  fetchFunction(albumURL).then(albums => console.log(albums))
