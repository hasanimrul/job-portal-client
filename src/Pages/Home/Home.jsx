import React from 'react';
import ExperiencedJob from '../../components/Home/ExperiencedJob';
import FresherJob from '../../components/Home/FresherJob';
import Toggle from '../../components/Home/Toggle';
import TopIT from '../../components/Home/TopIT';

const Home = () => {
    return (
        <div>
            <Toggle />
            <FresherJob />
            <ExperiencedJob />
            <TopIT />
        </div>
    );
};

export default Home;