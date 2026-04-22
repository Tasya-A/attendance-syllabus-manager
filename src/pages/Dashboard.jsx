import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={pageContainer}>
{/* HEADER STRIP */}
      <div style={headerStrip}>
        <h2 style={headerTitle}>Academic Management Console </h2>
        <p style={headerSubtitle}>Institutional Governance & Decision Support System</p>
      </div>

      {/* GRID */}
      <div style={gridContainer}>
        
        {/* Attendance */}
        <Link to="/attendance" className="card">
          <div style={iconCircle}>
            <i className="fas fa-user-check"></i>
          </div>
          <h3 style={cardTitle}>Attendance System</h3>
          <p style={cardDescription}>
            Track student SEE eligibility, aggregate percentages, and 7-day absence streaks.
          </p>
          <div style={goBtn}>Open Module</div>
        </Link>

        {/* Syllabus */}
        <Link to="/syllabus" className="card">
          <div style={{ ...iconCircle, background: '#FFD700' }}>
            <i className="fas fa-chart-pie" style={{ color: '#333' }}></i>
          </div>
          <h3 style={cardTitle}>Syllabus Tracking</h3>
          <p style={cardDescription}>
            Visualize unit-wise progress using professional solid-block donut analytics.
          </p>
          <div style={{ ...goBtn, color: '#e67e22' }}>View Progress</div>
        </Link>

      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link to="/" style={backHomeLink}>← Return to College Home</Link>
      </div>

      {/* HOVER STYLES */}
      <style>
        {`
          .card {
            background: white;
            padding: 40px 30px;
            border-radius: 20px;
            text-align: center;
            text-decoration: none;
            width: 320px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            border: 1px solid #eee;
            transition: all 0.3s ease;
            display: block;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          }
        `}
      </style>

    </div>
  );
}

// STYLES
const pageContainer = { 
  padding: '0', 
  backgroundColor: '#fdfdfd', 
  minHeight: '100vh', 
  fontFamily: '"Open Sans", Arial, sans-serif' 
};

const topHeader = {
  background: '#fff',
  height: '110px',
  padding: '0 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const headerStrip = { 
  background: '#00AEEF', 
  color: 'white', 
  padding: '40px 50px', 
  textAlign: 'center', 
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
};

const headerTitle = { 
  margin: '0', 
  fontSize: '26px', 
  fontWeight: '800', 
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

const headerSubtitle = { 
  margin: '8px 0 0 0', 
  opacity: '0.9', 
  fontSize: '14px',
  fontWeight: '400'
};

const gridContainer = { 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '30px', 
  padding: '60px 50px',
  flexWrap: 'wrap'
};

const iconCircle = { 
  width: '70px', 
  height: '70px', 
  borderRadius: '50%', 
  background: '#00AEEF', 
  color: 'white', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  margin: '0 auto 25px auto', 
  fontSize: '28px' 
};

const cardTitle = { 
  fontSize: '18px', 
  color: '#002366', 
  fontWeight: '700', 
  marginBottom: '15px' 
};

const cardDescription = {
  fontSize: '14px',
  color: '#666',
  lineHeight: '1.6',
  marginBottom: '20px'
};

const goBtn = { 
  fontSize: '13px', 
  fontWeight: '800', 
  color: '#00AEEF', 
  textTransform: 'uppercase',
  borderTop: '1px solid #eee',
  paddingTop: '15px'
};

const backHomeLink = { 
  color: '#00AEEF', 
  textDecoration: 'none', 
  fontWeight: 'bold',
  fontSize: '14px'
};