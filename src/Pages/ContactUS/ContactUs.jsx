import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q=" alt='' />
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Contact Information</h1>
                        <p className="mb-5">Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                        <p className="mb-5">Phone: + 1235 2355 98</p>
                        <button className="btn btn-primary">Get Direction</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;