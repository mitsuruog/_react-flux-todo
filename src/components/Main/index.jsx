import React, {Component, PropTypes} from 'react'
import TodoItem from '../TodoItem'

class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {


    return (
      <section id="main">
        <ul>
          <TodoItem />
        </ul>
      </section>
    )
  }

};

Main.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Main
