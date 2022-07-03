import React from 'react';
import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <RoutesApp />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
