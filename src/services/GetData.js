const getList = (count) => {
    let values = JSON.parse(localStorage.getItem('my-list')) || [];
    if(values.length === 0){
        location.replace('/#/')
        alert("There is no item on the list")
        return
    }

    let sum = 0;
    let map = {};

    // find sum
    for (let i = 0; i < values.length; i++) {
        sum += values[i].weight
    }

    let k = parseInt(10000 / sum);
    sum = 0;

    for (let i = 0; i < values.length; i++) {
        map[i] = values[i].weight * k
        values[i].weight = map[i]
        sum += values[i].weight
    }

    console.log(sum, " uzunluğunda liste oluşturuluyor...");
    for (let val of values) {
        console.log("%", Math.floor((val.weight / sum) * 100), ": ", val.name);
    }

    // check whether is valid
    for (let val of values) {
        if (val.weight - (sum - val.weight) >= 2) {
            location.replace('/#/')
            alert("Your list is invalid")
            return
        }
    }

    let tmp = sum;
    let ans = [];
    let prev = -1;

    let list = [];
    for (let i = 0; i < values.length; i++) {
        list.push(i)
    }

    for (let i = 0; i < tmp; i++) {
        list = list.sort(() => Math.random() - 0.5)
        for (let key of list) {
            let isvalid = true;

            if (map[key] < 1 || prev === Number(key)) continue;

            for (let j = 0; j < values.length; j++) {
                if (j === Number(key)) continue;
                if (values[j].weight - (sum - 1 - values[j].weight) >= 2) {
                    isvalid = false;
                    break;
                }
            }

            if (!isvalid) continue;

            ans.push(values[key]);
            prev = Number(key);
            values[key].weight--;
            sum--;
            map[key]--;
            break;
        };
    }

    return ans.slice(0, count)
}

export default getList;