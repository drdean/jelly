import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import { setDocumentTitle, renderErrorsFor } from '../../utils';
import Actions              from '../../actions/sessions';

class SessionsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign in');
    componentHandler.upgradeAllRegistered();
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.refs;
    const { dispatch } = this.props;

    dispatch(Actions.signIn(email.value, password.value));
  }

  _renderError() {
    let { error } = this.props;

    if (!error) return false;

    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    const { errors } = this.props;

    return (
      <div className='sessions new'>
        <main>
          <header>
            <div><img className="logo" src="/images/logo.svg" /></div>
          </header>
          <form id="sign_in_form" className="login-card-wide mdl-card mdl-shadow--6dp mdl-color-text--grey-600"  onSubmit={::this._handleSubmit}>
            {::this._renderError()}
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                ref="email"
                type="Email"
                id="user_email" />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_email">Email...</label>
              {renderErrorsFor(errors, 'user_email')}
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                ref="password"
                type="password"
                id="user_password" />
                <label className="mdl-textfield__label" htmlFor="user_password">Password...</label>
                {renderErrorsFor(errors, 'user_password')}
            </div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Sign in</button>
          </form>
          <Link className="login-link" to="/sign_up">Create new account</Link>

        </main>
        <footer id="main_footer">
          <small>
            <a href="" target="_blank">Jelly</a> tribute for educational purposes
            crafted with ♥ by Liang Lingjiang</small>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.session
);

export default connect(mapStateToProps)(SessionsNew);
