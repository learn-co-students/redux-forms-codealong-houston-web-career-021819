import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = (e) =>{
    this.setState({text: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.text)
    console.log(this.props)
  }
  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type = "text" onChange = {this.handleChange}/>
          </p>
          <button type = "submir"> Submit </button>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = {
    addTodo: (formData) => ({type: 'ADD_TODO', data:formData})
}

export default connect(null, mapDispatchToProps)(CreateTodo); // or export default connect()(CreateTodo); Without any argument, connect will return dispatch as a prop to the component we wrap
