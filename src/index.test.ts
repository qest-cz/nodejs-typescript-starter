import './index';
import { find } from 'lodash';
import { foo, bar } from './foo';
import { foo2, bar2 } from './bar';

describe('Main test', () => {
    it('sohuld have env variable set', () => {
        expect(process.env.APP_TEST_ENV).toMatch('helloWorldTest');
        expect([foo, bar, foo2, bar2]).toBeTruthy();
        console.log(find);
    });
});
