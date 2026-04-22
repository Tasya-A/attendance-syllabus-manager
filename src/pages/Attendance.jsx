import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// STYLES AT TOP TO PREVENT HOISTING ERRORS
const pageContainer = { padding: '0', backgroundColor: '#fdfdfd', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' };
const headerStrip = { background: '#00AEEF', color: 'white', padding: '30px 50px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
const headerTitle = { margin: '0', fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase' };
const headerSubtitle = { margin: '5px 0 0 0', opacity: '0.9', fontSize: '14px' };
const gridContainer = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '40px 50px' };
const deptCard = { background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #eee' };
const iconCircle = { width: '60px', height: '60px', borderRadius: '50%', background: '#00AEEF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px' };
const cardTitle = { fontSize: '16px', color: '#333', fontWeight: '700' };
const tableWrapper = { margin: '0 40px', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' };
const backBtn = { background: 'none', border: '2px solid #00AEEF', color: '#00AEEF', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' };

export default function Attendance() {
    // 1. STATE: departments -> sections -> records
  const [view, setView] = useState('departments'); 
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedYear, setSelectedYear] = useState(''); // <--- ADD THIS LINE
  const [selectedSection, setSelectedSection] = useState('');
  // 2. DATA ADDED: 10 random students for ECE-A/B demo
  const studentRecords = [
    { id: 1, name: 'Alice Johnson', rollNumber: '24AG1A0401', attended: 48, total: 60, percent: 80, status: 'Eligible' },
    { id: 2, name: 'Bob Smith', rollNumber: '24AG1A0402', attended: 42, total: 60, percent: 70, status: 'Not Eligible' },
    { id: 3, name: 'Charlie Brown', rollNumber: '24AG1A0403', attended: 55, total: 60, percent: 91.67, status: 'Eligible' },
    { id: 4, name: 'Diana Prince', rollNumber: '24AG1A0404', attended: 39, total: 60, percent: 65, status: 'Not Eligible' },
    { id: 5, name: 'Eve Wilson', rollNumber: '24AG1A0405', attended: 58, total: 60, percent: 96.67, status: 'Eligible' },
    { id: 6, name: 'Frank Miller', rollNumber: '24AG1A0406', attended: 45, total: 60, percent: 75, status: 'Not Eligible' },
    { id: 7, name: 'Grace Lee', rollNumber: '24AG1A0407', attended: 50, total: 60, percent: 83.33, status: 'Eligible' },
    { id: 8, name: 'Henry Davis', rollNumber: '24AG1A0408', attended: 40, total: 60, percent: 66.67, status: 'Not Eligible' },
    { id: 9, name: 'Ivy Chen', rollNumber: '24AG1A0409', attended: 52, total: 60, percent: 86.67, status: 'Eligible' },
    { id: 10, name: 'Jack Taylor', rollNumber: '24AG1A0410', attended: 47, total: 60, percent: 78.33, status: 'Not Eligible' }
  ];

const departments =['COMPUTER SCIENCE AND ENGINEERING','INFORMATION TECHNOLOGY','ELECTRONICS AND COMMUNICATION ENGINEERING','CSE(AI & ML)','CSE(DATA SCIENCE)','CSE(IOT)','CIVIL ENGINEERING','MECHANICAL Engineering','ELECTRICAL AND ELECTRONICS Engineering',];
const years = ['1st YEAR', '2nd YEAR', '3rd YEAR', '4th YEAR'];
const sections =['A', 'B']; // Explicitly named to show "A" and "B"

  if (view === 'departments') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>Select Department</h2></div>
        <div style={gridContainer}>
          {departments.map(dept => (
            <div key={dept} style={deptCard} onClick={() => { setSelectedDept(dept); setView('years'); }}>
              <div style={iconCircle}><i className="fas fa-university"></i></div>
              <h3 style={cardTitle}>{dept}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (view === 'years') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>{selectedDept}</h2><p style={headerSubtitle}>Select Academic Year</p></div>
        <div style={gridContainer}>
          {years.map(year => (
            <div key={year} style={deptCard} onClick={() => { setSelectedYear(year); setView('sections'); }}>
              <div style={{...iconCircle, background: '#FFD700'}}><i className="fas fa-graduation-cap" style={{color:'#333'}}></i></div>
              <h3 style={cardTitle}>{year}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}><button style={backBtn} onClick={() => setView('departments')}>← Change Department</button></div>
      </div>
    );
  }

  if (view === 'sections') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>{selectedDept} - {selectedYear}</h2><p style={headerSubtitle}>Select Section</p></div>
        <div style={{...gridContainer, maxWidth: '800px', margin: '0 auto'}}>
          {sections.map(sec => (
            <div key={sec} style={deptCard} onClick={() => { setSelectedSection(sec); setView('records'); }}>
              <div style={iconCircle}><i className="fas fa-users"></i></div>
              <h3 style={cardTitle}>SECTION {sec}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}><button style={backBtn} onClick={() => setView('years')}>← Change Year</button></div>
      </div>
    );
  }

  return (
    <div style={pageContainer}>
      <div style={headerStrip}>
        <h2>{selectedDept}</h2>
        <p style={headerSubtitle}>{selectedYear} | SECTION {selectedSection} | Aggregate Attendance</p>
      </div>
      <div style={tableWrapper}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#00AEEF', color: 'white' }}>
            <tr><th style={{padding:'15px', textAlign:'left'}}>Hall Ticket No</th><th style={{padding:'15px', textAlign:'left'}}>Student Name</th><th style={{padding:'15px', textAlign:'left'}}>Sessions</th><th style={{padding:'15px', textAlign:'left'}}>Percentage</th><th style={{padding:'15px', textAlign:'left'}}>SEE Status</th></tr>
          </thead>
          <tbody>
            {studentRecords.map((s, index) => (
              <tr key={s.id} style={{ background: index % 2 === 0? '#fff' : '#f9f9f9', borderBottom: '1px solid #eee' }}>
                <td style={{padding:'15px'}}>{s.id}</td><td style={{padding:'15px', fontWeight:'600'}}>{s.name}</td><td style={{padding:'15px'}}>{s.attended} / {s.total}</td>
                <td style={{padding:'15px', color: s.percent < 65? '#d32f2f' : '#2e7d32', fontWeight: 'bold'}}>{s.percent}%</td>
                <td style={{padding:'15px'}}><span style={getBadgeStyle(s.percent)}>{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'center' }}><button style={backBtn} onClick={() => setView('sections')}>← Back to Sections</button></div>
    </div>
  );
}

const getBadgeStyle = (percent) => {
  let bgColor = '#2e7d32'; 
  if (percent < 75 && percent >= 65) bgColor = '#ed6c02';
  if (percent < 65) bgColor = '#d32f2f';
  return { backgroundColor: bgColor, color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' };
};