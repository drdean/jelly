import React, {PropTypes} from 'react';
import { push }           from 'react-router-redux';

export default class BoardCard extends React.Component {
  _handleClick() {
    this.props.dispatch(push(`/boards/${this.props.id}`));
  }

  render() {
    return (
      <div id={this.props.id} className="board mdl-cell mdl-cell--3-col" onClick={::this._handleClick}>
        <div className="inner mdl-card mdl-shadow--2dp">
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

BoardCard.propTypes = {
};
