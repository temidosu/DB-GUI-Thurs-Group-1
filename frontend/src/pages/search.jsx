import React from 'react'; 

export class Search extends React.Component{

    state = {
        roleId: localStorage.getItem("roleID"), 
        searchFor: "",
        zipCode: ""
    }

    render() 
    {
        return <>
            <div class = "container m-3 mx-auto">
            <br></br>
            <div class = "row">
                 <div class = "col-2"></div>
                 <div class = "col-5 m-0 p-0">
                 <input class="form-control" type="search" placeholder="I'm looking for..." aria-label="Search"></input>
                 </div>
                 <div class = "col-1.5 m-0 p-0">
                 <select id="searchFor"
                                name="searchFor"
                                className="form-control"
                                value={this.state.searchFor}
                                onChange={ e => this.setState({ searchFor: e.target.value }) }>
                                <option></option>
                                {
                                    ["workers", "projects", "contractors"].map(x => <option key={ x.index } value={ x }>{ x }</option>)
                                }
                 </select>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <input class="form-control" type="text" placeholder="ZipCode" aria-label="ZipCode"></input>
                 </div>
                 <div class = "col-1 m-0 p-0">
                 <button class="btn btn-outline-success my-2 my-sm-0 ml-0" type="submit">Search</button>
                 </div>
            </div>
            </div>
        </>
    }
}