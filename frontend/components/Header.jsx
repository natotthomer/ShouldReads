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

var modalStyle = require('./../constants/modal_style_constants');

var Header = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return ({ modalOpen: false, isLoggedIn: SessionStore.isUserLoggedIn() });
  },

  componentDidMount: function () {
    SessionStore.addListener(this.hasUser);
    SessionApiUtil.fetchCurrentUser();
  },

  hasUser: function () {
    if (!this.state.isLoggedIn && SessionStore.currentUserHasBeenFetched()) {

      this.context.router.push("/");
    }
    this.setState({ isLoggedIn: false })
  },

  __handleOpenModal: function () {
    this.setState({ modalOpen: true });
  },

  onModalClose: function () {
    this.setState({ modalOpen: false });
  },

  greeting: function(){
  	return (
  		<div className="greeting-div clearfix right">
  			<section className="greeting left">Hi, {SessionStore.currentUser().username}!</section> &nbsp;
        <div className="logout-button-container right">
          <input type="submit" value="logout" onClick={ SessionApiUtil.logout } className="login-button"/>
        </div>
  		</div>
  	);
  },

  headerButtons: function () {
    return (
      <div className="left">
        <button className="header-nav-button left" onClick={this.__handleOpenModal}>Add a book</button>
        <Link className="header-nav-button left" to="books/" id="header-a">Browse books</Link>
      </div>
    );
  },

  restOfHeader: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div className="clearfix">
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
            <h1 className="header-logo left">
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
          <button onClick={this.onModalClose} className="modal-close left"><strong>X</strong></button>
          <BookForm onModalClose={this.onModalClose}/>
        </Modal>
      </div>
    )
  }
})

module.exports = Header;
