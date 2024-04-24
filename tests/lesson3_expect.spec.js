import {expect, test} from '@playwright/test';

test.describe('SOME THINGS', () => {
    test('Проверяем, что 2+2 == 4', () => {
        expect(2 + 2).toEqual(4);
    });

    test('Проверяем, что строка содержит `Abc`', () => {
        expect("Test" + "Abc").toContain("Abc");
    })

    test('Проверяем, что длина (length) массива == 3', () => {
        expect([1, 2, 3]).toHaveLength(3);
    })
});