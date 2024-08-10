import PropTypes from 'prop-types';
import '../src/scss/styles.scss';

export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img
        src={url}
        alt={title}
        className="card-img-top"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:'center'}}>{title}</h5>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
