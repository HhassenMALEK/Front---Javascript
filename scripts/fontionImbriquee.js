function getFullName(firstName, lastName) {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const formattedFirstName = capitalize(firstName);
    const formattedLastName = capitalize(lastName);
    return `${formattedFirstName} ${formattedLastName}`;
}
const firstName = 'hassen';
const lastName = 'malek';
const fullName = getFullName(firstName, lastName);

console.log(fullName); 