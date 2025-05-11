import React from 'react';
import Child from './CHild';

const Parent = ( {user} ) => {
    return (
        <>
            <div className="border py-2 text-center">
            <p className='text-primary'><b>Q1 : What is Props Drilling & How its Works</b></p>
                <h6>hii i am parent component</h6>
                <Child user={user}></Child>
            </div>  
        </>
    );
};

export default Parent;