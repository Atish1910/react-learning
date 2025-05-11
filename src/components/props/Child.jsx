import React from 'react';
import Grandchild from './Grandchild';

const Child = ( {user} ) => {
    return (
        <>
            <div className="border py-2 text-center">
                <h2>hii i am parent child</h2>
                <Grandchild user={user}></Grandchild>
            </div>  
        </>
    );
};

export default Child;