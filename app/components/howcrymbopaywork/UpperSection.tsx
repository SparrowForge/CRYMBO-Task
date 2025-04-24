import React from 'react';
import LeftTitle from './LeftTitle';
import RightPara from './RightPara';

const UpperSection = () => {
    return (
        <div  className='flex flex-col lg:flex-row justify-between lg:items-center gap-4 lg:gap-68 mx-8  mt-20 md:mt-0 md:mx-0'>
             
                <LeftTitle/>
                <RightPara/>
          
        </div>
    );
};

export default UpperSection;