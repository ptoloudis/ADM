import { Db } from 'mongodb';
import { exit } from 'process';


/**
 * It returns a promise that resolves to an array of documents from the collection.
 * @param {Db} db - Db - The database object that we created earlier.
 * @param {string} collectionName - The name of the collection you want to read from.
 * @returns An array of objects.
 */
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

/**
 * It returns a promise that resolves to an array of documents that match the query
 * @param {Db} db - Db - The database object that we created earlier.
 * @param {string} collectionName - The name of the collection you want to read from.
 * @param {any} query - This is the query that you want to run.
 * @returns The data is being returned.
 */
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

/**
 * It returns a promise that resolves to an array of documents that match the query and projection
 * @param {Db} db - Db - The database object
 * @param {string} collectionName - The name of the collection you want to read from.
 * @param {any} query - This is the query that you want to run.
 * @param {any} projection - This is the projection parameter. It's an object that specifies the fields
 * to return.
 * @returns The data is being returned.
 */
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

/**
 * Reads a single column from a collection and returns an array of the values
 * @param {Db} db - Db - this is the database object that you created in the previous step.
 * @param {string} collectionName - The name of the collection you want to read from.
 * @param {string} col - the name of the column you want to read
 */
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

/**
 * Reads a single column from a collection and returns an array of the values
 * @param {Db} db - Db - this is the database object that you created in the previous step.
 * @param {string} collectionName - The name of the collection you want to read from.
 * @param {any} query - This is the query that you want to run.
 * @param {string} col - the name of the column you want to read
 * @returns An array of the values of the column col in the collection collectionName
 */
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

/**
 * It returns an array of distinct values for a given field in a collection.
 * @param {Db} db - Db - The database object that we created earlier.
 * @param {string} collectionName - The name of the collection you want to query.
 * @param {any} query - The query to find the distinct values.
 * @param {any} projection - This is the projection parameter. It is used to specify or restrict the
 * fields to return.
 * @param {string} col - The name of the field you want to get the distinct values for.
 */
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

/**
 * It returns an array of distinct values for a given field in a collection
 * @param {Db} db - Db - The database object that we created earlier.
 * @param {string} collectionName - The name of the collection you want to query.
 * @param {any} query - The query to find the distinct values.
 * @returns An array of distinct values
 */
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
  