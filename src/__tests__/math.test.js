// src/__tests__/math.test.js

const { add, subtract } = require('../math');

describe('Math Functions', () => {
    // Tests for the add function
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('adds -1 + 1 to equal 0', () => {
        expect(add(-1, 1)).toBe(0);
    });

    test('adds 100 + 200 to equal 300', () => {
        expect(add(100, 200)).toBe(300);
    });

    // Additional tests for the add function
    test('adds 2.5 + 3.5 to equal 6', () => {
        expect(add(2.5, 3.5)).toBe(6);
    });

    test('adds -5 + -5 to equal -10', () => {
        expect(add(-5, -5)).toBe(-10);
    });

    test('adds 1.1 + 1.2 to equal 2.3', () => {
        expect(add(1.1, 1.2)).toBeCloseTo(2.3);
    });

    // Tests for the subtract function
    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('subtracts 0 - 0 to equal 0', () => {
        expect(subtract(0, 0)).toBe(0);
    });

    test('subtracts -5 - -2 to equal -3', () => {
        expect(subtract(-5, -2)).toBe(-3);
    });

    // Additional tests for the subtract function
    test('subtracts 10 - 5 to equal 5', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test('subtracts 3 - 7 to equal -4', () => {
        expect(subtract(3, 7)).toBe(-4);
    });

    test('subtracts 1.5 - 0.5 to equal 1', () => {
        expect(subtract(1.5, 0.5)).toBe(1);
    });
});

 
