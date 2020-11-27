import React from 'react';

const EditorComponent = React.lazy(() => import('../editor/editor'))
const CoursePage = React.lazy(() => import('../courses/CoursePage'))

const Mainpage = props => {
  return (
    <div>
      <CoursePage />
    </div>
  );
};

export default Mainpage;