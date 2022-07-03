import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Atoms/Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
