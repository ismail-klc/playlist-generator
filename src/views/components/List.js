import getList from '../../services/GetData'

let List = {
    render: async (count) => {
        let list = getList(count)
        
        let view = `
            <div>List görünümü</div>
        `
        return view
    },
    after_render: async () => { }

}

export default List;