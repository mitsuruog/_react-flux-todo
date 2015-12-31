import React, {Component, PropTypes} from 'react'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        footer {this.props.todos.length}
      </footer>
    )
  }

};

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Footer
