import Carousel from '../components/Carousel'
import List from '../components/List'

const getCountFromUser = () => {
    // get count from user
    let count = prompt("Bir değer girin", "6");

    // check whether is a valid number
    if (isNaN(count)) {
        location.replace('/#/')
        alert("You need to enter a number")
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

        let btn = document.getElementById("list-carousel");
        document.querySelector("#list-carousel").addEventListener('click', async (e) => {
            console.log(btn.innerText);
            if (btn.innerText === "List") {
                btn.innerText = "Carousel";

                document.querySelector('#simulation').innerHTML = await List.render(count);
                await List.after_render();
            }
            else {
                btn.innerText = "List";

                document.querySelector('#simulation').innerHTML = await Carousel.render(count);
                await Carousel.after_render();
            }
        })

        if (btn.innerText === "List") {
            document.querySelector('#simulation').innerHTML = await Carousel.render(count);
            await Carousel.after_render();
        }
    }
}

export default Generate;