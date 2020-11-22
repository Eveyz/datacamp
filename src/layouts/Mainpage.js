import React from 'react';
import PropTypes from 'prop-types';
import EditorComponent from '../editor/editor'
import CoursePage from '../courses/CoursePage'

const Mainpage = props => {
  return (
    <div>
      <CoursePage />
    </div>
  );
};

Mainpage.propTypes = {
  
};

export default Mainpage;