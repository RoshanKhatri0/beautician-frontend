import React from 'react'
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <>
            <section>
                <div className="container p-3">
                    <h1 className='text-center my-3'>Our Services</h1>
                    <div class="row py-3">
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/564x/ce/73/97/ce739727661eb8b4e1e1328fa118e818.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">MakeUp</h2>
                                    <p>Makeup application for events such as weddings, proms, or special occasions, as well as makeup lessons or consultations</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/564x/82/07/5f/82075fde2bbb890abe02c62ca23f5a97.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">Nail Services</h2>
                                    <p>Manicures, pedicures, gel nails, acrylic nails, nail art, nail extensions, and nail treatments</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/564x/46/33/74/463374ea39b94a7b08a77b06d3555483.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">Hair Services</h2>
                                    <p>This might include haircuts, styling, coloring, highlights, extensions, treatments, and more</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div class="row py-3">
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/564x/e0/cc/1d/e0cc1d762a596e46324ab6165faf304b.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">Waxing </h2>
                                    <p>Waxing services for various body parts, sugaring, threading, and laser hair removal</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/736x/19/cd/15/19cd156a6600bd26c4cb736b9d8748f6.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">Massage Therapy</h2>
                                    <p>Offer various types of massages such as Swedish, deep tissue, hot stone, or aromatherapy massages</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <div class="col-lg-4">
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <div className="card1 p-3">
                                    <img className='rounded-circle' src="https://i.pinimg.com/564x/17/4d/04/174d049cc7591eb3ed66986a023bd534.jpg" alt="service" width="140" height="140" />
                                    <h2 class="fw-normal">Bridal Packages</h2>
                                    <p>Provide specialized packages that include pre-wedding skincare treatments and on-site wedding day services</p>
                                    <button class="lbutton learn-more">
                                        <span aria-hidden="true" class="circle">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">Learn More</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services