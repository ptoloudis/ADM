import * as XLSX from 'xlsx';
import { MongoClient} from 'mongodb';
import { DuplicateKeyError } from 'mongodb-core';


const url = 'mongodb+srv://ptoloudis12:2O6fyqkz4GNwauYk@cluster0.t16ctbg.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'ADB';
let db;

async function connect() {
  await client.connect();
  db = client.db(dbName);
  console.log('Connected to MongoDB');
}

async function insertData(data: any, collectionName: string) {
  let collection = db.collection(collectionName);
  try {
    await collection.insertOne(data);
  } catch (err) {
    if (err instanceof DuplicateKeyError) {
      console.log('Duplicate key error: this document already exists in the collection.');
    } else {
      console.error(err);
    }
  }
}

async function main() {
  await connect();
  
  let workbook, worksheet, dt;

  workbook = XLSX.readFile('data/drugs.xlsx');
  worksheet = workbook.Sheets[workbook.SheetNames[0]];
  dt = XLSX.utils.sheet_to_json(worksheet);
  for (const data of dt)
    await insertData(data, 'Drugs');


  workbook = XLSX.readFile('data/pdb_data_seq.xlsx');
  worksheet = workbook.Sheets[workbook.SheetNames[0]];
  dt = XLSX.utils.sheet_to_json(worksheet);
  for (const data of dt)
    await insertData(data, 'pdb_seq');

  workbook = XLSX.readFile('data/pdb_data_no_dups.xlsx');
  worksheet = workbook.Sheets[workbook.SheetNames[0]];
  dt = XLSX.utils.sheet_to_json(worksheet);
  for (const data of dt)
    await insertData(data, 'pdb_no_dups');

  await client.close();


}

main().catch(console.error);