import React from 'react';

class UserDetails extends React.Component {
    
     constructor(props) {
       super()
       this.state = { userDetails: {}, adDetails: {}}
     }


     componentDidMount() {
          const  fetchData = async() => {
          const response = await fetch(`https://reqres.in/api/users/${this.props.match.params.id}`);
          const data = await response.json();
          this.setState({ userDetails: data.data, adDetails: data.ad});
        }
        fetchData();
        
      }

    render() {  
       
      
       return (

        <div className= 'container'>
          <h3>User Details Page</h3>
        <div className="card mb-5 p-3 text-white" style={{backgroundColor: 'DarkKhaki'}}>
         <div className='card-body d-flex flex-column justify-content-around align-items-center'>
        <img className='rounded-circle' src = {this.state.userDetails.avatar} alt= "pic" />
        <hr/>
        <h6 className='m-1 p-1'>User: {this.state.userDetails.first_name} {this.state.userDetails.last_name}</h6>
        <h6 className='m-1 p-1'>Email: {this.state.userDetails.email}</h6>
        </div>
        <hr/>
        <div>
          <h6>Company: {this.state.adDetails.company}</h6>
           <a  className ='m-3' href={this.state.adDetails.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
           <p>Content: {this.state.adDetails.text}</p>
        </div>
        </div>
        </div>
    )
  }
}

  
  export default UserDetails;

