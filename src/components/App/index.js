import React, {Component, PropTypes} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Main from '../Main'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // TODO TodoStoreにイベントリスナを登録する
  }

  componentWillUnmount() {
    // TODO TodoStoreからイベントリスナを削除する
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

  _onChange() {

  }

};

export default App
