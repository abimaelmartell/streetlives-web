import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getLocation } from '../../../actions';
import { selectLocationData } from '../../../reducers';
import Header from '../../../components/header';
import Button from '../../../components/button';
import LoadingLabel from '../../../components/form/LoadingLabel';

const styles = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
};

class ViewComments extends Component {
  constructor(props) {
    super(props);
    this.goToAddComment = this.goToAddComment.bind(this);
  }

  componentWillMount() {
    if (!this.props.locationData) {
      this.props.getLocation(this.props.match.params.locationId);
    }
  }

  goToAddComment() {
    this.props.history.push(`/comments/${this.props.match.params.locationId}/add`);
  }

  render() {
    const { locationData } = this.props;

    if (!locationData) {
      return <LoadingLabel />;
    }

    const comments = locationData.Comments;

    // TODO: See about getting rid of all this duplication between the comment pages.
    const { address } = locationData;
    const addressString = `${address.street}, ${address.city}, ${address.postalCode}`;

    // TODO: Sort the comments (front-end might be simplest, though wouldn't support pagination...).
    // TODO: Maybe switch to using the separate comments endpoint, which would support pagination...
    // TODO: postedBy and emails probably shouldn't even be returned by the API (for privacy).
    // TODO: Probably extract the list and its items into a component (mabye use for languages?).
    // TODO: Don't actually use small and such, but rather style it all properly with CSS files.
    // TODO: Once using CSS, leverage the existing colors (namely "placeholderGray").
    return (
      <div className="d-flex flex-column" style={styles}>
        <div className="flex-grow-1">
          <div className="mx-5 text-left">
            <Header size="large">{locationData.Organization.name}</Header>
            <Header size="small" className="mt-3 mb-3">{addressString}</Header>
          </div>
          {!comments.length && (
            <p className="m-5 font-weight-bold">
              No comments have been posted about this location yet.
            </p>
          )}
          <ul className="list-group w-100">
            {comments.map(comment => (
              <li
                key={comment.id}
                className="list-group-item px-5 w-100"
                style={{
                  borderColor: '#EDEDED',
                  backgroundColor: '#FCFCFC',
                }}
              >
                <div className="text-left">
                  {comment.content}
                </div>
                <small className="pull-right" style={{ color: '#C2C2C2' }}>
                  {moment(comment.created_at).format('MMM D, YYYY h:mma')}
                </small>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-100">
          <Button onClick={this.goToAddComment} primary fluid>
            ADD YOUR COMMENT
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  locationData: selectLocationData(state, ownProps.match.params.locationId),
});

const mapDispatchToProps = {
  getLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewComments);