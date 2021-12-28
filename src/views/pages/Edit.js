import Utils from "../../services/Utils";

const getData = () => {
    let request = Utils.parseRequestURL()
    let values = JSON.parse(localStorage.getItem('my-list'))
    let id = request.id

    if (isNaN(id) || Number(id) < 0 || Number(id) > values.length - 1) {
        alert('Page not found')
        location.replace('/#/')
        return values[0]
    }

    return values[id]
}

let Edit = {
    render: async () => {
        let data = getData()

        let view = `
        <section class="form-page">
            <h1 class="header"> Edit Item </h1>
            <form id="edit-form">
                <label>Name</label>
                <input type="text" name="name" value=${data.name} >

                <label>Url</label>
                <input type="text" name="url" value=${data.url} >

                <label>Weight</label> <output id="output">${data.weight}</output>
                <input type="range" value=${data.weight} name="weight" min="1" max="10" value="5" id="weight" oninput="output.value = this.value" >
                

                <button type="submit" class="add-btn">Save</button>
            </form>
        </section>
        `
        return view
    },
    after_render: async () => {
        let request = Utils.parseRequestURL()
        let id = request.id

        document.querySelector("#edit-form").addEventListener('submit', (e) => {
            e.preventDefault()
            let values = JSON.parse(localStorage.getItem('my-list')) || []

            const form = new FormData(e.target);
            let data = {
                name: form.get("name"),
                url: form.get("url"),
                weight: Number(form.get("weight"))
            }
            values[id] = data

            localStorage.setItem('my-list', JSON.stringify(values));
            location.replace('/#/')
        })
    }

}

export default Edit;