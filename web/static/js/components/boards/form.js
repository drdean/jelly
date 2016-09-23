import React, { PropTypes } from 'react';
import Actions              from '../../actions/boards';
import PageClick            from 'react-page-click';
import {renderErrorsFor}    from '../../utils';

export default class BoardForm extends React.Component {
  componentDidMount() {
    this.refs.name.focus();
    componentHandler.upgradeAllRegistered();
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { name } = this.refs;

    const data = {
      name: name.value,
    };

    dispatch(Actions.create(data));
  }

  _handleCancelClick(e) {
    e.preventDefault();

    this.props.onCancelClick();
  }

  render() {
    const { errors } = this.props;

    return (
      <PageClick onClick={::this._handleCancelClick}>
        <div className="board form new-board mdl-cell mdl-cell--3-col">
          <div className="inner mdl-card mdl-shadow--2dp">
            <h6>New board</h6>
            <form id="new_board_form" className="new-board-form" onSubmit={::this._handleSubmit}>
              <div className="mdl-textfield mdl-js-textfield">
                <input ref="name" id="board_name" className="mdl-textfield__input" type="text" required="true"/>
                <label className="mdl-textfield__label" htmlFor="board_name">Board name...</label>
                {renderErrorsFor(errors, 'name')}
              </div>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" type="submit">Create board</button> or <a href="#" onClick={::this._handleCancelClick}>cancel</a>
            </form>
          </div>
        </div>
      </PageClick>
    );
  }
}
