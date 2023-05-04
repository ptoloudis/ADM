import { Db } from 'mongodb';
import * as find from './find';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function from Drugs Database
/**
 * This function takes in a database, and a drug name, and returns the condition that the drug treats.
 * @param {Db} db - Db - The database object
 * @param {string} name - The name of the drug
 * @returns The condition of the drug
 */
async function NameCondition(db: Db, name:string){
    return await find.Read_Data_Col_2(db, 'Drugs', {drugName: name}, 'condition');
}

/**
 * It returns a list of drug names that are used to treat a given condition
 * @param {Db} db - The database object
 * @param {string} condition - string
 * @returns An array of drug names
 */
async function ConditionNames(db: Db, condition: string) {
    return await find.Read_Data_Col_2(db, 'Drugs', {condition: condition}, 'drugName');
}

async function ConditionNamesPrt(db: Db, condition: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'Drugs', {condition: condition}, 'drugName');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database and a number as input and prints out the distinct values of the condition field
 * in the Drugs collection in the database
 * @param {Db} db - Db - the database object
 */
async function ConditionNamesAll(db: Db) {
    return await find.getDistinctValues(db, 'Drugs', 'condition');
}

async function ConditionNamesAllPrt(db: Db, size: number) {
    let quit: boolean = false;
    let data = await find.getDistinctValues(db, 'Drugs', 'condition');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
    
}

/**
 * It takes in a database, a drug name, and a size, and returns a list of alternative drug names
 * @param {Db} db - Db - the database object
 * @param {string} name - the name of the drug
 * @returns the alternative names of the drug.
 */
async function alternativeName(db: Db, name: string) {
    let con = await find.Read_Data_Col_2(db, 'Drugs', {drugName: name}, 'condition');
    let data = await find.Read_Data_Col_2(db, 'Drugs', {condition: con[0]}, 'drugName');
    return data;
}

async function alternativeNamePrt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await alternativeName(db, name);
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            if(data[j] == name){
                console.log("Same name: " + data[j]);
                continue;
            }
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}
   
// Querys from pdb_no_dups
/**
 * > This function returns the PDB entry for a given PDB name
 * @param {Db} db - The database object.
 * @param {string} name - The name of the PDB file.
 * @returns the data from the pdb_no_dups collection in the db database.
 */
async function pdbName(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {structureId: name});
}

/**
 * It takes a database, a classification name, and a size. It then finds all the structures with that
 * classification name, and prints them out in groups of size
 * @param {Db} db - Db - the database object
 * @param {string} name - the name of the classification
 * @returns the number of structures that have the same classification.
 */
async function classfNames(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {classification:  name});
}

