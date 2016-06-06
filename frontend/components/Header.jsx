var React = require('react');
var Link = require('react-router').Link;
var Modal = require('react-modal');

var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');

var LoginForm = require('./LoginForm');
var SignupForm = require('./SignupForm');
var Dashboard = require('./Dashboard');
var ShelvesView = require('./ShelvesView');
var Homepage = require('./Homepage');
var BookForm = require('./BookForm');

var modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    // position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    transform                  : 'translateX(-50%) translateY(-50%)',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    width                      : '400px',
    height                     : '250px'
  }
};

var Header = React.createClass({

  getInitialState: function () {
    return ({ modalOpen: false });
  },

  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
    SessionApiUtil.fetchCurrentUser();
  },

  __handleOpenModal: function () {
    this.setState({ modalOpen: true });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  greeting: function(){
  	return (
  		<div className="greeting-div clearfix">
  			<section className="greeting">Hi, {SessionStore.currentUser().username}!</section> &nbsp;
        <div className="logout-button-container">
          <input type="submit" value="logout" onClick={ SessionApiUtil.logout } className="login-button"/>
        </div>
  		</div>
  	);
  },

  headerButtons: function () {
    return (
      <div>
        <button onClick={this.__handleOpenModal}>Add a book</button>
        <Link to="books/">Browse books</Link>
      </div>
    );
  },

  restOfHeader: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div>
          { this.headerButtons()}
          { this.greeting() }
        </div>
      );
    } else {
      return (
        <LoginForm/>
      );
    }
  },

  render: function () {
    if (!SessionStore.currentUser()) {
      return (<div/>)
    }

    return (
      <div>
        <header className="header">
          <div className="header-nav clearfix">
            <h1 className="header-logo">
              <a href="/#/" className="header-logo-link">
                should<span className="header-logo-right">reads</span>
              </a>
            </h1>
            { this.restOfHeader() }
          </div>
        </header>
        <section className="main-background">
          <div className="main">
            {this.props.children}
          </div>
        </section>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={modalStyle}>
          <button onClick={this.onModalClose}><strong>X</strong></button>
          <BookForm onModalClose={this.onModalClose}/>
        </Modal>
      </div>
    )
  }
})

module.exports = Header;
