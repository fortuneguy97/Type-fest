import {expectType} from 'tsd';
import type {And} from '../../source/internal';

declare const never: never;

expectType<And<true, true>>(true);
expectType<And<true, false>>(false);
expectType<And<false, true>>(false);
expectType<And<false, false>>(false);
expectType<And<true, boolean>>(never);
expectType<And<false, boolean>>(false);
expectType<And<boolean, boolean>>(never);
