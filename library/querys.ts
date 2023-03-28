import { Db } from 'mongodb';
import * as find from './find';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function from Drugs Database
async function NameCondition(db: Db, name:string){
    return await find.Read_Data_Col_2(db, 'Drugs', {drugName: name}, 'condition');
}

async function ConditionNames(db: Db, condition: string) {
    return await find.Read_Data_Col_2(db, 'Drugs', {condition: condition}, 'drugName');
}

async function ConditionNamesStr(db: Db, condition: string, size: number) {
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

async function ConditionNamesAll(db: Db) {
    return await find.getDistinctValues(db, 'Drugs', 'condition');
}

async function ConditionNamesAllStr(db: Db, size: number) {
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

async function alternativeName(db: Db, name: string) {
    // TODO: check why the function not end the program
    let con = await find.Read_Data_Col_2(db, 'Drugs', {drugName: name}, 'condition');
    let data = await find.Read_Data_Col_2(db, 'Drugs', {condition: con[0]}, 'drugName');
    return data;
}

async function alternativeNameStr(db: Db, name: string, size: number) {
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
async function pdbName(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {structureId: name});
}

async function classfNames(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {classification:  name});
}

async function classfNamesStr(db: Db, name: string, size: number) {
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

async function classfNamesAll(db: Db) {
    return await find.getDistinctValues(db, 'pdb_no_dups', 'classification');
}

async function classfNamesAllStr(db: Db, size: number) {
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

async function mmType(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {macromoleculeType:  name});
}

async function mmTypeStr(db: Db, name: string, size: number) {
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

async function mmTypeAll(db: Db) {
    return await find.getDistinctValues(db, 'pdb_no_dups', 'macromoleculeType');
}

async function mmTypeAllStr(db: Db, size: number) {
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

async function residueCount(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {residueCount:  name});
}
    
async function residueCountStr(db: Db, name: string, size: number) {
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

async function id_residueCount(db: Db, name: string) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return residueCount(db, val[0].residueCount);
}

async function id_residueCountStr(db: Db, name: string, size: number) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return residueCountStr(db, val[0].residueCount, size);
}

async function id_ph(db: Db, name: any) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return val[0].phValue;
}

async function ph_names(db: Db, name: any) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {phValue:  name});
}

async function ph_namesStr(db: Db, name: any, size: number) {
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


async function ph_width(db: Db, base: number, width: number) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {phValue:  {$gte: base-width, $lte: base+width}});
}

async function ph_widthStr(db: Db, base: number, width: number, size: number) {
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

async function idResolution(db: Db, name: any) {
    const val = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    return val[0].resolution;
}

async function resolution_names(db: Db, name: any) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {resolution:  name});
}

async function resolution_namesStr(db: Db, name: any, size: number) {
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

async function resolution_width(db: Db, base: number, width: number) {
    return await find.Read_Data_2(db, 'pdb_no_dups', {resolution:  {$gte: base-width, $lte: base+width}});
}

async function resolution_widthStr(db: Db, base: number, width: number, size: number) {
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
async function Seqid(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
}

async function seq_id(db: Db, name: string) {
    let data = await find.Read_Data_2(db, 'pdb_seq', {sequence:  name});
    let ids: string[] = [];
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i].structureId);
    }
    return ids;
}

async function seq_idStr(db: Db, name: string, size: number) {
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

async function mmType2(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {macromoleculeType:  name});
}

async function mmType2Str(db: Db, name: string, size: number) {
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

async function mmType2All(db: Db) {
    return await find.getDistinctValues(db, 'pdb_seq', 'macromoleculeType');
}

async function mmType2AllStr(db: Db, size: number) {
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

async function residueCount2(db: Db, name: string) {
    return await find.Read_Data_2(db, 'pdb_seq', {residueCount:  name});
}
    
async function residueCountStr2(db: Db, name: string, size: number) {
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

async function id_residueCount2(db: Db, name: string) {
    const val = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return residueCount(db, val[0].residueCount);
}

async function id_residueCountStr2(db: Db, name: string, size: number) {
    const val = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return residueCountStr(db, val[0].residueCount, size);
}

// Join the two tables
async function joinPro(db: Db, name: string) {
    let data = await find.Read_Data_2(db, 'pdb_no_dups', {structureId:  name});
    let data2 = await find.Read_Data_2(db, 'pdb_seq', {structureId:  name});
    return [data, data2];
}

export { NameCondition, ConditionNames, ConditionNamesStr, alternativeName, alternativeNameStr, pdbName, classfNames, classfNamesStr, ConditionNamesAll, ConditionNamesAllStr, classfNamesAll, classfNamesAllStr, mmType, mmTypeStr, mmTypeAll, mmTypeAllStr, mmType2, mmType2Str, mmType2All, mmType2AllStr
, residueCount, residueCountStr, residueCount2, residueCountStr2, id_residueCount, id_residueCountStr, id_residueCount2, id_residueCountStr2, ph_width, ph_widthStr, ph_names, ph_namesStr, id_ph
, resolution_width, resolution_widthStr, resolution_names, resolution_namesStr, Seqid, seq_id, seq_idStr, joinPro};