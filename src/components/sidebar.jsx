import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-black">Close</button>
      {/* Sidebar content goes here */}
    </div>
  );
};

export default Sidebar;
