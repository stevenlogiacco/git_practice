let thingToDefine = ['meaning of life', 'best way to eat ham', 'point of saying hello', 
'cost of being nice', 'arguement for sleeping in', 'way to describe negative people', 'cure for hiccups', 
'secret ingredient in KFC is', 'funniest thing ever', 'advise I\'d give to my younger self'];

let definitionStatement = ['eat what\'s on your plate', 'juggle two cups with one hand', 'walk backwards for the first hour of each day', 
'repeat every sentence you speak, repeat every sentence you speak', 'nowhere to be found', 'based on incomplete information',
'to enter a debate with your spouse that you cannot win', 'keep trying the same method, even if it continues not to work for you'];

let philosopher = ['Socrates', 'Aristotle', 'Immanuel Kant', 'Rene Descartes', 'Friedrich Nietzsche', 'Karl Marx', 'Avicenna (Ibn Sina)',
'David Hume', 'Martin Heidegger', 'Ludwig Wittgenstein', 'John Locke', 'Georg Wilhelm Friedrich Hegel', 'Thomas Aquinas', 'Soren Kierkegaard', 'Edmund Husserl'];

const randomizer = array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const mixedMessages = () => {
    let thing = randomizer(thingToDefine);
    let def = randomizer(definitionStatement);
    let phi = randomizer(philosopher);
    return `The ${thing} is, ${def}. - ${phi}`
}

console.log(mixedMessages());