import { Db, MongoClient} from 'mongodb';
import * as dotenv from 'dotenv';
let client: MongoClient;
let db: Db;

dotenv.config({path: './library/login.env'});

async function connect(userMode: string) {
  let url: any;
  if (userMode === 'dev') {
    url = process.env.MONGO_URL_DEV;
  } else if (userMode === 'Admin') {
    url = process.env.MONGO_URL_ADMIN;
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
    const db = client.db('ADB');
    console.log('Connected to MongoDB as ' + userMode + ' user');
    return db;
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    return null;
  }
}


async function disconnect() {
  await client.close();
  console.log('Disconnected from MongoDB');
}

export { connect, disconnect, db };