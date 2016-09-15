import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import { setDocumentTitle, renderErrorsFor } from '../../utils';
import Actions              from '../../actions/registrations';

class RegistrationsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign up');
    componentHandler.upgradeAllRegistered();
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const data = {
      first_name: this.refs.firstName.value,
      last_name: this.refs.lastName.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value,
    };

    dispatch(Actions.signUp(data));
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="mdl-layout__container registrations new">
        <main>
          <header>
            <div className="logo" />
          </header>
          <form id="sign_up_form" className="login-card-wide mdl-card mdl-shadow--2dp mdl-color-text--grey-600" onSubmit={::this._handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="firstName" id="user_first_name" className="mdl-textfield__input" type="text" required={true} />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_first_name">First name...</label>
              {renderErrorsFor(errors, 'first_name')}
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="lastName" id="user_last_name" className="mdl-textfield__input" type="text" required={true} />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_last_name">Last name...</label>
              {renderErrorsFor(errors, 'last_name')}
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="email" id="user_email" className="mdl-textfield__input" type="email" required={true} />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_email">Email...</label>
              {renderErrorsFor(errors, 'email')}
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="password" id="user_password" className="mdl-textfield__input" type="password" required={true} />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_password">Password...</label>
              {renderErrorsFor(errors, 'password')}
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="passwordConfirmation" id="user_password_confirmation" className="mdl-textfield__input" type="password" required={true} />
              <label className="login-card-wide mdl-textfield__label" htmlFor="user_password_confirmation">Confirm password...</label>
              {renderErrorsFor(errors, 'password_confirmation')}
            </div>
            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Sign up</button>
          </form>
          <Link className="login-link" to="/sign_in">Sign in</Link>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registration.errors,
});

export default connect(mapStateToProps)(RegistrationsNew);
