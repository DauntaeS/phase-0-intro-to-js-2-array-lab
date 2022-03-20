// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(Bob) {
    cats.pop(3);
}
function destructivelyRemoveFirstCat(Ralph) {
    cats.shift(1);
}
function appendCat(Broom) {
    const catLove = [...cats, Broom];
    return catLove;
}
function prependCat(Arnold) {
    const catLover = [Arnold, ...cats];
    return catLover;
}
function removeLastCat(Bob) {
    const meow = cats.slice(0, 2);
    return meow;
}
function removeFirstCat(Dog) {
    const tree = cats.slice(1);
    return tree; 
}