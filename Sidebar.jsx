import{useState} from 'react';
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaEnvelope, FaCog, FaDashcube, FaMeteor, FaMagnet, FaUser, FaUsers, FaCloud, FaCreditCard, FaChartBar, FaBriefcase, FaArrowRight, FaLongArrowAltRight, FaSignOutAlt, FaPhone, FaPhoneAlt, FaSpeakerDeck, FaWallet, FaWeebly, FaHome, FaGlobe, FaStar, FaBullhorn, FaCoins, FaBitcoin } from "react-icons/fa";



function Sidebar(){
   return (
<>
<div className="bg-dark text-white vh-100 position-fixed p-3" style={{ width: "250px", top: 0, left: 0 ,fontSize:'14px',fontWeight:500}}>

    <div className='mb-2'>
      <h5 className="text-white mb-0" style={{ fontWeight: 600 }}>MatchMakers <span style={{ fontWeight: 300 }}>Suite</span>
</h5>
      <small className="text-secondary" >By Quantuva</small>

    </div>
      <button className="btn btn-primary w-100 
      mb-2">Add New Member</button>
      <ul className="nav flex-column">
    
      <li className="nav-item mb-0 d-flex align-items-center">
          <NavLink to="/Dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active bg-primary text-white' : 'text-white'}`}>
        <span style={{ fontWeight: 300 }}>
            <FaTachometerAlt size={16}className="me-2" /> Dashboard
          </span>
          </NavLink>
        </li>

<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Profiles" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaUsers size={16} className="me-2" /> 
 Profiles
 </span>
    </NavLink>
</li>


<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Cloud Profiles" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaCloud size={16} className="me-2" /> 
 Cloud Profiles
 </span>
    </NavLink>
</li>


<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Subscription Plans" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaCoins size={16} className="me-2" /> 
 Subscription Plans
 </span>
    </NavLink>
</li>



<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Wallet" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaWallet size={16} className="me-2" /> 
 Wallet
 </span>
    </NavLink>
</li>



<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Website" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaGlobe size={16} className="me-2" /> 
 Website
 </span>
    </NavLink>
</li>



<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Marketing" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaBullhorn size={16} className="me-2" /> 
 Marketing
 </span>
    </NavLink>
</li>
 


<li className="nav-item mb-0 d-flex align-items-center">
    <NavLink to="/Users" className={({isActive})=>`nav-link ${isActive ? 'active bg-primary text-white' :'text-white'}`}>
    <span style={{ fontWeight: 300 }}>
 <FaUsers size={16} className="me-2" /> 
 Users
 </span>
    </NavLink>
</li>



        <li className="nav-item mb-0 d-flex align-items-center">
          <NavLink to="/contact-us" className={({ isActive }) => `nav-link ${isActive ? 'active bg-primary text-white' : 'text-white'}`}>
          <span style={{ fontWeight: 300 }}>
            <FaPhoneAlt size={16} className="me-2" /> Contact Us
            </span>
          </NavLink>
        </li>


 < br></br>
<br></br>
< br></br>
<br></br>
< br></br>
<br></br>
<br></br>
< br></br>


        <li className="nav-item mb-0 d-flex align-items-center">
          <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active bg-primary text-white' : 'text-white'}`}>
          <span style={{ fontWeight: 300 }}>
            <FaCog size={16} className="me-2" /> Settings
            </span>
          </NavLink>
        </li>


        <li className="nav-item mb-1 d-flex align-items-center">
          <NavLink to="/Logout" className={({ isActive }) =>` nav-link ${isActive ? 'active bg-primary text-white' : 'text-white'}`}>
          <span style={{ fontWeight: 300 }}>
            <FaSignOutAlt size={16} className="me-2" /> Logout
            </span>
          </NavLink>
        </li>

        
      </ul>
    </div>

</>
    );
}

export default Sidebar;