async function classfNamesPrt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {"classification":  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database and a number as input and prints out the classification names in the database in
 * groups of the number
 * @param {Db} db - Db - the database object
 * @returns the number of distinct classifications in the database.
 */
async function classfNamesAll(db: Db) {
    return await find.getDistinctValues(db, 'pdb_no_dups', 'classification');
}

async function classfNamesAllPrt(db: Db, size: number) {
    let quit: boolean = false;
    let data = await find.getDistinctValues(db, 'pdb_no_dups', 'classification');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input if insert q to quit
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database, a macromolecule type, and a size, and then prints out the structureIds of the
 * first size number of entries in the database that have the given macromolecule type
 * @param {Db} db - the database object
 * @param {string} name - the name of the macromolecule type
 * @returns the number of structures that have the given macromolecule type.
 */
async function mmType(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {macromoleculeType:  name});
}

async function mmTypePrt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {macromoleculeType:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It prints out all the distinct values of macromoleculeType in the database.
 * @param {Db} db - the database object
 * @returns the distinct values of the macromoleculeType field in the pdb_no_dups collection.
 */
async function mmTypeAll(db: Db) {
    return await find.getDistinctValues(db, 'pdb_no_dups', 'macromoleculeType');
}

async function mmTypeAllPrt(db: Db, size: number) {
    let quit: boolean = false;
    let data = await find.getDistinctValues(db, 'pdb_no_dups', 'macromoleculeType');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input if insert q to quit
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * The function takes in a database, a name, and a size. It then finds all the structureIds that have
 * the name as their residueCount. It then prints out the structureIds in groups of size
 * @param {Db} db - Db - the database object
 * @param {string} name - the name of the field you want to search
 * @returns The structureId of the pdb files that have the residueCount of the input.
 */
async function residueCount(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {residueCount:  name});
}
    
async function residueCountPrt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {residueCount:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It returns the number of residues in a protein.
 * @param {Db} db - Db - the database connection
 * @param {string} name - The name of the PDB file.
 * @returns The residue count of the structure.
 */
async function id_residueCount(db: Db, name: string) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return residueCount(db, val[0].residueCount);
}

async function id_residueCountPrt(db: Db, name: string, size: number) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return residueCountPrt(db, val[0].residueCount, size);
}

/**
 * This TypeScript function retrieves the pH value of a given structure ID from a database using an
 * asynchronous operation.
 * @param {Db} db - The parameter "db" is likely an instance of a database connection or client that is
 * used to interact with a database. It is passed as an argument to the function and is used to perform
 * database operations such as querying or updating data.
 * @param {any} name - The parameter "name" is a string that represents the structure ID of a protein
 * in the "pdb_no_dups" collection of a MongoDB database. The function uses this ID to find the
 * corresponding protein entry in the collection and return its pH value.
 * @returns the pH value of a protein structure with a given name, which is obtained from a database
 * using the `find.Read_Data_2` function.
 */

async function id_ph(db: Db, name: any) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return val[0].phValue;
}

/**
 * It takes a database, a name, and a size, and then it prints out the structureIds of the structures
 * that have the given name in the phValue field
 * @param {Db} db - Db - the database object
 * @param {any} name - the name of the ph value
 * @returns the structureId of the protein with the given phValue.
 */
async function ph_names(db: Db, name: any) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {phValue:  name});
}

async function ph_namesPrt(db: Db, name: any, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {phValue:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}


/**
 * It takes a database, a base ph value, a width, and a size. It then finds all the structures in the
 * database that have a ph value within the width of the base ph value. It then prints out the
 * structure ids in groups of size
 * @param {Db} db - the database
 * @param {number} base - the pH value to center the search around
 * @param {number} width - the width of the pH range
 * @returns The structureIds of the proteins that have a pH value within the given range.
 */
async function ph_width(db: Db, base: number, width: number) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {phValue:  {$gte: base-width, $lte: base+width}});
}

async function ph_widthPrt(db: Db, base: number, width: number, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {phValue:  {$gte: base-width, $lte: base+width}}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );        
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database and a name, and returns the resolution of the structure with that name.
 * @param {Db} db - the database object
 * @param {any} name - The name of the PDB file.
 * @returns The resolution of the structure.
 */
async function idResolution(db: Db, name: any) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return val[0].resolution;
}

/**
 * It prints out the structureIds of the structures with the given resolution.
 * @param {Db} db - Db - the database object
 * @param {any} name - the name of the resolution
 * @returns the structureIds of the structures that have the resolution specified.
 */
async function resolution_names(db: Db, name: any) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {resolution:  name});
}

async function resolution_namesPrt(db: Db, name: any, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {resolution:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database, a base resolution, a width, and a size. It then finds all the structures in the
 * database that have a resolution within the width of the base resolution. It then prints out the
 * structureIds of the structures in groups of size
 * @param {Db} db - the database
 * @param {number} base - the resolution value to search around
 * @param {number} width - the width of the resolution range
 * @returns The number of structures in the database that have a resolution between base-width and
 * base+width.
 */
async function resolution_width(db: Db, base: number, width: number) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {resolution:  {$gte: base-width, $lte: base+width}});
}

