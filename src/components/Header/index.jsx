import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state ={
      isAllCompleted: false,
    }
  }

  handleSave(text) {
    if(text.trim()) {
      TodoActions.create(text)
    }
  }

  handleToggleAll(e) {
    const newState = !this.state.isAllCompleted
    TodoActions.toggleAll(newState)
    this.setState({
      isAllCompleted: newState,
    })
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input
            type="checkbox"
            checked={this.state.isAllCompleted}
            onClick={::this.handleToggleAll} />
        <TodoTextInput
          onSave={::this.handleSave} />
      </header>
    )
  }

};

export default Header
