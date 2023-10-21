import {expectType} from 'tsd';
import {type SetParameterType} from '../index';

function fn(_a: number, _b: string, _c: Object, ..._arguments: boolean[]) {
	return null;
}

function fnWithThis(this: Window, _a: number) {
	return null;
}

const arrowFunction = (_a: number) => null;

// Normal case
declare const test1: SetParameterType<typeof fn, {1: boolean}>;
expectType<(a: number, b: boolean, c: Object, ...args: boolean[]) => null>(test1);
test1(1, true, {}, true);

// Test multiple parameters
declare const test2: SetParameterType<typeof fn, {0: string; 2: boolean}>;
expectType<(a: string, b: string, c: boolean, ...args: boolean[]) => null>(test2);
test2('1', '2', true, true);

// Test another define way
declare const test3: SetParameterType<typeof fn, [a: string, b: boolean]>;
expectType<(a: string, b: boolean, c: Object, ...args: boolean[]) => null>(test3);
test3('1', true, {}, true);

// Test `...args` parameter
declare const test4: SetParameterType<typeof fn, {3: string}>;
expectType<(a: number, b: string, c: Object, ...args: string[]) => null>(test4);
test4(1, '1', {}, '1');

// Test arrow function
declare const test5: SetParameterType<typeof arrowFunction, {0: string}>;
expectType<(a: string) => null>(test5);

// Test the function that has `this` parameter
declare const testThis: SetParameterType<typeof fnWithThis, {0: string}>;
expectType<(this: Window, a: string) => null>(testThis);
testThis.call(window, '1');
