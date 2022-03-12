function printName(input:string) {
    let theInput: string = input.toLowerCase()
    console.log("HELLO WORLD from Jomans!!!" + theInput)
}
printName('TESTING')


const sample = {
    pet: {
        petName: 'Sakura',
        kind:'dog'
    }
}

sample['owner'] = {ownerName:'Jomans', gender: 'male'}


console.log(sample)