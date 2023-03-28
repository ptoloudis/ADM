"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPro = exports.seq_idStr = exports.seq_id = exports.Seqid = exports.resolution_namesStr = exports.resolution_names = exports.resolution_widthStr = exports.resolution_width = exports.id_ph = exports.ph_namesStr = exports.ph_names = exports.ph_widthStr = exports.ph_width = exports.id_residueCountStr2 = exports.id_residueCount2 = exports.id_residueCountStr = exports.id_residueCount = exports.residueCountStr2 = exports.residueCount2 = exports.residueCountStr = exports.residueCount = exports.mmType2AllStr = exports.mmType2All = exports.mmType2Str = exports.mmType2 = exports.mmTypeAllStr = exports.mmTypeAll = exports.mmTypeStr = exports.mmType = exports.classfNamesAllStr = exports.classfNamesAll = exports.ConditionNamesAllStr = exports.ConditionNamesAll = exports.classfNamesStr = exports.classfNames = exports.pdbName = exports.alternativeNameStr = exports.alternativeName = exports.ConditionNamesStr = exports.ConditionNames = exports.NameCondition = void 0;
var find = require("./find");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function from Drugs Database
function NameCondition(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_Col_2(db, 'Drugs', { drugName: name }, 'condition')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.NameCondition = NameCondition;
function ConditionNames(db, condition) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_Col_2(db, 'Drugs', { condition: condition }, 'drugName')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.ConditionNames = ConditionNames;
function ConditionNamesStr(db, condition, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'Drugs', { condition: condition }, 'drugName')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.ConditionNamesStr = ConditionNamesStr;
function ConditionNamesAll(db) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.getDistinctValues(db, 'Drugs', 'condition')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.ConditionNamesAll = ConditionNamesAll;
function ConditionNamesAllStr(db, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.getDistinctValues(db, 'Drugs', 'condition')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.ConditionNamesAllStr = ConditionNamesAllStr;
function alternativeName(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var con, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_Col_2(db, 'Drugs', { drugName: name }, 'condition')];
                case 1:
                    con = _a.sent();
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'Drugs', { condition: con[0] }, 'drugName')];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.alternativeName = alternativeName;
function alternativeNameStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, alternativeName(db, name)];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        if (data[j] == name) {
                            console.log("Same name: " + data[j]);
                            continue;
                        }
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.alternativeNameStr = alternativeNameStr;
// Querys from pdb_no_dups
function pdbName(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.pdbName = pdbName;
function classfNames(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { classification: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.classfNames = classfNames;
function classfNamesStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { "classification": name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.classfNamesStr = classfNamesStr;
function classfNamesAll(db) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.getDistinctValues(db, 'pdb_no_dups', 'classification')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.classfNamesAll = classfNamesAll;
function classfNamesAllStr(db, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.getDistinctValues(db, 'pdb_no_dups', 'classification')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input if insert q to quit
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input if insert q to quit
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.classfNamesAllStr = classfNamesAllStr;
function mmType(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { macromoleculeType: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.mmType = mmType;
function mmTypeStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { macromoleculeType: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.mmTypeStr = mmTypeStr;
function mmTypeAll(db) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.getDistinctValues(db, 'pdb_no_dups', 'macromoleculeType')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.mmTypeAll = mmTypeAll;
function mmTypeAllStr(db, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.getDistinctValues(db, 'pdb_no_dups', 'macromoleculeType')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input if insert q to quit
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input if insert q to quit
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.mmTypeAllStr = mmTypeAllStr;
function residueCount(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { residueCount: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.residueCount = residueCount;
function residueCountStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { residueCount: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.residueCountStr = residueCountStr;
function id_residueCount(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, residueCount(db, val[0].residueCount)];
            }
        });
    });
}
exports.id_residueCount = id_residueCount;
function id_residueCountStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, residueCountStr(db, val[0].residueCount, size)];
            }
        });
    });
}
exports.id_residueCountStr = id_residueCountStr;
function id_ph(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, val[0].phValue];
            }
        });
    });
}
exports.id_ph = id_ph;
function ph_names(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { phValue: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.ph_names = ph_names;
function ph_namesStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { phValue: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.ph_namesStr = ph_namesStr;
function ph_width(db, base, width) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { phValue: { $gte: base - width, $lte: base + width } })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.ph_width = ph_width;
function ph_widthStr(db, base, width, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { phValue: { $gte: base - width, $lte: base + width } }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.ph_widthStr = ph_widthStr;
function idResolution(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, val[0].resolution];
            }
        });
    });
}
function resolution_names(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { resolution: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.resolution_names = resolution_names;
function resolution_namesStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { resolution: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.resolution_namesStr = resolution_namesStr;
function resolution_width(db, base, width) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { resolution: { $gte: base - width, $lte: base + width } })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.resolution_width = resolution_width;
function resolution_widthStr(db, base, width, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_no_dups', { resolution: { $gte: base - width, $lte: base + width } }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.resolution_widthStr = resolution_widthStr;
// Querys from pdb_seq
function Seqid(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { structureId: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.Seqid = Seqid;
function seq_id(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var data, ids, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { sequence: name })];
                case 1:
                    data = _a.sent();
                    ids = [];
                    for (i = 0; i < data.length; i++) {
                        ids.push(data[i].structureId);
                    }
                    return [2 /*return*/, ids];
            }
        });
    });
}
exports.seq_id = seq_id;
function seq_idStr(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_seq', { sequence: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.seq_idStr = seq_idStr;
function mmType2(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { macromoleculeType: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.mmType2 = mmType2;
function mmType2Str(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_seq', { macromoleculeType: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.mmType2Str = mmType2Str;
function mmType2All(db) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.getDistinctValues(db, 'pdb_seq', 'macromoleculeType')];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.mmType2All = mmType2All;
function mmType2AllStr(db, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.getDistinctValues(db, 'pdb_seq', 'macromoleculeType')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input if insert q to quit
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input if insert q to quit
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.mmType2AllStr = mmType2AllStr;
function residueCount2(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { residueCount: name })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.residueCount2 = residueCount2;
function residueCountStr2(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var quit, data, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    quit = false;
                    return [4 /*yield*/, find.Read_Data_Col_2(db, 'pdb_seq', { residueCount: name }, 'structureId')];
                case 1:
                    data = _a.sent();
                    console.log("Size of data: " + data.length);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < data.length)) return [3 /*break*/, 5];
                    if (i + size > data.length) {
                        size = data.length - i;
                    }
                    for (j = i; j < i + size; j++) {
                        console.log(data[j]);
                    }
                    // input to continue
                    return [4 /*yield*/, new Promise(function (resolve) {
                            rl.question('Press any key to continue or press q to quit: ', function (answer) {
                                if (answer.toLowerCase() == 'q') {
                                    quit = true;
                                }
                                resolve();
                            });
                        })];
                case 3:
                    // input to continue
                    _a.sent();
                    if (quit) {
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    i += size;
                    return [3 /*break*/, 2];
                case 5:
                    rl.close();
                    return [2 /*return*/, 0];
            }
        });
    });
}
exports.residueCountStr2 = residueCountStr2;
function id_residueCount2(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, residueCount(db, val[0].residueCount)];
            }
        });
    });
}
exports.id_residueCount2 = id_residueCount2;
function id_residueCountStr2(db, name, size) {
    return __awaiter(this, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { structureId: name })];
                case 1:
                    val = _a.sent();
                    return [2 /*return*/, residueCountStr(db, val[0].residueCount, size)];
            }
        });
    });
}
exports.id_residueCountStr2 = id_residueCountStr2;
// Join the two tables
function joinPro(db, name) {
    return __awaiter(this, void 0, void 0, function () {
        var data, data2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, find.Read_Data_2(db, 'pdb_no_dups', { structureId: name })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, find.Read_Data_2(db, 'pdb_seq', { structureId: name })];
                case 2:
                    data2 = _a.sent();
                    return [2 /*return*/, [data, data2]];
            }
        });
    });
}
exports.joinPro = joinPro;
