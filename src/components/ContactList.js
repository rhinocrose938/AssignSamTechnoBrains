import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from './Pagination';

import { fetchTerm, fetchId, fetchSingle} from '../ActionCreators/SearchAction';

class ContactList extends Component {

  constructor(props) {
    super();
    this.state = {currentPage: 1, postsPerPage: 2}
  }
    
componentDidMount() { this.props.fetchTerm(); }

fetching = (e) => {
   this.props.fetchId(e.id);
   this.props.fetchSingle(e.id);
}
paginate = pageNumber => {this.setState({currentPage: pageNumber})};
 
render() {
    
    const requiredArray = this.props.data.data;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = requiredArray && requiredArray.slice(indexOfFirstPost, indexOfLastPost);
    
    return (
      <div className="container my-3 mx-auto p-3">
        <h3>Contact List</h3>
        {currentPosts && currentPosts.map( e => (
          <div key = {e.id} className="card m-3" style={{backgroundColor: 'DarkKhaki'}}>
            <div className= 'card-body d-inline-flex flex-row justify-content-around align-items-center'>
            <img className= 'rounded-circle' src = {e.avatar} alt= "pic" width="75px" height="75px" />
            <h6 className="text-white">Email: {e.email}</h6>
           <Link to = {`/${e.id}`}><h6>User: {e.first_name} {e.last_name}</h6></Link>
           <Link to = '/single'><button className="btn btn-secondary" onClick={this.fetching.bind(this, e)}>View Details</button></Link>
            </div>
            
          </div>
        ))}
        <Pagination postsPerPage={this.state.postsPerPage} totalPosts={requiredArray && requiredArray.length}  paginate={this.paginate}/>
     </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.data
});

export default connect( mapStateToProps, { fetchTerm, fetchId, fetchSingle } )(ContactList);
