"use strict";
function filterPersons(personType, criteria) {
    // Dummy data (for demonstration purposes)
    const people = [
        { type: 'user', id: 1, name: 'Alice', email: 'alice@example.com' },
        { type: 'admin', id: 2, name: 'Bob', email: 'bob@example.com', role: 'superadmin' },
        { type: 'user', id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { type: 'admin', id: 4, name: 'Dave', email: 'dave@example.com', role: 'moderator' },
    ];
    // Filter based on personType and criteria
    const filteredPeople = people.filter(person => {
        // Check if the person matches the specified type
        if (person.type !== personType) {
            return false;
        }
        // Check the criteria (excluding the type property)
        for (const key in criteria) {
            // Ensure we only compare valid keys for the given type (User or Admin)
            if (criteria[key] !== undefined && person[key] !== criteria[key]) {
                return false;
            }
        }
        return true;
    });
    // Return the filtered array, asserting the correct type
    return filteredPeople;
}
// Example Usage:
const users = filterPersons('user', { name: 'Alice' });
console.log(users); // Returns User[] with matching users
const admins = filterPersons('admin', { role: 'superadmin' });
console.log(admins); // Returns Admin[] with matching admins
