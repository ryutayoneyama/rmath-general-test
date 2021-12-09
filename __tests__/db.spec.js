const db = require('../models/index');
process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development';
describe("db test", () => {
    test('test table >= 0',async ()=>{
        const test = await db.Test.findAll({});
        expect(test.length).toBeGreaterThanOrEqual(0);
    });
});