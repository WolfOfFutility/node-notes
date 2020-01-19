const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//Customise Yargs Version
yargs.version('1.1.0')

//Add notes
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

//Remove Notes
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNotes(argv.title)
})

//Read Notes
yargs.command({
    command: 'read',
    describe: 'read individual note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNotes(argv.title)
})

//List notes
yargs.command({
    command: 'list',
    describe: 'list out notes',
    handler: () => notes.listNotes()
})


yargs.parse()