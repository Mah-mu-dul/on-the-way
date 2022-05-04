import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className="blogs ">
                <div className="blog">
                    <div className="title text-center"><h2>Difference between Authorization and Authentication</h2></div>
                    <div className="details d-lg-flex justify-content-evenly  ">
                        <div className="parts mx-auto w-100 "><h3 className='text-center' >Authentication</h3>
                            <h4>
                                <ol>
                                    <li>Authentication verifies who the user is.	</li>
                                    <li>Authentication is the first step of a good identity and access management process.</li>
                                    <li>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</li>
                                </ol>
                            </h4>

                        </div>
                        <div className="parts mx-auto pb-4 w-100  "><h3 className='text-center'>Authorization</h3>
                            <h4>
                                <ol>
                                    <li>Authorization determines what resources a user can access.	</li>
                                    <li>Authorization always takes place after authentication.</li>
                                    <li>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</li>
                                </ol>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="blog p-3">
                    <h2 className="">Why am I using firebase?</h2>
                    <h4 className='px-4'>I am using Firebase to implement authentication and host a site.</h4>
                    <h2 className="">Other options to implement authentication:   </h2>
                    <h4 className="px-4">
                        <ul>
                            <li>Password-based authentication</li>
                            <li>Biometric authentication.</li>
                            <li>Certificate-based authentication.</li>
                            <li>Multi-factor authentication.</li>
                            <li>Token-based authentication.</li>

                        </ul>
                    </h4>

                </div>
                <div className="blog">
                    <h2 className='p-2 '>Firebase can do: </h2>
                    <h4 className='px-4 pb-2'>
                        <ul>
                            <li>Authentication</li>
                            <li>Databases</li>
                            <li>Storage</li>
                            <li>Hosting</li>
                            <li>ML Kit</li>
                        </ul>
                    </h4>
                </div>
            </div>

        </div>
    );
};

export default Blogs;