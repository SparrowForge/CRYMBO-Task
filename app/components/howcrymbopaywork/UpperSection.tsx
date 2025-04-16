import React from 'react';
import LeftTitle from './LeftTitle';
import RightPara from './RightPara';

const UpperSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between md:items-center md:gap-56 px-6 sm:px-0'>

                <LeftTitle/>
                <RightPara/>

        </div>
    );
};

export default UpperSection;
