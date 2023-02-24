import React from "react";

class Profile extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            count:0,
            count2:2,
        };

        console.log("constructor");

    }

    componentDidMount(){
        console.log("component did mount can call api here...this function will call once after component render")
    }

    componentDidUpdate(){
        console.log("did update will call on every render");
    }

     updateState =() => {
        this.setState({count:5});
    }

    render(){
        {console.log("render")}
        return (
            <React.Fragment>
        <h1>Hello this profile class based component {this.state.count}</h1>
        <button onClick={this.updateState}>Update count</button>
        </React.Fragment>
        )
        
    }

}

export default Profile;