import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectLocationData } from '../../../reducers';
import { updateLocation, getLocation } from '../../../actions';
import LocationNameView from './LocationNameView';
import LocationNameEdit from './LocationNameEdit';

class LocationName extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: !props.name };
    this.onConfirm = this.onConfirm.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    if (!props.locationData) {
      props.getLocation(props.match.params.locationId);
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ isEditing: !props.name });
  }

  onConfirm() {
    this.setState({ isEditing: false }, this.props.onFieldVerified);
  }

  onEdit() {
    this.setState({ isEditing: true });
  }

  onSubmit() {
    this.setState({ isEditing: false }, this.props.onFieldVerified);
  }

  render() {
    if (this.state.isEditing) {
      return (
        <LocationNameEdit
          name={this.props.name}
          onSubmit={this.onSubmit}
          updateName={this.props.updateName}
        />
      );
    }

    return (
      <LocationNameView name={this.props.name} onConfirm={this.onConfirm} onEdit={this.onEdit} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const locationId = ownProps.match.params.locationId;
  const locationData = selectLocationData(state, locationId);

  return {
    name: locationData ? locationData.name : null,
    locationData,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateName: name => dispatch(updateLocation(ownProps.match.params.locationId, { name })),
  getLocation: (locationId) => {
    dispatch(getLocation(locationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationName);
