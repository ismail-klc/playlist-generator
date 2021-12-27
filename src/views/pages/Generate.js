import Carousel from '../components/Carousel'

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
        let btn = document.getElementById("list-carousel");
        document.querySelector("#list-carousel").addEventListener('click', async (e) => {
            console.log(btn.innerText);
            if (btn.innerText === "List") {
                btn.innerText = "Carousel";

                document.querySelector('#simulation').innerHTML = `
                    <div></div>
                `
            }
            else {
                btn.innerText = "List";

                document.querySelector('#simulation').innerHTML = await Carousel.render();
                await Carousel.after_render();
            }
        })

        if (btn.innerText === "List") {
            document.querySelector('#simulation').innerHTML = await Carousel.render();
            await Carousel.after_render();
        }
    }
}

export default Generate;