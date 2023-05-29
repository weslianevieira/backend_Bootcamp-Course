//1 

type Person = {
   id: number | string,
   name: string,
   email: string,
   password: number | string,
   role: string
}

type AdminAccount = {
   account: number | string,
   permission: boolean
}

type NormalAccount = {
  account: number | string;
  permission: boolean;
};

//2
// Enum com valores ADMIN e NORMAL;
// Role = funções ou papéis que um usuário pode ter em um sistema 
enum Role {
   ADMIN = 'Admin',
   NORMAL = 'Normal'
}

// Tipo Intersection unindo: pessoa(Person) + permissão (Role);
type Acess = Person & {
   //prop e type
   role: Role
};

// Crie duas pessoas, uma com permissão normal e a outra admin;
const userNormal: Acess = {
  email: "ana@gmail.com",
  id: "00",
  name: "ana",
  password: "123456",
  role: Role.NORMAL,
};

const userAdmin: Acess = {
  email: "ana2@gmail.com",
  id: "001",
  name: "ana1",
   password: "1234567",
  role: Role.ADMIN
};

// Um array de usuários que permite apenas guardar usuários do tipo Person + Role;
const users: Acess[] = [];

// Guarde essas pessoas no array de usuários.
users.push(userNormal, userAdmin);

console.table(users)
