const getList = () => {
    return JSON.parse(localStorage.getItem('my-list')) || [];
}



let Home = {
    render: async () => {
        let list = getList()

        let view = `
            <section>
                <table id="playlist">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Actions</th>
                    </tr>
                    ${list.map((a, index) =>
                        `<tr>
                            <td>${index + 1}.</td>
                            <td>${a.name}</td>
                            <td>Weight: ${a.weight}</td>
                            <td>
                                <a href="#/edit/${index}" class="edit-btn" data-arg1=${index}>Edit</a>
                                <button class="delete-btn" data-arg1=${index}>Delete</button>
                            </td>
                        </tr>`
                        ).join('\n ')
            }
                    
                </table>
                
            </section>
        `
        return view
    }
    , after_render: async () => {
        document.querySelectorAll(".delete-btn")
            .forEach(btn => btn.addEventListener("click", e => {
                const index = e.target.getAttribute('data-arg1');
                let values = JSON.parse(localStorage.getItem('my-list')) || []
                
                values.splice(index,1)

                localStorage.setItem('my-list', JSON.stringify(values))
                location.reload()
        }));
    }
}

export default Home;