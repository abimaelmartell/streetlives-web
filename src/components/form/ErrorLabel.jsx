import React from 'react';
import './ErrorLabel.css';

function reload() {
  window.location.reload();
}

const ErrorLabel = ({ errorMessage }) => (
  <div className="ErrorLabel">
    <p>
      <i className="fas fa-exclamation-triangle" aria-hidden="true" />&nbsp;
      <span>{errorMessage}</span>
    </p>
    <button
      className="default"
      onClick={reload}
    >
      Click here to reload the page
    </button>
  </div>
);

export default ErrorLabel;
