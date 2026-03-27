import React from 'react';
import { Link } from 'react-router-dom';
import { myCourses as dummyCourses } from '../../data/coursesData';

const Courses = () => {

  return (
    <div className="main--fluid" style={{ padding: '2rem' }}>
      <div className="enrollclass">
        <div className="enrollclass__nav" style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ margin: 0 }}>Danh sách lớp học đã tham gia</h2>
        </div>
        <table className="enrollclass__table" style={{ width: '100%' }}>
          <thead>
            <tr className="enrollclass__table__head">
              <th className="text--middle">STT</th>
              <th>Môn học</th>
              <th>Nhóm</th>
              <th>Học kỳ</th>
              <th>Trạng thái</th>
              <th className="text--middle" style={{ textAlign: 'center' }}>Kết quả</th>
            </tr>
          </thead>
          <tbody>
            {dummyCourses.map((c) => (
              <tr key={c.stt}>
                <td className="text--middle" style={{ textAlign: 'center' }}>{c.stt}</td>
                <td style={{ fontWeight: '500' }}>{c.subject}</td>
                <td>{c.group}</td>
                <td style={{ color: 'var(--text-muted)' }}>{c.term}</td>
                <td><span className="status-ac" style={{ color: '#00cc66' }}>{c.status}</span></td>
                <td className="text--middle" style={{ textAlign: 'center' }}>
                  <Link to="/history" className="link--red" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Kết quả</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
