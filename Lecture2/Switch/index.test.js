const main = require('./index');

    test("Access Level Test", () => {
    expect(main("efgfr", 1)).toBe("Trainee Access");
    });
    test("Access Level Test", () => {
    expect(main("Manager", 1)).toBe("Full Access");
    });
    test("Access Level Test", () => {
        expect(main("Supervisor", 8)).toBe("Full Access");
    });
    test("Access Level Test", () => {
        expect(main("Supervisor", 1)).toBe("Partial Access");
    });
    test("Access Level Test", () => {
        expect(main("Associate", 2)).toBe("Limited Access");
    });
