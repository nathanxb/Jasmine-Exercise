describe('math tests', function () {
    it('should calculate the monthly rate correctly', function () {
        const values = {
            amount: 12345,
            years: 6,
            rate: 7.8
        };
        expect(calculateMonthlyPayment(values)).toEqual('215.24')
    });
})
describe('display tests', () => {
    it("should return a result with 2 decimal places", function () {
        const values = {
            amount: 10043,
            years: 8,
            rate: 5.8
        };
        expect(calculateMonthlyPayment(values)).toEqual('131.00')
    });
})

describe('incomplete form tests', () => {
    it('should indicate something is missing if NaN', () => {
        const values = {
            amount: 12345,
            years: 5,
            rate: 0
        };
        expect(calculateMonthlyPayment(values)).toBe('NaN');
    });

    it('should indidcate incorrect input if NaN', () => {
        const values = {
            amount: 12345,
            years: 'six',
            rate: 5.8
        };
        expect(calculateMonthlyPayment(values)).toBe('NaN');
    });
})
