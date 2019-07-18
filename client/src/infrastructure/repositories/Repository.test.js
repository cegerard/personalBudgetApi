'use strict';

const Repository = require('./Repository');

describe('Repository abstraction', () => {
    const repository = new Repository('test');

    function expectToThrow(fn) {
        expect(() => {
            fn();
        }).toThrow();
    }

    it('should instanciate a test repository', () => {
        expect(repository.name).toEqual('test');
    });

    it('should throw for each abstract method', () => {
        expectToThrow(repository.create);
        expectToThrow(repository.update);
        expectToThrow(repository.delete);
        expectToThrow(repository.getAll);
        expectToThrow(repository.getById);
    });
});