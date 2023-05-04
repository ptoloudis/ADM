import * as XLSX from 'xlsx';
import { MongoClient} from 'mongodb';
import { DuplicateKeyError } from 'mongodb-core';
import {connect, disconnect, db} from '../library/connection.js';



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
  await connect('dev');
  
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

  disconnect();


}

main().catch(console.error);