// update.ts
import { Db } from 'mongodb';
import { exit } from 'process';

async function update_one(db: Db, collectionName: string, query: any, update: any, options: any = {}) {
    let collection = db.collection(collectionName);
    try {
        let rtn = await collection.updateOne(query, update, options);
        if (rtn.modifiedCount == 0) {
            return 0;
        }
        return 1;
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
}

async function update_many(db: Db, collectionName: string, query: any, update: any, options: any = {}) {
    let collection = db.collection(collectionName);
    try {
        let rtn = await collection.updateMany(query, update, options);
        if (rtn.modifiedCount == 0) {
            return 0;
        }
        return rtn.modifiedCount;
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
}

async function update_all(db: Db, collectionName: string, update: any, options: any = {}) {
    let collection = db.collection(collectionName);
    try {
        let rtn = await collection.updateMany({}, update, options);
        if (rtn.modifiedCount == 0) {
            return 0;
        }
        return rtn.modifiedCount;
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
}

async function replace_one(db: Db, collectionName: string, query: any, update: any, options: any = {}) {
    let collection = db.collection(collectionName);
    try {
        let rtn = await collection.replaceOne(query, update, options);
        if (rtn.modifiedCount == 0) {
            return 0;
        }
        return 1;
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
}

export { update_one, update_many, update_all, replace_one };