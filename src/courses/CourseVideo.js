import React from 'react'

const CourseVideo = props => {
  return (
    <div>
      <video 
        width="1200"
        controls 
        autoPlay
        src={'static/videos/sample.mkv'}
      />
    </div>
  )
}

export default CourseVideo;