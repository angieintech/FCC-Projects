const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
   let contact = contacts.filter(cont => cont.firstName === name);
   return contact.length ? (contact[0][prop] ? contact[0][prop] : "No such property") : "No such contact"; 
  /*if the names or properies are not within the contact array, 
  then it will output "No such property" or "No such contact".*/
} 
lookUpProfile("Akira", "likes"); //calls the function, lookUpProfile
