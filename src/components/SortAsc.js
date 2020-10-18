import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchId, fetchSingle} from '../ActionCreators/SearchAction';
class SortAsc extends Component {

  fetching = (e) => {
    this.props.fetchId(e.id);
    this.props.fetchSingle(e.id);
 }

    render() {  
       
        function compare(a, b) {
            const bandA = a.first_name
            const bandB = b.first_name
            let comparison = 0;
            if (bandA > bandB) {
              comparison = 1;
            } else if (bandA < bandB) {
              comparison = -1;
            }
            return comparison;
          }
         
          const requiredArray = (this.props.data.data ) ? this.props.data.data.sort(compare) : null;
      return (
      <div className="container my-3 mx-auto p-3">
        <h3>Contact List A-Z</h3>
          {requiredArray && requiredArray.map( e => (
          <div key = {e.id} className="card m-3 text-white" style={{backgroundColor: 'DarkKhaki'}}>
            <div className= 'card-body d-inline-flex flex-row justify-content-around align-items-center'>
            <img className= 'rounded-circle' src = {e.avatar} alt= "pic" width="75px" height="75px" />
            <h6>Email: {e.email}</h6>
            <Link to = {`/${e.id}`}><h6>User: {e.first_name} {e.last_name}</h6></Link>
           <Link to = '/single'><button className="btn btn-secondary" onClick={this.fetching.bind(this, e)}>View Details</button></Link>
            </div>
          </div>
        ))}
     </div>
    )
  }
}

  


const mapStateToProps = state => ({
  data: state.data.data
});

export default connect( mapStateToProps, { fetchId, fetchSingle } )(SortAsc);