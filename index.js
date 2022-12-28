// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
}
function destructivelyPrependCat(name)
{
    cats.unshift(name);
}
function destructivelyRemoveLastCat()
{
    cats.pop();
}
function destructivelyRemoveFirstCat()
{
    cats.shift();
}
function appendCat(name)
{
    const copyCat = [...cats, name];
    return copyCat;
}
function prependCat(name)
{
    const copyCat = [name, ...cats];
    return copyCat;
}
function removeLastCat()
{
   return cats.slice(0, cats.length - 1);   
}
function removeFirstCat()
{
    return cats.slice (1);
}
