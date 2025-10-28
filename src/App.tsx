import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="App bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
          <Chatbot />
        </div>
      </div>
    </Router>
  );
};

export default App;
