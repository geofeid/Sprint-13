// Media objects 
const my_library: Media[] = []

//Media status 
enum Status {
    out,
    in
  }

  //Media type
  type Media = {
    title: string;
    type: string
    status: Status;
  }

  //Book interface 
  interface Book extends Media {
    date_published: Date;
    author: string;
    genre: string;
  }

  //Magazines interface
  interface Magazine extends Media {
    issue_no: number;
    subject: string;
  }

  //AddMedia func
  const addMedia = (media: Media) => {
    my_library.push(media)
  }

  //printTitlesIn func
  const printTitlesIn = (library: Media[]): string[] => {
    return library.filter((media) => {
      if (media.status == Status.in){
        return media
      }
    }).map((media) => {
      return media.title 
    })
  }

  //Objects 
  const book1: Book = {
    date_published: new Date(),
    author: 'Agatha',
    genre: 'Thriller',
    title: 'Mr Bekas',
    status: Status.out,
    type: 'Book'  
  }
  
  const magazine1: Magazine = {
    issue_no: 7,
    subject: 'sports',
    title: 'Sporty',
    status: Status.in,
    type: 'magazine'  
  }

  // change Media Status 
  const myFunc = (media: Media) => {
    if(media.status == Status.in){
      media.status = Status.out
    } else {
      media.status = Status.in
    }
  }

  addMedia(magazine1);
addMedia(book1);

console.log(printTitlesIn(my_library))

myFunc(book1);

console.log(printTitlesIn(my_library))
