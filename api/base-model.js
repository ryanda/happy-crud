'use strict';

class BaseModel {
constructor(db, table, schema) {
  this.db = db;
  this.table = table;
  this.schema = schema;
  this.impl = {
  }
}

create() {
  if (this.impl.create) {
    return this.impl.create.apply(this, arguments);
  } else {
    throw Error('Implementation of "create" not exists');
  }
}

read() {
  if (this.impl.read) {
    return this.impl.read.apply(this, arguments);
  } else {
    throw Error('Implementation of "read" not exists');
  }
}


} // class BaseModel

module.exports = BaseModel;
