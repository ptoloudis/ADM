import { Db, ObjectId } from 'mongodb';
import { exit } from 'process';

/**
 * It removes a document from a collection in a database
 * @param {Db} db - Db - the database object
 * @param {string} collectionName - The name of the collection you want to remove from
 * @param {any} query - the query to find the document to delete
 * @returns The return value is the number of documents deleted.
 */
async function remove_id(db: Db, collectionName: string, query: any) {
    if (query == null || collectionName == null || db == null) {
        return -1;
    }
    
    let collection = db.collection(collectionName);
    try {
        await collection.deleteOne({_id: new ObjectId(query)});
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return 0;    
}

/**
 * It removes all documents from the collection that match the query
 * @param {Db} db - Db - The database object
 * @param {string} collectionName - The name of the collection you want to remove from.
 * @param {any} query - The query to find the documents to delete.
 * @returns The number of documents deleted.
 */
async function remove_many(db: Db, collectionName: string, query: any) {
    if (query == null || collectionName == null || db == null) {
        return -1;
    }
    
    let collection = db.collection(collectionName);
    let data;
    try {
        data = await collection.deleteMany(query);
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return data;    
}

/**
 * It removes all documents from a collection
 * @param {Db} db - Db - The database object
 * @param {string} collectionName - The name of the collection to remove all documents from.
 * @returns The number of documents deleted.
 */
async function remove_all(db: Db, collectionName: string) {
    if (collectionName == null || db == null) {
        return -1;
    }
    
    let collection = db.collection(collectionName);
    let data;
    try {
        data = await collection.deleteMany({});
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return data;    
}

/**
 * It removes one document from the database that matches the query
 * @param {Db} db - Db - The database object that you created in the previous step.
 * @param {string} collectionName - The name of the collection you want to remove from.
 * @param {any} query - The query to find the document to delete.
 * @returns The number of documents deleted.
 */
async function remove_one(db: Db, collectionName: string, query: any) {
    if (query == null || collectionName == null || db == null) {
        return -1;
    }
    
    let collection = db.collection(collectionName);
    let data;
    try {
        data = await collection.deleteOne(query);
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return data;  
}

/**
 * It takes in a database, a collection name, and a query, and returns the data that was removed from
 * the collection
 * @param {Db} db - Db - The database object
 * @param {string} collectionName - The name of the collection you want to query.
 * @param {any} query - The query to find the document to delete.
 * @returns The data that was removed from the database.
 */
async function findremove(db: Db, collectionName: string, query: any) {
    if (query == null || collectionName == null || db == null) {
        return -1;
    }
    
    let collection = db.collection(collectionName);
    let data;
    try {
        data = await collection.find(query);
        await collection.deleteOne(query);
    } catch (err: any) {
        if(err.code == 8000)
            return -4;
        console.error(err);
        exit (1);
    }
    return data;  
}

export { remove_id, remove_many, remove_all, remove_one, findremove };