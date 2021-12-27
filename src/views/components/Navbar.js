let Navbar = {
    render: async () => {
        let view = `
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <a href="/#/" id="header">PlayList</a>  
                <div>
                    <a href="/#/generate" id="generate">Generate</a>
                    <a href="/#/add" id="add">Add New Item</a>
                </div>  
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;