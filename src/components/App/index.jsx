import React, {Component, PropTypes} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Main from '../Main'
import TodoStore from '../../stores/TodoStore'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = this._getTodoState()
  }

  componentDidMount() {
    TodoStore.addChangeListener(::this._onChange)
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(::this._onChange)
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main
          todos={this.state.allTodos} />
        <Footer
          todos={this.state.allTodos} />
      </div>
    )
  }

  _getTodoState() {
    return {
      allTodos: TodoStore.getAll(),
    }
  }

  _onChange() {
    this.setState(this._getTodoState())
  }

};

export default App
