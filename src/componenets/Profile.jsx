import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card p-4 mt-3">
          <div className="first">
            <h6 className="heading">Exquisite hand henna tattoo</h6>
            <div className="time d-flex flex-row align-items-center justify-content-between mt-3">

              <div className="d-flex align-items-center">
                <i className="fa fa-clock-o clock"></i>
                <span className="hour ml-1">3 hrs</span>
              </div>

              <div>
                <span className="font-weight-bold">$90</span>
              </div>
            </div>



          </div>
          <div className="second d-flex flex-row mt-2">
            <div className="image mr-3">
              <img src="https://i.imgur.com/0LKZQYM.jpg" className="rounded-circle" width="60" />
            </div>

            <div className="">

              <div className="d-flex flex-row mb-1">

                <span>@hairtaje</span>

                <div className="ratings ml-2">

                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                </div>

              </div>

              <div>

                <button className="btn btn-outline-dark btn-sm px-2">+ follow</button>
                <button className="btn btn-outline-dark btn-sm">See Profile</button>
                <button className="btn btn-outline-dark btn-sm"><i className="fa fa-comment-o"></i></button>

              </div>

            </div>




          </div>


          <hr className="line-color"/>

            <h6>48 comments</h6>
            <div className="third mt-4">

              <button className="btn btn-success btn-block"><i className="fa fa-clock-o"></i> Book Now</button>


            </div>
        </div>
      </div>
    
    </>
  )
}

export default Profile