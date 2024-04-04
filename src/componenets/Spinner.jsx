import React from 'react'

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center spinner">
        <div class="typing-indicator">
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
        </div>
      </div>
    </>
  )
}

export default Spinner
