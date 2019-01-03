import React from 'react'
import { Link } from 'react-router-dom'

export default class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props.location.state.day)
        
    }
    render(){
        return(
            <div>
                <Link to={{pathname:'/', query: {name: 'kk'}}}>回到home</Link>
            </div>
        )
    }
}
