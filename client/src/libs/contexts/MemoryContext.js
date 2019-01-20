module.exports = class MemoryContext {
    constructor() {
        this.data = {};
        this.keys = [];
    }

    addStore(key, initData) {
        // TODO check if key already exist
        this.keys.push(key);
        this.data[key] = initData;
    }

    getOne(id) {}

    async getAll(key, size = 50, page = 0) {
        // TODO check if key exites in keys
        // TODO manage pagination
        return Promise.resolve(this.data[key]);
    }

    update(id, data) {
        throw 'Not implemented yet';
    }

    create(data) {
        throw 'Not implemented yet';
    }

    delete(id) {
        throw 'Not implemented yet';
    }
}