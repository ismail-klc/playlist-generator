import Carousel from '../components/Carousel'
import List from '../components/List'
import getList from '../../services/GetData'

const getCountFromUser = () => {
    // get count from user
    let count = prompt("Bir değer girin", "6");

    // check whether is a valid number
    if (isNaN(count)) {
        location.replace('/#/')
        alert("You need to enter a valid number")
        return
    }

    return count
}

let Generate = {
    render: async () => {
        let view = `
        <div>
            <div style="margin-bottom: 50px; margin-top:20px">
                <button id="list-carousel">List</button>
            </div>
            <div id="simulation"></div>
        </div>
        `

        return view
    }
    , after_render: async () => {
        let count = getCountFromUser()
        let list = getList(count) || []

        let btn = document.getElementById("list-carousel");
        document.querySelector("#list-carousel").addEventListener('click', async (e) => {
            if (btn.innerText === "List") {
                btn.innerText = "Carousel";

                document.querySelector('#simulation').innerHTML = await List.render(list);
                await List.after_render();
            }
            else {
                btn.innerText = "List";

                document.querySelector('#simulation').innerHTML = await Carousel.render(list);
                await Carousel.after_render();
            }
        })

        if (btn.innerText === "List" && list.length > 0) {
            document.querySelector('#simulation').innerHTML = await Carousel.render(list);
            await Carousel.after_render();
        }
    }
}

export default Generate;