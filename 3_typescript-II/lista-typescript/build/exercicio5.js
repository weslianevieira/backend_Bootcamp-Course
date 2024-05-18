"use strict";
// const users =  [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 
var ROLE;
(function (ROLE) {
    ROLE["USER"] = "user";
    ROLE["ADMIN"] = "admin";
})(ROLE || (ROLE = {}));
const users = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADMIN }
];
// retorne uma lista com apenas os emails dos usuários “admin”.
const usersSelected = (users) => {
    const result = users.filter(u => u.role === ROLE.ADMIN).map(u => u.email);
    return result;
};
console.log(usersSelected(users));
// [ 'ademir@email.com', 'carina@email.com' ]
