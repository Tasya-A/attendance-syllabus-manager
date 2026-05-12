// 1. Name your database
use('AttendanceERP');

// 2. Create the Attendance collection for your Attendance.jsx page
db.getCollection('attendance').insertMany([
  { "studentId": "TAS01", "date": new Date(), "status": "Present", "subject": "VLSI" },
  { "studentId": "TAS01", "date": new Date(), "status": "Absent", "subject": "Embedded Systems" }
]);

// 3. Create the Syllabus collection for your Syllabus.jsx page
db.getCollection('syllabus').insertMany([
  { "subject": "VLSI", "topic": "CMOS Fabrication", "status": "Completed" },
  { "subject": "Embedded Systems", "topic": "8051 Microcontroller", "status": "In Progress" }
]);

console.log("Database 'AttendanceERP' and collections created successfully!");