import React from 'react';

const TopIT = () => {
    return (
        <div className='my-20'>
            <h2 className='text-3xl font-bold mb-5'>Top IT Companies</h2>
            <div className="divider mx-[30%] mt-0"></div>
            <h2 className='text-left text-2xl mb-5'>Bangladeshi Top 3 IT Companies</h2>
            <div className='grid grid-cols-3 gap-5'>
                <div className="card bg-fuchsia-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Brain Station 23 Ltd.</h2>
                        <p>Phone: 01404-055220</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-lime-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">NEXT Venture</h2>
                        <p>Phone: 01648-903948</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-green-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">TigerIT Bangladesh LTD.</h2>
                        <p> Phone: 02-8826716</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>

            </div>
            <h2 className='text-left text-2xl my-10'>International Top 3 IT Companies</h2>
            <div className='grid grid-cols-3 gap-5'>
                <div className="card bg-fuchsia-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Microsoft Corporation</h2>
                        <p>Technology corporation</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-lime-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">IBM</h2>
                        <p>Technology corporation
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-green-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Oracle</h2>
                        <p> Computer software company</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopIT;