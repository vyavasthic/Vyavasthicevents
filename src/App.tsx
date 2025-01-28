import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Venues from './pages/Venues';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Auth from './pages/Auth';
import PlanMeeting from './pages/PlanMeeting';
import ContactUs from './pages/ContactUs';
// import Datetime from './pages/Datetime';
// import SignUp from './pages/SignUp';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7EDE4]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/events" element={<Events />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/plan-meeting" element={<PlanMeeting />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="/Datetime" element={<Datetime />} /> */}

          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;