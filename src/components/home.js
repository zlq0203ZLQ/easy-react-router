import React from 'react'
import {Link} from 'react-router-dom'


export default class Home extends React.Component{
    // componentDidMount(){
    //     console.log(this.props.location.query.name)
    // }
    render(){
        return(
            <div>
               <Link to={{ pathname: '/detail', state: { day: 'Friday'}}}>跳转到detail</Link>
            </div>
        )
    }
}
