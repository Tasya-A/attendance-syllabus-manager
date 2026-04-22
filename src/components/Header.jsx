import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. STYLES DEFINED AT TOP TO PREVENT CRASHING
const utilityLink = { display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', fontSize: '12.5px', fontWeight: '600' };
const iconStyle = { marginRight: '7px', color: 'white', fontSize: '14px' };

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) alert(`Searching institutional records for: ${searchTerm}`);
  };

  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 10000 }}>
      {/* TOP BLUE STRIP (Unified for all pages) */}
      <div style={{ background: '#00AEEF', height: '42px', color: '#fff', padding: '0 50px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10000 }}>
        <div style={{ display: 'flex', gap: '22px', alignItems: 'center'  }}>
          <span>For Admissions enquire:
            <a href="tel:8712225044" className="top-link-hover" style={{ marginLeft: '8px' }}>
              <i className="fas fa-phone"></i> 8712225044
            </a>
          </span>
           <a href="mailto:admissions@aceec.ac.in" target="_blank" rel="noreferrer" className="top-link-hover">
             <i className="fas fa-envelope"></i> admissions@aceec.ac.in
          </a>
        </div>
      </div>

      {/* WHITE LOGO HEADER (Removed Ghost Text) */}
      <header style={{ background: '#fff', height: '100px', padding: '0 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
        <Link to="/"><img src="https://www.aceec.ac.in/wp-content/uploads/2024/06/AUT-1.png" alt="ACE Logo" style={{ height: '75px' }} /></Link>
        <img src="https://www.aceec.ac.in/wp-content/uploads/2021/09/UGC-NAAC-NBA-AICTE.jpg" alt="Accreditation" style={{ height: '60px' }} />
      </header>
    </div>
  );
}