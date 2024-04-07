import React from 'react'
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <>
            <div className="container py-3">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Scheduling Appointments <br /><span className="text-body-secondary">Just Got Easier</span></h2>
                        <p className="lead">With Beautician, it is easy to find appointments with local beauty, wellness, and health professionals. Find your favorite spot or discover new businesses through our marketplace.</p>
                    </div>
                    <div className="col-md-5">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{
                              scale: 0.8,
                              rotate: 18,
                              borderRadius: "100%"
                            }}
                        >
                            <img src="https://dk2h3gy4kn9jw.cloudfront.net/web-2019/a0dd983f/img/section-1.1b0e6a9.png" alt="abt us" />
                        </motion.div>
                    </div>
                </div>
                <hr class="featurette-divider"></hr>
                <div className="container py-3">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading fw-normal lh-1">Appointments <span className="text-body-secondary">AnyTime</span></h2>
                            <p className="lead">Book services instantly through the Booksy App and avoid the back-and-forth phone calls during business hours.</p>
                        </div>
                        <div className="col-md-5">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{
                              scale: 0.8,
                              rotate: 18,
                              borderRadius: "100%"
                            }}
                        >
                            <img src="https://dk2h3gy4kn9jw.cloudfront.net/web-2019/a0dd983f/img/section-2.9f861bc.png" alt="abt us" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <hr class="featurette-divider"></hr>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">Get Notified</h2>
                        <p className="lead">Automated reminders ensure you never forget upcoming appointments. Use the app to change and manage your appointment.</p>
                    </div>
                    <div className="col-md-5">
                    <motion.div
                            whileHover={{ scale: 1.2, rotate: 8 }}
                            whileTap={{
                              scale: 0.8,
                              rotate: 18,
                              borderRadius: "100%"
                            }}
                        >
                        <img src="https://dk2h3gy4kn9jw.cloudfront.net/web-2019/a0dd983f/img/section-1.1b0e6a9.png" alt="abt us" />
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs