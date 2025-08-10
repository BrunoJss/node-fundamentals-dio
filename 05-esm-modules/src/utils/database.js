const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDatabase(dataName) {
    console.log("Conectado ao banco: "+dataName)    
}

async function disconnectDatabase(database){
    console.log("Desconectando do banco: " + database)
}

//exportação atraves do objeto
export {
    connectToDatabase,
    disconnectDatabase,
    databaseType
};