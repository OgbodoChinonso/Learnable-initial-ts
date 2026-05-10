interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

export function filterPersons(persons: Person[], personType: 'user', criteria: Partial<User>): User[];
export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Admin>): Admin[];

export function filterPersons(persons: Person[], personType: string, criteria: any): Person[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}






