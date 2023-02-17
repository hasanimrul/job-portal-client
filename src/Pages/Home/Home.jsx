import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ExperiencedJob from '../../components/Home/ExperiencedJob';
import FresherJob from '../../components/Home/FresherJob';
import Toggle from '../../components/Home/Toggle';
import TopIT from '../../components/Home/TopIT';

const Home = () => {
    const freshers = useLoaderData();
    const experiences = useLoaderData()
    return (
        <div>
            <Toggle />
            <div>
                <h1 className='text-2xl font-bold'>Fresher's Job Suggestion</h1>
                <div className="divider mx-[30%] mt-0"></div>
                <div className='flex flex-col gap-5 mx-20'>
                    {
                        freshers.map(fresher => <FresherJob
                            key={fresher.id}
                            fresher={fresher}
                        ></FresherJob>)
                    }
                </div>
                <button className="btn btn-primary mt-5">See All Job</button>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Experience Job Suggestion</h1>
                <div className="divider mx-[30%] mt-0"></div>
                <div className='flex flex-col gap-5 mx-20'>
                    {
                        experiences.map(experience => <ExperiencedJob
                            key={experience.id}
                            experience={experience}
                        ></ExperiencedJob>)
                    }
                </div>
                <button className="btn btn-primary mt-5">See All Job</button>
            </div>
            <TopIT />
        </div>
    );
};

export default Home;