import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// STYLES (UNCHANGED)
const pageContainer = { padding: '0', backgroundColor: '#fdfdfd', minHeight: '100vh', fontFamily: '"Open Sans", Arial, sans-serif' };
const headerStrip = { background: '#00AEEF', color: 'white', padding: '30px 50px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' };
const headerTitle = { margin: '0', fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase' };
const gridContainer = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '40px 50px' };
const deptCard = { background: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: '0.3s' };
const iconCircle = { width: '60px', height: '60px', borderRadius: '50%', background: '#00AEEF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '24px' };
const backBtn = { background: 'none', border: '2.5px solid #00AEEF', color: '#00AEEF', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: '800', marginTop: '20px' };

export default function Syllabus() {
  const [view, setView] = useState('departments');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const departments = [
    'COMPUTER SCIENCE AND ENGINEERING',
    'INFORMATION TECHNOLOGY',
    'ELECTRONICS AND COMMUNICATION ENGINEERING',
    'CSE(AI & ML)',
    'CSE(DATA SCIENCE)',
    'CSE(IOT)',
    'CIVIL ENGINEERING',
    'MECHANICAL Engineering',
    'ELECTRICAL AND ELECTRONICS Engineering',
  ];

  const years = ['1st YEAR', '2nd YEAR', '3rd YEAR', '4th YEAR'];
  const sections = ['A', 'B'];

 const subjectsData = {
  'Electronic Devices and Circuits (EDC)': [
    'Unit I: Diodes and Applications (P-N Junctions, Rectifiers, and Clippers)',
    'Unit II: Bipolar Junction Transistors (BJT) and Biasing Techniques',
    'Unit III: FETs and Digital Circuits (JFET, MOSFET, and CMOS basics)',
    'Unit IV: Combinational Logic Circuits (Adders, Comparators, and Decoders)',
    'Unit V: Sequential Logic Circuits (Flip-Flops, Registers, and Counters)'
  ],

  'Digital Logic Design (DLD)': [
    'Unit I: Introduction to Digital Systems',
    'Unit II: Boolean Algebra and Logic Gates',
    'Unit III: Combinational Logic Design',
    'Unit IV: Sequential Logic Design',
    'Unit V: Memory and Programmable Logic Devices'
  ],

  'Signals and Systems (SS)': [
    'Unit I: Introduction to Signals and Systems',
    'Unit II: Linear Time-Invariant Systems',
    'Unit III: Fourier Series and Transforms',
    'Unit IV: Laplace and Z-Transforms',
    'Unit V: Sampling and Reconstruction'
  ],

  'Network Analysis and Synthesis (NAS)': [
    'Unit I: Network Topology (Kirchhoff’s Laws, Network Theorems)',
    'Unit II: Transient Analysis (RL, RC, RLC Circuits)',
    'Unit III: Sinusoidal Steady State Analysis',
    'Unit IV: Two Port Networks',
    'Unit V: Network Synthesis'
  ],

  'Analog Circuits (AC)': [
    'Unit I: Amplifiers (Small Signal Analysis)',
    'Unit II: Frequency Response of Amplifiers',
    'Unit III: Feedback Amplifiers',
    'Unit IV: Oscillators',
    'Unit V: Power Amplifiers'
  ]
};

 const currentUnits = (subjectsData[selectedSubject] || []).map((unit, index) => {
  let status = 'Not Completed';
  let color = '#FF4D4F'; // red

  if (index < 2) {
    status = 'Completed';
    color = '#28A745'; // green
  } else if (index === 2) {
    status = 'In Progress';
    color = '#FFD700'; // yellow
  }

  return {
    id: index,
    title: unit,
    status,
    color
  };
});

const chartData = [
  {
    name: 'Completed',
    value: currentUnits.filter(u => u.status === 'Completed').length,
    color: '#28A745'
  },
  {
    name: 'In Progress',
    value: currentUnits.filter(u => u.status === 'In Progress').length,
    color: '#FFD700'
  },
  {
    name: 'Not Completed',
    value: currentUnits.filter(u => u.status === 'Not Completed').length,
    color: '#FF4D4F'
  }
];

  // VIEW 1
  if (view === 'departments') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>Select Department</h2></div>
        <div style={gridContainer}>
          {departments.map(dept => (
            <div key={dept} style={deptCard} onClick={() => { setSelectedDept(dept); setView('years'); }}>
              <div style={iconCircle}><i className="fas fa-university"></i></div>
              <h3 style={{ fontSize: '14px' }}>{dept}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // VIEW 2
  if (view === 'years') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>{selectedDept}</h2></div>
        <div style={gridContainer}>
          {years.map(year => (
            <div key={year} style={deptCard} onClick={() => { setSelectedYear(year); setView('sections'); }}>
              <div style={{ ...iconCircle, background: '#FFD700' }}>
                <i className="fas fa-calendar-alt" style={{ color: '#333' }}></i>
              </div>
              <h3>{year}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={backBtn} onClick={() => setView('departments')}>← Back</button>
        </div>
      </div>
    );
  }

  // VIEW 3
  if (view === 'sections') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>{selectedYear}</h2></div>
        <div style={{ ...gridContainer, maxWidth: '800px', margin: '0 auto' }}>
          {sections.map(sec => (
            <div key={sec} style={deptCard} onClick={() => { setSelectedSection(sec); setView('subjects'); }}>
              <div style={iconCircle}><i className="fas fa-users"></i></div>
              <h3>SECTION {sec}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={backBtn} onClick={() => setView('years')}>← Back</button>
        </div>
      </div>
    );
  }

  // VIEW 4
  if (view === 'subjects') {
    return (
      <div style={pageContainer}>
        <div style={headerStrip}><h2 style={headerTitle}>Select Subject (ECE)</h2></div>
        <div style={gridContainer}>
          {Object.keys(subjectsData).map(sub => (
            <div key={sub} style={deptCard} onClick={() => { setSelectedSubject(sub); setView('analytics'); }}>
              <div style={{ ...iconCircle, background: '#FFD700' }}>
                <i className="fas fa-book" style={{ color: '#333' }}></i>
              </div>
              <h3 style={{ fontSize: '14px' }}>{sub}</h3>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={backBtn} onClick={() => setView('sections')}>← Back</button>
        </div>
      </div>
    );
  }

  // VIEW 5 (FINAL)
  return (
    <div style={pageContainer}>
      <div style={headerStrip}>
        <h2>{selectedSubject}</h2>
        <p>{selectedDept} | {selectedYear} | Sec {selectedSection}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', maxWidth: '1200px', margin: '0 auto', padding: '50px 20px', alignItems: 'start' }}>

        {/* CHART */}
        <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #eee', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '18px', color: '#002366', marginBottom: '20px' }}>Overall Completion</h2>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} innerRadius={70} outerRadius={105} paddingAngle={5} dataKey="value" startAngle={90} endAngle={450} stroke="none">
                  {chartData.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="rect" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* UNITS LIST */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {currentUnits.map((unit) => (
            <div key={unit.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #eee', borderLeft: `6px solid ${unit.color}` }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>{unit.title}</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>
                Status: <span style={{ color: unit.color, fontWeight: 'bold' }}>{unit.status}</span>
              </p>
            </div>
          ))}
          <div style={{ textAlign: 'right' }}>
            <button style={backBtn} onClick={() => setView('subjects')}>← Back to Subjects</button>
          </div>
        </div>

      </div>
    </div>
  );
}