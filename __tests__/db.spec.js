const db = require('../models/index');
//process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development'; // for local-dev
describe("db test", () => {
    test('"Test" exists',async ()=>{
        const test = await db.Test.findAll({});
        expect(test.length).toBeGreaterThanOrEqual(0);
    });

    test('"demo" exists',async ()=>{
        const demo = await db.demo.findAll({});
        expect(demo.length).toBeGreaterThanOrEqual(0);

    });
});