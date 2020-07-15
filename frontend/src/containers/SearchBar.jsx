import React, {Component} from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'




class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
    };
    this.timerId=0;
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value 
    });

    // clear timer and start new one
    clearTimeout(this.timerId);
    if(this.state.value.length > 2) {
      this.timerId = setTimeout(this.changeSearchValue, 300);
    }
  };

  changeSearchValue = () => {
    return this.handleSubmit(this.state.value);
  }

  handleSubmit = (searchText) => {
    if (this.state.value.length > 2) {
      this.props.dispatch(push('/search/' + searchText));
    }
  };
  keyPress = (event) => {
    if(event.keyCode === 13){
       this.onChange(event);
    }
 }

  render(){
    return (
      <div className="header-search">
      <input type="text" className="input" onChange={this.onChange} onKeyDown={this.keyPress} placeholder="Search..." />
      </div>
    );
  }
}

export default connect()(SearchBar);
