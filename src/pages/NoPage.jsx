import React from 'react';

function NoPage() {
    return (
        <div className="bg-blue-200 w-full">
            <div className="hero-content text-center">
                <div className="max-w-md mx-auto py-[20%]">
                    <h1 className="text-5xl font-bold">404!</h1>
                    <p className="py-6">La pagina que solicitaste no existe</p>
                </div>
            </div>
        </div>
    );
}

export default NoPage;