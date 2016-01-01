import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  handleSave(text) {
    if(text.trim()) {
      TodoActions.create(text)
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Todos</a>
          </div>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <TodoTextInput
                onSave={::this.handleSave} />
            </div>
          </form>
        </div>
      </nav>
    )
  }

};

export default Header
