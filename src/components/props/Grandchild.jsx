import React from 'react';

const Grandchild = ( {user} ) => {
    return (
        <>
            <div className="border py-2 text-center">
                <h2>hii i am Grandchild component</h2>
                <p>name : {user.name}</p>
                <p>age : {user.age}</p>
            </div>  
        </>
    );
};

export default Grandchild;