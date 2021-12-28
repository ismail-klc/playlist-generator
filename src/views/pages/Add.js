let Add = {
    render: async () => {
        let view = `
            <section class="form-page">
                <h1 class="header"> Add New Item </h1>
                <form id="add-form">
                    <label>Name</label>
                    <input type="text" name="name"/>

                    <label>Url</label>
                    <input type="text" name="url"/>

                    <label>Weight</label> <output id="output">5</output>
                    <input type="range" name="weight" min="1" max="10" value="5" id="weight" oninput="output.value = this.value"/>
                    

                    <button type="submit" class="add-btn">Add</button>
                </form>
            </section>
        `
        return view
    }
    , after_render: async () => {
        document.querySelector("#add-form").addEventListener('submit', (e) => {
            e.preventDefault()
            let values = JSON.parse(localStorage.getItem('my-list')) || []

            const form = new FormData(e.target);
            let data = {
                name: form.get("name"),
                url: form.get("url"),
                weight: Number(form.get("weight"))
            }
            values.push(data);

            localStorage.setItem('my-list', JSON.stringify(values));
            document.querySelector("#add-form").reset()
        })
    }

}

export default Add;