import PropTypes from "prop-types"

export const ErrorMessage = ({ error }) => (
  <small className="error" id="search-helper">
    <b>{error}</b>
  </small>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
}