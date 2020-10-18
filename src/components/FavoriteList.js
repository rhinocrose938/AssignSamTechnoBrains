import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchId, fetchSingle} from '../ActionCreators/SearchAction';
class FavoriteList extends Component {

  fetching = (e) => {
    this.props.fetchId(e.id);
    this.props.fetchSingle(e.id);
 }

 

render() {
    
  function getDupItems(arr) {
    var result = [];
    var obj = {};
    arr.forEach(function(item) {
      if (!obj[item]) { obj[item] = 1;} 
      else { obj[item] += 1;}
    });
    for (var prop in obj) {
      if (obj[prop] >= 1) {
        result.push(prop);
      }
    }
    return result.map(Number);
  }

     const data1 = this.props.data.data;
      const data2 = this.props.arr1;
      const data3 = getDupItems(data2);

      function matchuser(data3, data1){
        return data3.map( elem => {
          const result = data1.find( e => e.id === elem)
          return result;
        })}

        const data4 = matchuser(data3, data1);
    
    return (
      <div className="container my-3 mx-auto p-3">
        <h3>Favorite List</h3>
        {data4 && data4.map( e => (
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
  data: state.data.data,
  arr1: state.data.favid
});

export default connect( mapStateToProps, {fetchId, fetchSingle})(FavoriteList);