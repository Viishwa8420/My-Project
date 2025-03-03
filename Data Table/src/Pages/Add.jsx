import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userCourses, setUserCourses] = useState([]);
  const [userDate, setUserDate] = useState('');
  const [userStatus, setUserStatus] = useState('');
  const [userRecords, setUserRecords] = useState([]);
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setUserCourses((prevCourses) =>
      checked ? [...prevCourses, value] : prevCourses.filter((course) => course !== value)
    );
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || [];
    setUserRecords(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !userPassword || !userGender || !userCourses.length || !userDate || !userStatus) {
      toast.error("All fields are required.");
      return false;
    }

    let newUser = {
      id: Math.floor(Math.random() * 10000),
      userName,
      userEmail,
      userPassword,
      userGender,
      userCourses,
      userDate,
      userStatus,
    };

    let updatedRecords = [...userRecords, newUser];
    localStorage.setItem('users', JSON.stringify(updatedRecords));
    toast.success("User added successfully!");
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserGender('');
    setUserCourses([]);
    setUserDate('');
    setUserStatus('');
    
    navigate('/view');
  };

  return (
    <div>
      <Header />
      <h2 align="center" className="mt-5">Add User</h2>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4 border p-4 mb-5 shadow">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control" id="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
              </div>

              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="userEmail" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
              </div>

              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="userPassword" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" value="male" checked={userGender === 'male'} onChange={(e) => setUserGender(e.target.value)} />
                  <label htmlFor="male" className="form-label" style={{ marginLeft: '10px' }}> Male</label><br />
                  <input type="radio" id="female" name="gender" value="female" checked={userGender === 'female'} onChange={(e) => setUserGender(e.target.value)} />
                  <label htmlFor="female" className="form-label" style={{ marginLeft: '10px' }}> Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Course</label>
                <div>
                  {['Html', 'CSS', 'Bootstrap', 'JS', 'ReactJs', 'NodeJs','Python', 'Photoshop'].map((course) => (
                    <div key={course} style={{ display: 'inline-block', marginRight: '10px' }}>
                      <input
                        type="checkbox"
                        value={course}
                        onChange={handleCourseChange}
                        checked={userCourses.includes(course)}
                      />
                      <label style={{ marginLeft: '5px' }}>{course}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="userDate" className="form-label">Date</label><br />
                <input type="date" id="userDate" className="form-control" onChange={(e) => setUserDate(e.target.value)} value={userDate} />
              </div>

              <div className="mb-3">
                <label htmlFor="userStatus" className="form-label">Select Status</label><br />
                <select id="userStatus" className="form-select" onChange={(e) => setUserStatus(e.target.value)} value={userStatus}>
                  <option value="">--- Select ---</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <button type="submit" className="btn btn-dark d-block mx-auto mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
    </div>
  );
};

export default AddUser;
