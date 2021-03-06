import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';


class Avatar extends Component{

        constructor(){
            super ();
            this.state ={
                name:"Welcome to mnsking world "
            }
    }
    namechange(){
        this.setState({
                name: "Thanks for visiting us"
        })
    }
    render(){

    const avaratlistarray =[
        {
        id:1,
        name : "Manish Singh",
        work : "Frontend  Developer"
        
    },
    {
        id:2,
        name : "Vishvjeet",
        work : "Backend Developer"
    },
    {
        id:3,
        name : "Killer Ambuj",
        work : "Software Developer"
    },
    {
        id:4,
        name : "Abhijeet",
        work : "Datascience Developer"
    }
]
const arrayavaratcard = avaratlistarray.map( (avatarcard, i) =>{
    return <Avatarlist key={i} id={avaratlistarray[i].name}
                             name={avaratlistarray[i].name}
                             work={avaratlistarray[i].work}/>
})
    return(
    <div className="mainpage">
        <h1>  {this.state.name} </h1>
        {arrayavaratcard}
         <button onClick= {() => this.namechange() }>Subscribe</button>
        </div> 
        
        )

}

}

export default Avatar;