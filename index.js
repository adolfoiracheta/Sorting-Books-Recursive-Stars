//Q1 Sorting Algorithm To Sort Objects

let books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    libraryID: 3297
  },
  {
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    libraryID: 4885
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    libraryID: 9675
  },
  {
    title: "US Marine Corps History",
    author: "Jon T. Hoffman",
    libraryID: 7011
  }
];

let sortBooksByID = function(books) {
//sort books by id 
//create an for loop
//get id's and .push into a new array
//sort the id's in numerical order
//use the new array and put them back sorted

let bookIDs = []
for (let i = 0; i < books.length; i++) {
  bookIDs.push(books[i].libraryID)
  }
  //change to sorting algorithm later 
  bookIDs.sort()
  //console.log(bookIDs);

//creating two for loops to compare sorted array to the original and  the plan is to put the orginal objects
//in the sorted position. Take the objects from books and put in the sorted spots
for (let i = 0; i < bookIDs.length; i++) {
  for (let j = 0; j < books.length; j++) {
    if (bookIDs[i] == books[j].libraryID) {
      bookIDs[i] = books[j]
    }
  }
}
  return bookIDs;
};

//console.log(sortBooksByID(books));


let sortBooks = function(arr, type) {
//sort books
//create a for loop
//use bookIDs and create a new array
//sort books and include all elements
//return the sorted array back in order

let sorted = []
  for (let i = 0; i < arr.length; i++) {
    sorted.push(arr[i][type])
  }
    sorted.sort()
  
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (sorted[i] == arr[j][type]) {
        sorted[i] = arr[j]
      }
    }
  }

  return sorted;
};

console.log(sortBooks(books,'title'));


//Q2 Recursion Function (only one function) To Print Out The Recursion Stars

let str = ''
function printStars(star,num) {
  str += star
  console.log(str)
    if (num == 1) {
      return ''
    }
    return printStars(star,num - 1)
}
printStars('*',6)