import React from 'react'
import '../../css/ViewProfile.css';

const ViewProfile = () => {
    return (
        <>
            <div className="container-fluid p-0 background d-flex justify-content-around align-items-center">
                <div class="card w-75 vcard d-flex justify-content-center align-items-center position-relative">
                    <img src="https://i.pinimg.com/564x/3d/cd/4a/3dcd4af5bc9e06d36305984730ab7888.jpg" height={150} width={150} className="rounded-circle position-absolute top-0 start-50 translate-middle" alt="..."/>
                        <div class="card-body vcard-body">
                            <h2 class="card-title text-center">Card title</h2>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ViewProfile