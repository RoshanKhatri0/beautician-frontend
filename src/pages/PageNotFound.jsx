import React from 'react'

const PageNotFound = () => {
  return (
    <>
        <div className="container text-center">
      <h1 className="mt-3">Page Not Found</h1>
      <img
        src="https://i.pinimg.com/564x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg"
        alt="Not Found"
        className="img-fluid my-2"
      />
      <p className="lead">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
    </>
  )
}

export default PageNotFound