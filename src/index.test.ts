import './index';

describe('Main test', () => {
    it('sohuld have env variable set', () => {
        expect(process.env.APP_TEST_ENV).toMatch('helloWorldTest');
    });
});
