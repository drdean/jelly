import React, { PropTypes } from 'react';
import Actions              from '../../actions/lists';
import PageClick            from 'react-page-click';

export default class CardForm extends React.Component {
  _handleSubmit(e) {
    e.preventDefault();

    let { dispatch, channel } = this.props;
    let { name }              = this.refs;

    let data = {
      list_id: this.props.listId,
      name: name.value,
    };

    dispatch(Actions.createCard(channel, data));
    this.props.onSubmit();
  }

  _renderErrors(field) {
    const { errors } = this.props;

    if (!errors) return false;

    return errors.map((error, i) => {
      if (error[field]) {
        return (
          <div key={i} className="error">
            {error[field]}
          </div>
        );
      }
    });
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  componentWillUpdate(){
    componentHandler.upgradeAllRegistered();
  }

  _handleCancelClick(e) {
    e.preventDefault();

    this.props.onCancelClick();
  }

  render() {
    return (
      <PageClick onClick={::this._handleCancelClick}>
        <div className="card form">
          <form id="new_card_form" className="list_add_card mdl-shadow--2dp" onSubmit={::this._handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" ref="name" id="card_name" type="text" required="true" rows={3}/>
              <label className="mdl-textfield__label" htmlFor="card_name">Card name...</label>
              {::this._renderErrors('name')}
            </div>
            <div>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit">Add</button> or <a href="#" onClick={::this._handleCancelClick}>cancel</a>
            </div>
          </form>
        </div>
      </PageClick>
    );
  }
}

CardForm.propTypes = {
};
