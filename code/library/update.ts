// update.ts
import { Db } from 'mongodb';
import { exit } from 'process';

/**
 * It updates one document in the database
 * @param {Db} db - Db - the database object
 * @param {string} collectionName - the name of the collection to update
 * @param {any} query - the query to find the document to update
 * @param {any} update - the update to apply to the matching document
 * @param {any} options - {
 * @returns The number of documents updated.
 */
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

/**
 * It updates many documents in a collection
 * @param {Db} db - Db - the database object
 * @param {string} collectionName - The name of the collection to update.
 * @param {any} query - The query to find the documents to update.
 * @param {any} update - the update operation to be performed.
 * @param {any} options - {
 * @returns The number of documents that were updated.
 */
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

/**
 * It updates all documents in a collection
 * @param {Db} db - Db - the database object
 * @param {string} collectionName - The name of the collection to update.
 * @param {any} update - the update to apply to all documents in the collection
 * @param {any} options - {
 * @returns The number of documents that were updated.
 */
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

/**
 * It replaces one document in a collection
 * @param {Db} db - Db - the database object
 * @param {string} collectionName - The name of the collection to update.
 * @param {any} query - The query to find the document to update.
 * @param {any} update - the update document
 * @param {any} options - {
 * @returns The number of documents modified.
 */
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