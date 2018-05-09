import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withProps } from 'recompose';

import { getService, getServiceLanguages, getServiceId } from '../../../selectors/service';

import * as actions from '../../../actions';
import { Form } from '../../../components/form';

import ServiceLanguagesEdit from './ServiceLanguagesEdit';
import ServiceLanguagesView from './ServiceLanguagesView';

const FormComponent = compose(withProps({
  ViewComponent: ServiceLanguagesView,
  EditComponent: ServiceLanguagesEdit,
}))(props => <Form {...props} />);

const mapStateToProps = (state, ownProps) => ({
  resourceData: getService(state, ownProps),
  value: getServiceLanguages(state, ownProps),
  id: getServiceId(ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchResourceData: bindActionCreators(actions.getLocation, dispatch),
  updateValue: (languageIds, serviceId, metaDataSection, fieldName) =>
    dispatch(actions.updateService({
      locationId: ownProps.match.params.locationId,
      serviceId,
      params: { languageIds },
      metaDataSection,
      fieldName,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
