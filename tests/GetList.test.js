import getList from '../src/services/GetData'

describe('GetList function', () => {
    it('The length of the returned list must be equal to given count', () => {
        let count = 5;

        localStorage.setItem('my-list', JSON.stringify([
            { name: "img1", url: "url1", weight: 1 },
            { name: "img2", url: "url2", weight: 2 },
            { name: "img3", url: "url3", weight: 3 }
        ]))

        let values = getList(count);

        expect(values.length).toEqual(count);
    });
});