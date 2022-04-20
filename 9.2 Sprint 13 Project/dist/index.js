"use strict";
// Media objects 
const my_library = [];
//Media status 
var Status;
(function (Status) {
    Status[Status["out"] = 0] = "out";
    Status[Status["in"] = 1] = "in";
})(Status || (Status = {}));
//AddMedia func
const addMedia = (media) => {
    my_library.push(media);
};
//printTitlesIn func
const printTitlesIn = (library) => {
    return library.filter((media) => {
        if (media.status == Status.in) {
            return media;
        }
    }).map((media) => {
        return media.title;
    });
};
//Objects 
const book1 = {
    date_published: new Date(),
    author: 'Agatha',
    genre: 'Thriller',
    title: 'Mr Bekas',
    status: Status.out,
    type: 'Book'
};
const magazine1 = {
    issue_no: 7,
    subject: 'sports',
    title: 'Sporty',
    status: Status.in,
    type: 'magazine'
};
// change Media Status 
const myFunc = (media) => {
    if (media.status == Status.in) {
        media.status = Status.out;
    }
    else {
        media.status = Status.in;
    }
};
addMedia(magazine1);
addMedia(book1);
console.log(printTitlesIn(my_library));
myFunc(book1);
console.log(printTitlesIn(my_library));
