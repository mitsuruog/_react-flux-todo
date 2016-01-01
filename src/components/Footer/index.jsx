import React, {Component, PropTypes} from 'react'
import TodoActions from '../../actions/TodoActions'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  handleClearCompleted(e) {
    TodoActions.destroyCompleted()
  }

  render() {

    const completedCount = this.props.todos.filter((todo) => todo.complete).length

    let clearCompletedButton
    if(completedCount >= 1) {
      clearCompletedButton =
        <button
          className="btn btn-info navbar-btn"
          onClick={::this.handleClearCompleted}>Clear completed ({completedCount})</button>
    }

    return (
      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 text-left">
              <span className="navbar-text">
                Total todos are {this.props.todos.length}
              </span>
            </div>
            <div className="col-xs-6 text-right">{clearCompletedButton}</div>
          </div>
        </div>
      </nav>
    )
  }

};

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Footer
