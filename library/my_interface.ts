import { ObjectId } from "mongodb";


export interface DrugData {
    drugName: string;
    condition: string;
}

export interface pdb_no_dups {
    structureId: string;
    classification: string;
    experimentalTechnique: string;
    macromoleculeType: string;
    residueCount: number;
    resolution: number;
    structureMolecularWeight: number;
    crystallizationMethod: string;
    densityMatthews: number;
    densityPercentSol: number;
    pdbxDetails: string;
    phValue: number;
    publicationYear: number;
}

export interface pdb_seq {
    structureId: string;
    chainId: string;
    sequence: string;
    residueCount: number;
    macromoleculeType: string;
}

export interface DrugData_id {
    _id: ObjectId;
    drugName: string;
    condition: string;
}

export interface pdb_no_dups_id {
    _id: ObjectId;
    structureId: string;
    classification: string;
    experimentalTechnique: string;
    macromoleculeType: string;
    residueCount: number;
    resolution: number;
    structureMolecularWeight: number;
    crystallizationMethod: string;
    densityMatthews: number;
    densityPercentSol: number;
    pdbxDetails: string;
    phValue: number;
    publicationYear: number;
}

export interface pdb_seq_id {
    _id: ObjectId;
    structureId: string;
    chainId: string;
    sequence: string;
    residueCount: number;
    macromoleculeType: string;
}