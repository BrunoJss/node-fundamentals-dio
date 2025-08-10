import { disconnectDatabase, databaseType } from "./utils/database.js"; 
// import { getDataFromApi } from './utils/api.js'
import * as api from './utils/api.js'

// database.connectToDatabase("my-database")
api.getDataFromApi();
disconnectDatabase("my-database"); 