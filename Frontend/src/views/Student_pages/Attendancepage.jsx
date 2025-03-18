import React, { useState } from 'react';
import "../../css/Attendance.css";

const AttendancePage = () => {
  const attendance = [
    { date: '2025-03-10', course: 'Mathematics', status: 'Present' },
    { date: '2025-03-11', course: 'Science', status: 'Absent' },
    { date: '2025-03-12', course: 'History', status: 'Present' },
    { date: '2025-03-13', course: 'Mathematics', status: 'Late' },
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getWeeksInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const weeks = [];
    let currentWeek = [];
    let currentDateIter = new Date(firstDay);

    while (currentDateIter <= lastDay) {
      currentWeek.push(new Date(currentDateIter));
      if (currentWeek.length === 7 || currentDateIter.getDate() === lastDay.getDate()) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      currentDateIter.setDate(currentDateIter.getDate() + 1);
    }
    return weeks;
  };

  const weeks = getWeeksInMonth();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
  };

  const attendanceMap = attendance.reduce((acc, record) => {
    const date = new Date(record.date);
    acc[date.toDateString()] = record.status;
    return acc;
  }, {});

  return (
    <div className="all-elements">
      <div id="header-fixed" className="header-dark">
        <a className="header-icon-left open-left-sidebar" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <i className="fa fa-navicon"></i>
        </a>
        <a className="header-logo" href="#"></a>
        <div className="header-menu-overlay"></div>
      </div>
      <div id="content" className="snap-content">
        <div className="header-clear-large"></div>

        <div className="container heading-style-5">
          <p style={{ textAlign: 'center' }}>
          </p>
          <i className="fa fa-calendar heading-icon"></i>
          <div className="line bg-black"></div>
        </div>

        <div className="toolbar center" style={{ textAlign: 'center' }}>
          <button className="btn link left" onClick={previousMonth}>
            Previous Month
          </button>
          <label>{formatDate(currentDate)}</label>
          <button className="btn link right" onClick={nextMonth}>
            Next Month
          </button>
        </div>

        <div className="content">
          <table className="calendar table table-responsive table-bordered">
            <thead>
              <tr className="dayNames">
                {daysOfWeek.map((day, index) => (
                  <th key={index}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, weekIndex) => (
                <tr key={weekIndex} className="week">
                  {week.map((day, dayIndex) => {
                    const dateStr = day.toDateString();
                    const status = attendanceMap[dateStr] || '';
                    const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                    return (
                      <td key={dayIndex} className={`dayContent ${!isCurrentMonth ? 'disabled' : ''}`}>
                        <div className="align-right calendarDateText">{day.getDate()}</div>
                        {status && (
                          <div className="dayDetail">
                            <p>*Status: {status}</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
