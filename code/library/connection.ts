import { Db, MongoClient} from 'mongodb';
import * as dotenv from 'dotenv';
let client: MongoClient;
let db: Db;

dotenv.config({path: './library/login.env'});

/**
 * "The connect function takes a string as an argument, and returns a promise that resolves to a
 * MongoDB database object."
 * 
 * The connect function takes a string as an argument, and returns a promise that resolves to a MongoDB
 * database object.
 * 
 * The string argument is the user mode, which is used to determine which MongoDB database to connect
 * to.
 * 
 * The connect function uses the MongoDB Node.js driver to connect to the database.
 * 
 * The connect function returns a promise that resolves to a MongoDB database object.
 * 
 * The connect function is exported so that it can be used in other files.
 *
 * The db variable is exported so that it can be used in other files.
 * 
 * The db variable is used to store the MongoDB database object.
 * @param {string} userMode - string - This is the user mode that you want to connect to the database
 * with.
 * @returns The connect function returns a promise.
 */
async function connect(userMode: string) {
  let url: any;
  if (userMode === 'Dev') {
    url = process.env.MONGO_URL_DEV;
  } else if (userMode === 'User') {
    url = process.env.MONGO_URL_USER;
  } else if (userMode === 'Guest') {
    url = process.env.MONGO_URL_GUEST;
  } else {
    console.log('Error: No user mode selected');
    return null;
  }

  try {
    client = new MongoClient(url);
    await client.connect();
    db = client.db('ADB');
    console.log('Connected to MongoDB as ' + userMode + ' user');
    return db;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    return null;
  }
}


/**
 * The function disconnects from the MongoDB database
 */
async function disconnect() {
  await client.close();
  console.log('Disconnected from MongoDB');
}

export { connect, disconnect, db };