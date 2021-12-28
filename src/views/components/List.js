let List = {
    render: async (list) => {
        let view = `
            <ul>
                ${list.map((a, index) =>
                `
                    <li class="myList">
                        <img src=${a.url} >
                        <div class="text">${a.name}</div>
                    </li>
                    `
                ).join('\n ')
            }
            </ul>
        `
        return view
    },
    after_render: async () => { }

}

export default List;