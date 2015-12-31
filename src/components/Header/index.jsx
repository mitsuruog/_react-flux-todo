import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  handleSave(text) {
    if(text.trim()) {
      TodoActions.create(text)
    }
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <TodoTextInput
          onSave={::this.handleSave} />
      </header>
    )
  }

};

export default Header
