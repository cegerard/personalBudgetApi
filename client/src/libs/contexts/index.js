const { context } = require('../../../config');
const MemoryContext = require('./MemoryContext');

let storageContext;

switch (context) {
    default:
        storageContext = new MemoryContext()
        break;
}


module.exports = storageContext;
