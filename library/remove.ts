import { Db, ObjectId } from 'mongodb';
import { exit } from 'process';

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