import { Db } from 'mongodb';
import { exit } from 'process';


async function Read_Data(db: Db, collectionName: string) {
    const collection = db.collection(collectionName);
    try {
        const data = await collection.find({}).toArray();
        return data;
    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function Read_Data_2(db: Db, collectionName: string, query: any) {
    const collection = db.collection(collectionName);
    try {
        const data = await collection.find(query).toArray();
        return data;
    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function Read_Data_3(db: Db, collectionName: string, query: any, projection: any) {
    const collection = db.collection(collectionName);
    try {
        const data = await collection.find(query, projection).toArray();
        return data;
    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function Read_Data_Col(db: Db, collectionName: string, col: string) {
    const collection = db.collection(collectionName);
    try {
        const rtn: any = [];
        const data = await collection.find({}).toArray();
        data.forEach((item) => {
            rtn.push(item[col]);
        });
    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function Read_Data_Col_2(db: Db, collectionName: string, query: any, col: string) {
    const collection = db.collection(collectionName);
    try {
        const rtn: any = [];
        const data = await collection.find(query).toArray();
        data.forEach((item) => {
            rtn.push(item[col]);
        });
        return rtn;

    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function Read_Data_Col_3(db: Db, collectionName: string, query: any, projection: any, col: string) {
    const collection = db.collection(collectionName);
    try {
        const rtn: any = [];
        const data = await collection.find(query, projection).toArray();
        data.forEach((item) => {
            rtn.push(item[col]);
        });
    } catch (err) {
        console.error(err);
        exit(1);
    }
}

async function getDistinctValues(db: Db, collectionName: string, query: any) {
    const collection = db.collection(collectionName);
    try {
      const distinctValues = await collection.distinct(query);
      return distinctValues;
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
  
export { Read_Data, Read_Data_2, Read_Data_3, Read_Data_Col, Read_Data_Col_2, Read_Data_Col_3, getDistinctValues  };
  