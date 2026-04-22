import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
// Add this new state to store what you type
const [searchTerm, setSearchTerm] = useState("");
  const slides = [
    { type: 'image', url: 'https://www.aceec.ac.in/wp-content/uploads/2021/04/20210107_161812-min-1536x692.jpg' },
    { type: 'video', url: 'https://www.youtube.com/embed/ID=WF3WT2y82Jz1O6HD', Parameters: '?autoplay=1&mute=1' }
  ];
  const handleRefresh = () => { window.location.reload(); };
  // This function handles the search when you hit Enter or click the icon
const handleSearch = (e) => {
  if (e) e.preventDefault(); // Prevents the page from refreshing
  if (searchTerm.trim()) {
    alert(`Searching institutional records for: ${searchTerm}`)
    // Optional: window.location.href = `https://www.aceec.ac.in/?s=${searchTerm}`;
  }
};
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', fontFamily: '"Open Sans", Arial, sans-serif' }}>
      {/* 3. NAVIGATION (Nested Dropdown Overlap Slider) */}
      <nav style={{ background: '#00AEEF', padding: '12px 0', position: 'relative', zIndex: 9500 }}>
        <div className="nav-container">
          {/* <div className="nav-line-official">
            <div className="nav-wrapper-official" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => {setActiveDropdown(null); setActiveSubMenu(null);}}>
              <Link to="/" className="nav-link-official">About ACE</Link>
              {activeDropdown === 'about' && (
                <div className="main-dropdown-official">
                  <div className="dropdown-item-official" onMouseEnter={() => setActiveSubMenu('college')} onMouseLeave={() => setActiveSubMenu(null)}>
                    About College <span style={{ float: 'right' }}>›</span>
                    {activeSubMenu === 'college' && (
                      <div className="nested-dropdown-official">
                         <div className="dropdown-item-official">Mission & Vision</div>
                         <div className="dropdown-item-official">Academics at ACE</div>
                         <div className="dropdown-item-official">Life at ACE</div>
                         <div className="dropdown-item-official">ACE - The Caring Campus</div>
                         <div className="dropdown-item-official">Training and Placement Cell</div>
                         <div className="dropdown-item-official">Faculty</div>
                         <div className="dropdown-item-official">Student Clubs</div>
                      </div>
                    )}
                  </div>
                  <div className="dropdown-item-official">About College (తెలుగు)</div>
                  <div className="dropdown-item-official">General Secretary</div>
                  <div className="dropdown-item-official">Governing Body</div>
                  <div className="dropdown-item-official">Accreditations</div>
                </div>
              )}
            </div>
            {['Admissions', 'Administration', 'Departments', 'Consultancy Services', 'Student Zone', 'Examination Branch', 'ACE Finishing School', 'Placement Cell', 'Research'].map(item => (
              <React.Fragment key={item}>
                <span className="pipe-official">|</span>
                <Link to="/" className="nav-link-official">{item}</Link>
              </React.Fragment>
            ))}
          </div>

          <div className="nav-line-official" style={{ marginTop: '10px' }}>
            <span className="pipe-official">|</span>
            {['IRINS Profile', 'IQAC', 'NAAC', 'NBA', 'Newsletter', 'AICTE Idea Lab', 'NIRF', 'Videos', 'Infrastructure', 'Hostel and Auditorium', 'Student Certificate Verification', 'Careers @ ACE'].map((item) => (
              <React.Fragment key={item}>
                <Link to="/" className="nav-link-official">{item}</Link>
                <span className="pipe-official">|</span>
              </React.Fragment>
            ))}
          </div> */}

          <div className="nav-line-official" style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link to="/" className="contact-us-official">Contact Us</Link>
            <Link to="/dashboard" className="academic-console-btn">ACADEMIC MANAGEMENT CONSOLE</Link>
          </div>
        </div>
      </nav>
{/* 4. HYBRID MEDIA SLIDER SECTION */}
   <div className="slider-wrapper">
        {slides.map((media, index) => (
          <div key={index} className={`slide ${currentSlide === index? 'active' : ''}`}>
            {media.type === 'image'? (
              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${media.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            ) : (
              <iframe 
  src={media.url} 
  style={{ width: '100%', height: '100%', border: 'none' }} 
  // MANDATORY PERMISSIONS: This resolves the Playback ID error
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowFullScreen
  title={`Institutional Overview ${index}`}
/>
            )}
          </div>
        ))}
        {/* Navigation Arrows */}
        <button className="slider-arrow left" onClick={() => setCurrentSlide(prev => (prev === 0? slides.length - 1 : prev - 1))}>❮</button>
        <button className="slider-arrow right" onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}>❯</button>

        {/* Progress Dots */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <span key={index} className={`dot ${currentSlide === index? 'active-dot' : ''}`} onClick={() => setCurrentSlide(index)}></span>
          ))}
        </div>

        {/* 5. FLOATING SOCIAL BAR (High position, Rect labels, brand colors) */}
        <div className="social-floating-bar">
          <a href="https://www.youtube.com/channel/UCkg_A1FB28R7Cw50mghyduw" target="_blank" rel="noreferrer" className="social-item yt">
            <span className="social-popup-rect">YouTube</span>
            <div className="icon-box"><i className="fab fa-youtube"></i></div>
          </a>
          <a href="https://www.facebook.com/ACEEngineeringClg/" target="_blank" rel="noreferrer" className="social-item fb">
            <span className="social-popup-rect">Facebook</span>
            <div className="icon-box"><i className="fab fa-facebook-f"></i></div>
          </a>
          <a href="https://twitter.com/ace_engg" target="_blank" rel="noreferrer" className="social-item tw">
            <span className="social-popup-rect">Twitter</span>
            <div className="icon-box"><i className="fab fa-twitter"></i></div>
          </a>
          <a href="https://www.instagram.com/aceengineeringcollege/" target="_blank" rel="noreferrer" className="social-item ig">
            <span className="social-popup-rect">Instagram</span>
            <div className="icon-box"><i className="fab fa-instagram"></i></div>
          </a>
        </div>
      </div>

      <style>{`
        .top-link-hover { color: #fff !important; text-decoration: none; transition: 0.3s; }
        .top-link-hover:hover { opacity: 0.7; text-decoration: underline !important; }

        .nav-link-official, .contact-us-official { color: #fff !important; text-decoration: none; white-space: nowrap; font-size: 14px; font-weight: 600; }
        .nav-link-official:hover, .contact-us-official:hover { text-decoration: underline !important; }

        .nav-container { display: flex; flex-direction: column; align-items: center; padding: 0 20px; }
        .nav-line-official { display: flex; justify-content: center; align-items: center; width: 100%; gap: 10px; }
        .pipe-official { color: #fff; opacity: 0.9; font-size: 16px; margin: 0 5px; }

        .contact-us-official { font-family: serif; font-size: 16px; margin-bottom: 10px; }
        .academic-console-btn { color: #FFD700 !important; border: 1.5px solid #FFD700; padding: 5px 20px; text-decoration: none; font-weight: 800; font-size: 13px; }

        .search-popup-official { position: absolute; top: 35px; right: 0; background: #fff; border: 1px solid #ddd; padding: 5px 10px; display: flex; align-items: center; box-shadow: 0 4px 8px rgba(0,0,0,0.1); z-index: 11000; }
        .search-box-field { border: 1px solid #ccc; outline: none; padding: 3px 6px; width: 130px; font-size: 12px; margin-right: 5px; color: #333; }

        /* NESTED DROPDOWNS: High Z-index to overlap slider correctly */
        .nav-wrapper-official { position: relative; }
        .main-dropdown-official { position: absolute; top: 100%; left: 0; background: #1b6ca8; width: 250px; text-align: left; padding: 5px 0; z-index: 9999; }
        .nested-dropdown-official { position: absolute; left: 100%; top: 0; background: #1b6ca8; width: 230px; }
        .dropdown-item-official { padding: 10px 18px; color: #fff; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer; position: relative; }
        .dropdown-item-official:hover { background: #145584; text-decoration: underline; }

        /* SLIDER WRAPPER */
        .slider-wrapper { position: relative; width: 100%; height: 600px; overflow: hidden; z-index: 1; background: #000; }
        .slide { position: absolute; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.2s; }
        .slide.active { opacity: 1; z-index: 2; }

        /* ARROWS: Placed at 60% height to avoid Social Bar labels */
        .slider-arrow { position: absolute; top: 60%; background: rgba(0,0,0,0.3); color: #fff; border: none; padding: 25px 15px; cursor: pointer; font-size: 24px; z-index: 10; transform: translateY(-50%); }
        .slider-arrow:hover { background: rgba(0,0,0,0.7); }
        .left { left: 0; border-radius: 0 5px 5px 0; }
        .right { right: 0; border-radius: 5px 0 0 5px; }

        .dots-container { position: absolute; bottom: 30px; width: 100%; display: flex; justify-content: center; gap: 15px; z-index: 10; }
        .dot { width: 14px; height: 14px; background: rgba(255,255,255,0.4); border: 2px solid #fff; border-radius: 50%; cursor: pointer; }
        .active-dot { background: #fff !important; }

        /* SOCIAL BAR: Higher position to clear right arrow */
        .social-floating-bar { position: absolute; right: 0; top: 15%; display: flex; flex-direction: column; z-index: 100; }
        .social-item { display: flex; align-items: center; cursor: pointer; position: relative; justify-content: flex-end; text-decoration: none; }
        .icon-box { width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; color: #fff; background: rgba(34,34,34,0.9); transition: 0.3s; z-index: 101; }
        .social-popup-rect { 
           padding: 0 15px; height: 45px; line-height: 45px; font-size: 13px; font-weight: 600; color: #fff;
           position: absolute; right: 45px; transform: translateX(100%); opacity: 0; transition: 0.4s; z-index: 100; 
           border-radius: 2px 0 0 2px;
        }

        .social-item:hover .social-popup-rect { transform: translateX(0); opacity: 1; }
        .yt .social-popup-rect { background: #cc181e; }
        .yt:hover .icon-box { background: #cc181e; }
        .fb .social-popup-rect { background: #3b5998; }
        .fb:hover .icon-box { background: #3b5998; }
        .tw .social-popup-rect { background: #55acee; }
        .tw:hover .icon-box { background: #55acee; }
        .ig .social-popup-rect { background: #3f729b; }
        .ig:hover .icon-box { background: #3f729b; }
      `}</style>
    </div>
  );
}
const utilityLink = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
  fontSize: '12.5px',
  fontWeight: '600'
};

const iconStyle = {
  marginRight: '7px',
  color: 'white', // Matches the official ACE Engineering College white icons
  fontSize: '14px'
};