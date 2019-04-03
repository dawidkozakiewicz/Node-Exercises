const yargs = require('yargs')


yargs.command({
    command: 'add',
    describe: 'Add notes',
    handler: () => {
        console.log('Adding note...')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    handler: () => {
        console.log('Removing note...')
    }
})

console.log(process.argv)
console.log(yargs.argv)
