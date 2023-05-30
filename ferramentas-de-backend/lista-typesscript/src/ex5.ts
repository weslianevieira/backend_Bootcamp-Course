/* 
Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.
*/

/* 
input: users/ Users[] 
output: email e admin / string[]
*/

enum ROLE {
   USER = 'user',
   ADMIN = 'admin'
}

type Users = {
   name: string,
   email: string,
   role: ROLE
}

const users: Users[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function getAdminEmails(users: Users[]): string[] {
   const adminEmail = users.filter((user) =>  user.role === ROLE.ADMIN )
      .map((adminUser) => adminUser.email)
   
   return adminEmail
}

console.log(getAdminEmails(users));
