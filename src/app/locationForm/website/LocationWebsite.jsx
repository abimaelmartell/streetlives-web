import React from 'react';
import { connect } from 'react-redux';
import { selectLocationData } from '../../../reducers';
import { updateLocation } from '../../../actions';
import { getLocation } from '../../../actions';
import Form from '../common/Form';
import FormEdit from '../common/FormEdit';
import FormView from '../common/FormView';
import { compose, withProps } from 'recompose';

const WebsiteEdit = compose(
  withProps({
    headerText : 'What is this organization\'s website?',
    placeholderText : 'Enter a wesbite for this organization',
  })
)(props => <FormEdit {...props} />)

const WebsiteView = compose(
  withProps({
    topText : 'ORGANIZATION WEBSITE',
  })
)(props => <FormView {...props} />)

const Website = compose(
  withProps({
    viewComponent: WebsiteView,
    editComponent: WebsiteEdit
  })
)(props => <Form {...props} />)

const mapStateToProps = (state, ownProps) => {
  const locationId = ownProps.match.params.locationId;
  const locationData = selectLocationData(state, locationId);

  return {
    value: locationData && 
              locationData.Organization && 
              locationData.Organization.url ? 
              locationData.Organization.url : null,
    locationData 
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateValue: newWebsite => dispatch(updateLocation(ownProps.match.params.locationId, { Organization : {url : newWebsite}})),
  getLocation: (locationId) => {
    dispatch(getLocation(locationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Website);
