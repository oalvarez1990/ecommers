import React from 'react';
// import 'styles/loading-screen.css';

const LoadingScreen = () => {
    return (
        <div className='loading-screen'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;

// Se crea un nuevo metodo de inicio