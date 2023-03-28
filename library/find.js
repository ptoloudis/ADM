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
exports.getDistinctValues = exports.Read_Data_Col_3 = exports.Read_Data_Col_2 = exports.Read_Data_Col = exports.Read_Data_3 = exports.Read_Data_2 = exports.Read_Data = void 0;
var process_1 = require("process");
function Read_Data(db, collectionName) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, collection.find({}).toArray()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data = Read_Data;
function Read_Data_2(db, collectionName, query) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, data, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, collection.find(query).toArray()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    err_2 = _a.sent();
                    console.error(err_2);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data_2 = Read_Data_2;
function Read_Data_3(db, collectionName, query, projection) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, data, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, collection.find(query, projection).toArray()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    err_3 = _a.sent();
                    console.error(err_3);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data_3 = Read_Data_3;
function Read_Data_Col(db, collectionName, col) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, rtn_1, data, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    rtn_1 = [];
                    return [4 /*yield*/, collection.find({}).toArray()];
                case 2:
                    data = _a.sent();
                    data.forEach(function (item) {
                        rtn_1.push(item[col]);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _a.sent();
                    console.error(err_4);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data_Col = Read_Data_Col;
function Read_Data_Col_2(db, collectionName, query, col) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, rtn_2, data, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    rtn_2 = [];
                    return [4 /*yield*/, collection.find(query).toArray()];
                case 2:
                    data = _a.sent();
                    data.forEach(function (item) {
                        rtn_2.push(item[col]);
                    });
                    return [2 /*return*/, rtn_2];
                case 3:
                    err_5 = _a.sent();
                    console.error(err_5);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data_Col_2 = Read_Data_Col_2;
function Read_Data_Col_3(db, collectionName, query, projection, col) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, rtn_3, data, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    rtn_3 = [];
                    return [4 /*yield*/, collection.find(query, projection).toArray()];
                case 2:
                    data = _a.sent();
                    data.forEach(function (item) {
                        rtn_3.push(item[col]);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_6 = _a.sent();
                    console.error(err_6);
                    (0, process_1.exit)(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.Read_Data_Col_3 = Read_Data_Col_3;
function getDistinctValues(db, collectionName, query) {
    return __awaiter(this, void 0, void 0, function () {
        var collection, distinctValues, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    collection = db.collection(collectionName);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, collection.distinct(query)];
                case 2:
                    distinctValues = _a.sent();
                    return [2 /*return*/, distinctValues];
                case 3:
                    err_7 = _a.sent();
                    console.error(err_7);
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getDistinctValues = getDistinctValues;
