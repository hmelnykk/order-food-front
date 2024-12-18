import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return (
    <>
      <div id='modal-base' className="absolute w-screen h-screen bg-black/25 backdrop-blur-xs z-[1001] hidden"></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
