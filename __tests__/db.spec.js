const db = require('../models/index');
//process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development'; // for local-dev
describe("db test", () => {
    test('"Test" exists',async ()=>{
        const test = await db.Test.findAll({});
        expect(test.length).toBeGreaterThanOrEqual(0);
    });

    test('"test2" exists',async ()=>{
        const test = await db.test2.findAll({});
        expect(test.length).toBeGreaterThanOrEqual(0);
    });
});