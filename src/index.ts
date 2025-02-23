type User = {
  type: 'user';
  id: number;
  name: string;
  email: string;
  // user-specific properties 
};

type Admin = {
  type: 'admin';
  id: number;
  name: string;
  email: string;
  role: string;  // Admin-specific property
};

type Person = User | Admin;

function filterPersons<T extends 'user' | 'admin'>(
  personType: T,
  criteria: T extends 'user' ? Partial<Omit<User, 'type'>> : Partial<Omit<Admin, 'type'>>
): (T extends 'user' ? User : Admin)[] {
  //  data (for demonstration purposes)
  const people: Person[] = [
    { type: 'user', id: 1, name: 'Alice', email: 'alice@example.com' },
    { type: 'admin', id: 2, name: 'Bob', email: 'bob@example.com', role: 'superadmin' },
    { type: 'user', id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { type: 'admin', id: 4, name: 'Dave', email: 'dave@example.com', role: 'moderator' },
  ];

  // Filter based on personType and criteria
  const filteredPeople = people.filter(person => {
    // To Check if the person matches the specified type
    if (person.type !== personType) {
      return false;
    }

    // To Check the criteria (excluding the type property)
    for (const key in criteria) {
  
      if (criteria[key as keyof typeof criteria] !== undefined && person[key as keyof typeof person] !== criteria[key as keyof typeof criteria]) {
        return false;
      }
    }

    return true;
  });

  // Return the filtered array, asserting the correct type
  return filteredPeople as (T extends 'user' ? User : Admin)[];
}

// Example Usage:
const users = filterPersons('user', { name: 'Alice' });
console.log(users);  // Returns User[] with matching users

const admins = filterPersons('admin', { role: 'superadmin' });
console.log(admins);  // Returns Admin[] with matching admins
