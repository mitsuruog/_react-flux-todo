import React, {Component, PropTypes} from 'react'

class TodoTextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      e.preventDefault()
      this.props.onSave(text)
      this.setState({text: ''})
    }
  }

  render() {
    return (<input
      type="text"
      className="form-control"
      placeholder="What needs to be done?"
      id={this.props.id}
      value={this.state.text}
      onChange={::this.handleChange}
      onKeyDown={::this.handleSubmit} />)
  }

};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  value: PropTypes.string,
  id: PropTypes.string
};

export default TodoTextInput
