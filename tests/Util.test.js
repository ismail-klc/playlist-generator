import Utils from '../src/services/Utils'

describe('parseRequestURL', () => {
    it('should return parsed request', () => {
        let resource = 'res';
        let id = 'idd';
        let verb = 'verbb';
        window.location.hash = `adress/${resource}/${id}/${verb}`;

        expect(Utils.parseRequestURL()).toEqual({
            resource,
            id,
            verb
        })
    });
});