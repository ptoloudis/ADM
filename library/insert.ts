// insert_one.ts

import { Db } from 'mongodb';
import { exit } from 'process';
import { DrugData, pdb_no_dups, pdb_seq } from './my_interface';

async function insert_one(db: Db, collectionName: string, data: any) {
  // Return codes: 0 = success, -1 = invalid data, -2 = something is null, -3 = duplicate entry, -4 = permission denied

  if (data == null || collectionName == null || db == null) {
    return -2;
  }

  if(collectionName == 'Drugs' && isDrugData(data)) {
    try {
      let collection = db.collection(collectionName);
      await collection.insertOne(data);
    } catch (err: any) {
        if (err.code == 11000){
            console.log("Duplicate entry");
            return -3;
        }
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return 0;
  }
  else if(collectionName == 'pdb_no_dups' && isPdbNoDups(data)) {
    try {
      let collection = db.collection(collectionName);
      await collection.insertOne(data);
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return 0;
  }
  else if(collectionName == 'pdb_seq' && isPdbSeq(data)) {
    try {
      let collection = db.collection(collectionName);
      await collection.insertOne(data);
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return 0;
  }
  else {
    return -1;
  }
}


async function insert_many(db: Db, collectionName: string, data: any) {
    // Return codes: 0 = success, -1 = invalid data, -2 = something is null
    if (data == null || collectionName == null || db == null) {
        return -2;
    }
    
    if(collectionName == 'Drugs') {
        data.forEach((element: any) => {
            if(!isDrugData(element)) {
                return -1;
            }
            else {
                try {
                    let collection = db.collection(collectionName);
                    collection.insertOne(element);
                } catch (err) {
                    console.error(err);
                    exit (1);
                }
            }
        });
    }
    else if(collectionName == 'pdb_no_dups') {
        data.forEach((element: any) => {
            if(!isPdbNoDups(element)) {
                return -1;
            }
            else {
                try {
                    let collection = db.collection(collectionName);
                    collection.insertOne(element);
                } catch (err) {
                    console.error(err);
                    exit (1);
                }
            }
        });
    }
    else if(collectionName == 'pdb_seq') {
        data.forEach((element: any) => {
            if(!isPdbSeq(element)) {
                return -1;
            }
            else {
                try {
                    let collection = db.collection(collectionName);
                    collection.insertOne(element);
                } catch (err) {
                    console.error(err);
                    exit (1);
                }
            }
        });
    }
    else {
        return -1;
    }   
}

function isDrugData(data: any): data is DrugData {
    return (typeof data.drugName === 'string' &&
            typeof data.condition === 'string');
}

function isPdbNoDups(data: any): data is pdb_no_dups {
    return (typeof data.structureId === 'string' &&
            typeof data.classification === 'string' &&
            typeof data.experimentalTechnique === 'string' &&
            typeof data.macromoleculeType === 'string' &&
            typeof data.residueCount === 'number' &&
            typeof data.resolution === 'number' &&
            typeof data.structureMolecularWeight === 'number' &&
            typeof data.crystallizationMethod === 'string' &&
            typeof data.densityMatthews === 'number' &&
            typeof data.densityPercentSol === 'number' &&
            typeof data.pdbxDetails === 'string' &&
            typeof data.phValue === 'number' &&
            typeof data.publicationYear === 'number');
}

function isPdbSeq(data: any): data is pdb_seq {
    return (typeof data.structureId === 'string' &&
            typeof data.chainId === 'string' &&
            typeof data.sequence === 'string' &&
            typeof data.residueCount === 'number' &&
            typeof data.macromoleculeType === 'string');
}


export { insert_one };
