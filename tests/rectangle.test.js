import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle.js";

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }

test('Should properly calculate rectangle perimeter', () =>{
    const perimeter = getRectanglePerimeter(4, 3);
    expect(perimeter).toBe(14);
});

test('Should properly calculate rectangle area', () =>{
    const area = getRectangleArea(2, 3);
    expect(area).toBe(6);
});

test('Should properly show info about rectangle', () =>{
    const logSpy = jest.spyOn(console, 'log');
    getRectangleInfo(5,8);
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 26 and the area is 40');
});

