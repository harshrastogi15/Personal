import React, {useState} from 'react';
import scrollToSection from '../../Function/ScrollToSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseevent, updateEvent] = useState(-1);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const sections = [
    {name: 'About', targetId: 'AboutSection'},
    {name: 'Project', targetId: 'ProjectSection'},
    {name: 'Achievement', targetId: 'AchievementSection'},
    {name: 'Resume', targetId: 'ResumeSection'},
    {name: 'Contact', targetId: 'ContactSection'},
  ];

  const enterLeave = (event, e) => {
    if (e === 0) {
      const x = event.touches[0].clientX;
      updateEvent(x);
    } else {
      const x = event.changedTouches[0].clientX;
      if (mouseevent > x) {
        setIsOpen(false);
      }
      updateEvent(-1);
    }
  };


  return (
    <nav className="bg-[#00001a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white text-xl">
              Harsh Rastogi
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-8">
              {
                sections.map((e) => {
                  return <div key={e.targetId} className="text-gray-300 hover:text-white cursor-pointer" onClick={() => scrollToSection(e.targetId)}>
                    {e.name}
                  </div>;
                })
              }
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>

            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div onTouchStart={(e) => enterLeave(e, 0)} onTouchEnd={(e) => enterLeave(e, 1)} className={`fixed inset-y-0 left-0 ${isOpen ? 'w-full' : 'w-0'} bg-gray-800 transition-all duration-300 ease-in-out md:hidden overflow-auto`} >
        <div className="px-4 py-6 space-y-3">
          {
            sections.map((e) => {
              return <div key={e.targetId} onClick={()=>{
                scrollToSection(e.targetId); setIsOpen(false);
              }} className="block text-gray-300 hover:text-white transition duration-300 ease-in-out">
                {e.name}
              </div>;
            })
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
