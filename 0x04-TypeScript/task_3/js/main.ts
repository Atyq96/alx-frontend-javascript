/// <reference path="./crud.d.ts" />

import { RowID, RowElement  } from "./interface.js";
import * as CRUD from "./crud.js";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);