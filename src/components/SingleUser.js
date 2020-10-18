import React from 'react';
import { connect } from 'react-redux';
import { favId, remId } from '../ActionCreators/SearchAction';
class SingleUser extends React.Component {
    
    favor = (id) => { this.props.favId(id)}

    remov = (id) => { this.props.remId(id)}

    render() {  
      const requiredObj1 = (this.props.User.ad ) ? this.props.User.ad : null;
      const requiredObj2 = (this.props.User.data ) ? this.props.User.data : null;
       
      
      return (
   
        <div className= 'container pb-5 mt-3'>
        <div className="card mb-3 p-3 text-white" style = {{backgroundColor: "DarkSeaGreen"}}>
         <div className= 'card-body d-flex flex-column justify-content-around align-items-center'>
        <img className= 'rounded-circle' src = {requiredObj2 && requiredObj2.avatar} alt= "pic" />
        <hr/>
        <button className="btn btn-primary m-1" onClick={this.favor.bind(this, requiredObj2 && requiredObj2.id)}>Add To Favorites</button>
        <hr/>
        <h6 className="m-1">User: {requiredObj2 && requiredObj2.first_name} {requiredObj2 && requiredObj2.last_name}</h6>
        <h6 className="m-1">Email: {requiredObj2 && requiredObj2.email}</h6>
        <hr/>
        <button className='btn btn-primary mt-1' onClick={this.remov.bind(this, requiredObj2 && requiredObj2.id)}>Remove favorites</button>
        </div>
        <hr/>
        <div>
          <h6>Company: {requiredObj1 && requiredObj1.company}</h6>
           <a  className = 'm-3' href={requiredObj1 && requiredObj1.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
           <p className="p-3">Content: {requiredObj1 && requiredObj1.text}</p>
        </div>
        </div>
        </div>
    )
  }
}

  
const mapStateToProps = state => ({
    User: state.data.user,
    fav: state.data.favid
  });
  
  export default connect(mapStateToProps, { favId, remId })(SingleUser);
