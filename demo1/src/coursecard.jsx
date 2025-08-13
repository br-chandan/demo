import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CourseCard extends Component {
  render() {
    const { title, duration, instructor } = this.props;
    return (
      <div style={{
        border: '3px solid #ccc',
        padding: '15px',
        width: '250px',
        borderRadius: '8px',
        margin: '10px'
      }}>
        <h3>{title}</h3>
        <p><b>Duration:</b> {duration} weeks</p>
        <p><b>Instructor:</b> {instructor}</p>
      </div>
    );
  }
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired,
};

export default CourseCard;
