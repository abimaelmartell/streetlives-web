import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/header';
import Button from '../../../components/button';
import Input from '../../../components/input';
import LinkButton from '../../../components/link';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: '',
      name: '',
    };

    this.onContactChanged = this.onContactChanged.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onNameKeyPress = this.onNameKeyPress.bind(this);

    this.setContactRef = this.setContactRef.bind(this);

    this.cancelContact = this.cancelContact.bind(this);
    this.cancelName = this.cancelName.bind(this);
    this.submit = this.submit.bind(this);
    this.skip = this.skip.bind(this);
  }

  onNameChanged(event) {
    this.setState({ name: event.target.value });
  }

  onContactChanged(event) {
    this.setState({ contact: event.target.value });
  }

  onNameKeyPress(event) {
    if (event.key === 'Enter') {
      this.contactInput.focus();
    }
  }

  setContactRef(ref) {
    this.contactInput = ref;
  }

  cancelContact() {
    this.setState({ contact: '' });
  }

  cancelName() {
    this.setState({ name: '' });
  }

  submit() {
    const { contact, name } = this.state;

    const info = {};
    if (contact) {
      info.contact = contact;
    }
    if (name) {
      info.name = name;
    }

    this.props.onSubmit(info);
  }

  skip() {
    this.props.onSubmit({});
  }

  // TODO: Add "x" buttons inside the inputs to clear them.
  // TODO: Update the inputs and label styles based on the new designs.
  render() {
    return (
      <div>
        <div className="mx-4 mb-3 text-left">
          <div className="w-100 mr-5">
            <Header size="large">One last optional step</Header>
            <p className="my-2">
              This comment site is built for {this.props.name} by Streetlives.
              If you’d like to know more about our work please share your contact info below.
            </p>
            <p>
              It will not appear with your comment.
            </p>
          </div>
          <div className="font-weight-bold mt-5">Name</div>
          <div>
            <Input
              fluid
              onFocus={this.onNameFocused}
              onChange={this.onNameChanged}
              placeholder="Enter your full name"
              value={this.state.name}
              tabIndex={0}
              onKeyPress={this.onNameKeyPress}
            />
          </div>
          <div className="font-weight-bold mt-4">Email / Phone number</div>
          <div>
            <Input
              fluid
              onFocus={this.onContactFocused}
              onChange={this.onContactChanged}
              placeholder="Enter your email or phone number"
              value={this.state.contact}
              tabIndex={0}
              innerRef={this.setContactRef}
            />
          </div>
        </div>
        <div className="mx-5">
          <Button primary fluid onClick={this.submit}>DONE</Button>
        </div>
        <LinkButton onClick={this.skip}>
          Skip this step
        </LinkButton>
      </div>
    );
  }
}

ContactInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactInfo;