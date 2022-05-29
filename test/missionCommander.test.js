const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        nameTest = "insert_name"
        const myMissionCommander = new MissionCommander(nameTest)
        expect(myMissionCommander.name).toBe(nameTest);
    });
    test("2) Testing symbols as name", () => {
        const myMissionCommander = new MissionCommander("[]")
        expect(myMissionCommander.name).toBe("[]")
    });
})