async function connectToDatabase(dataName) {
    console.log("Conectado ao banco: "+dataName)    
}

async function disconnectDatabase(database){
    console.log("Desconectando do banco: " + database)
}

export {
    connectToDatabase,
    disconnectDatabase
};