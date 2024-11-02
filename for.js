function test(letter) {
    let text = 'Привет мир'
    let test = text.split('')
    return (test.filter(result => !letter.includes(result))
    .join(''))
}

console.log(test(['р', 'и']))



// function removeCharacters(text, letters) {
//     return text.split('')
//                .filter(char => !letters.includes(char))
//                .join('');
// }

// console.log(removeCharacters('Привет мир', ['р', 'и']));