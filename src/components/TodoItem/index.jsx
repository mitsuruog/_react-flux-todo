import React, {Component, PropTypes} from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        {this.props.todo.text}
      </li>
    )
  }

};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem
