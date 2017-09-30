import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    }
  }

  render() {
    return (
      <div className="c-form u-center">
        <div className="c-heading c-heading--2">Add a new book</div>
    
        <div className="u-inlineblock u-mt3 u-mr3">
          <Input 
            id="book-title"
            title="Title"
            placeholder="Brave New World"
            value={this.state.title}
            onChange={this._handleTitleChange.bind(this)} />
        </div>
        
        <div className="u-inlineblock u-mt3">
          <Input 
            id="book-author"
            title="Author"
            placeholder="Aldous Huxley"
            value={this.state.author}
            onChange={this._handleAuthorChange.bind(this)} />
        </div>
        
        <div className="u-mt3 u-txright">
          <Button onClick={this._handleSubmit.bind(this)}>Add book</Button>
        </div>
      </div>
    );
  }

  resetState() {
    this.setState({
      title: '',
      author: ''
    });
  }

  _handleTitleChange(value) {
    this.setState(Object.assign(this.state, {
      title: value
    }));
  }

  _handleAuthorChange(value) {
    this.setState(Object.assign(this.state, {
      author: value
    }));
  }

  _handleSubmit() {
    this.props.onAddBook(
      this.state.title,
      this.state.author
    );
    
    this.resetState();
  }
}

AddForm.propTypes = {
  onAddBook: PropTypes.func.isRequired
};

export default AddForm;