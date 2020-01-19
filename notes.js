const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added!'))
    }
    else {
        console.log(chalk.bgRed('Note Title Taken'))
    }

    
}

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note Removed!'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.bgRed('Note Not Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()


    console.log(chalk.bgBlue('Your Notes'))
    console.log('')

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()

    const findNote = notes.find((note) => note.title === title)

    if(findNote) {
        console.log(findNote.title)
        console.log(findNote.body)
    }
    else {
        console.log(chalk.bgRed('Cannot Find Note'))
    }
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}