async function resolution_widthPrt(db: Db, base: number, width: number, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_no_dups', {resolution:  {$gte: base-width, $lte: base+width}}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}


// Querys from pdb_seq
/**
 * It returns the sequence of a given protein.
 * @param {Db} db - Db - the database object
 * @param {string} name - The name of the PDB file.
 */
async function Seqid(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
}

/**
 * It prints out the structureIds of the protein with the given sequence.
 * @param {Db} db - the database object
 * @param {string} name - the name of the sequence
 * @returns the structureIds of the sequences that match the input sequence.
 */
async function seq_id(db: Db, name: string) {
    let data = await find.Read_Data_2(db, 'pdb_seq', {sequence:  name});
    let ids: string[] = [];
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i].structureId);
    }
    return ids;
}

async function seq_idPrt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_seq', {sequence:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It takes a database, a name, and a size as input and returns the structureIds of the
 * macromoleculeType that matches the name
 * @param {Db} db - Db - the database object
 * @param {string} name - the name of the macromolecule type
 * @returns the number of structures that have the given macromolecule type.
 */
async function mmType2(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {macromoleculeType:  name});
}

async function mmType2Prt(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_seq', {macromoleculeType:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It prints out the distinct values of the macromoleculeType field in the pdb_seq collection.
 * @param {Db} db - the database object
 * @returns the distinct values of the macromoleculeType field in the pdb_seq collection.
 */
async function mmType2All(db: Db) {
    return await find.getDistinctValues(db, 'pdb_seq', 'macromoleculeType');
}

async function mmType2AllPrt(db: Db, size: number) {
    let quit: boolean = false;
    let data = await find.getDistinctValues(db, 'pdb_seq', 'macromoleculeType');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input if insert q to quit
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It prints out the structureIds of the pdb_seq collection that have a residueCount of name.
 * @param {Db} db - Db - the database object
 * @param {string} name - the name of the database
 * @returns The structureId of the protein with the given residueCount.
 */
async function residueCount2(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {residueCount:  name});
}
    
async function residueCountPrt2(db: Db, name: string, size: number) {
    let quit: boolean = false;
    let data = await find.Read_Data_Col_2(db, 'pdb_seq', {residueCount:  name}, 'structureId');
    console.log("Size of data: " + data.length);
    for (let i = 0; i < data.length; i+=size) {
        if (i+size > data.length) {
            size = data.length - i;
        }
        for (let j = i; j < i+size; j++) {
            console.log(data[j]);
        }
        // input to continue
        await new Promise<void>(resolve => {
            rl.question('Press any key to continue or press q to quit: ',
                (answer: string) => {
                    if (answer.toLowerCase() == 'q') {
                        quit = true;
                    }
                    resolve();
                }
            );
        });
        if (quit) {
            break;
        }
    }
    rl.close();
    return 0;
}

/**
 * It returns the residue count of a given protein.
 * @param {Db} db - Db - the database connection
 * @param {string} name - the name of the pdb file
 * @returns The residue count of the structure.
 */
async function id_residueCount2(db: Db, name: string) {
    const val = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return residueCount(db, val[0].residueCount);
}

async function id_residueCountPrt2(db: Db, name: string, size: number) {
    const val = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return residueCountPrt(db, val[0].residueCount, size);
}

// Join the two tables
/**
 * It takes a database and a name, and returns a promise that resolves to an array of two arrays of
 * objects
 * @param {Db} db - the database object
 * @param {string} name - The name of the protein you want to search for.
 * @returns An array of two objects.
 */
async function joinProtein(db: Db, name: string) {
    let data = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    let data2 = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return [data, data2];
}

export { NameCondition, ConditionNames, ConditionNamesPrt, alternativeName, alternativeNamePrt, pdbName, classfNames, classfNamesPrt, ConditionNamesAll, ConditionNamesAllPrt, classfNamesAll, classfNamesAllPrt, mmType, mmTypePrt, mmTypeAll, mmTypeAllPrt, mmType2, mmType2Prt, mmType2All, mmType2AllPrt
, residueCount, residueCountPrt, residueCount2, residueCountPrt2, id_residueCount, id_residueCountPrt, id_residueCount2, id_residueCountPrt2, ph_width, ph_widthPrt, ph_names, ph_namesPrt, id_ph
, resolution_width, resolution_widthPrt, resolution_names, resolution_namesPrt, Seqid, seq_id, seq_idPrt, joinProtein, idResolution};