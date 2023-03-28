// import * as XLSX from 'xlsx';
import { MongoClient} from 'mongodb';
// import { DuplicateKeyError } from 'mongodb-core';


const url = 'mongodb+srv://ptoloudis12:2O6fyqkz4GNwauYk@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function connect() {
  await client.connect();
  console.log('Connected to MongoDB');
}


async function set_unique() {
    const db = client.db('ADB');
    const collection = db.collection('Drugs');
    await collection.createIndex({drugName: 1}, {unique: true});
    
}

async function main() {
    try {
      await connect();
      await set_unique();
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      console.log('Connection closed');
    }
  }

main();

