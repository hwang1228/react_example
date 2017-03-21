import React, { Component } from 'react';
import 'babel-polyfill';

class RepoDetails extends Component {

  componentDidMount() {
    console.log("#DidMount : " + this.props.params.repo_name);
  }

  componentWillReceiveProps(props) {
    console.log("#WillReceive : " + props.params.repo_name);
  }

  renderRepository() {
    let repository = this.props.repositories.find((repo)=>repo.name === this.props.params.repo_name);
    if (repository) {
        let stars = repository.stargazers_count;
        return(
        <div>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <span> star count : {stars}</span>
        </div>
        );
    } else {
        this.props.router.push('/error');
        return <h4>repo not exist!!</h4>
    }

  }

  render() {
    if(this.props.repositories.length > 0 ){
      return this.renderRepository();
    } else {
      return <h4>Loading...</h4>;
    }
  }
}

export default RepoDetails;
