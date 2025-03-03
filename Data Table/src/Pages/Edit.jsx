import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Component/Header';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Edituser = () => {
  const { id } = useParams();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userCourses, setUserCourses] = useState([]);
  const [userDate, setUserDate] = useState('');
  const [userStatus, setUserStatus] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const navigateTo = useNavigate();

  const location = useLocation();
  const user = location.state;

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedUsers);
  
    const currentUser = storedUsers.find(user => user.id === parseInt(id));
    if (currentUser) {
      setUserName(currentUser.userName);
      setUserEmail(currentUser.userEmail);
      setUserPassword(currentUser.userPassword);
      setUserGender(currentUser.userGender);
      setUserCourses(currentUser.userCourses);
      setUserDate(currentUser.userDate);
      setUserStatus(currentUser.userStatus);
    } else {
      toast.error("User not found");
      navigateTo('/view'); // Redirect to user list if user not found
    }
  }, [id, navigateTo]);
  
  const handleCourseSelection = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setUserCourses([...userCourses, value]);
    } else {
      setUserCourses(userCourses.filter((course) => course !== value));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if (!userName || !userEmail || !userPassword || !userGender || !userCourses.length || !userDate || !userStatus) {
      toast.error("All fields are required.");
      return;
    }
  
    const updatedUser = {
      id: parseInt(id),  // Ensure the ID is correctly retained
      userName,
      userEmail,
      userPassword,
      userGender,
      userCourses,
      userDate,
      userStatus,
    };
  
    const updatedUsers = allUsers.map(user => user.id === parseInt(id) ? updatedUser : user);
  // Ensure the data is properly updated in local storage before navigating
localStorage.setItem('users', JSON.stringify(updatedUsers));
setAllUsers(updatedUsers);

// Toast and then navigate
toast.success("User updated successfully.", {
  onClose: () => navigateTo('/view')  // Redirect after toast success
});

  };
  
  return (
    <div>
      <Header />
      <h2 align="center" className='mt-5'>Edit User</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4 border p-4 mb-5 shadow">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control" id="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
              </div>

              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="userEmail" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
              </div>

              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="userPassword" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div>
                  <input type="radio" id="male" name="userGender" value="male" checked={userGender === 'male'} onChange={(e) => setUserGender(e.target.value)} />
                  <label htmlFor="male" className="form-label" style={{ marginLeft: '10px' }}> Male</label><br />
                  <input type="radio" id="female" name="userGender" value="female" checked={userGender === 'female'} onChange={(e) => setUserGender(e.target.value)} />
                  <label htmlFor="female" className="form-label" style={{ marginLeft: '10px' }}> Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Courses</label>
                <div>
                  {['Html', 'CSS', 'Bootstrap', 'JS', 'ReactJs', 'NodeJs', 'Python', 'Photoshop'].map((course) => (
                    <div key={course} style={{ display: 'inline-block', marginRight: '10px' }}>
                      <input
                        type="checkbox"
                        value={course}
                        onChange={handleCourseSelection}
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
                <label htmlFor="userStatus" className="form-label">Status</label><br />
                <select id="userStatus" className="form-select" onChange={(e) => setUserStatus(e.target.value)} value={userStatus}>
                  <option value="">--- Select ---</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <button type="submit" className="btn btn-dark d-block mx-auto mt-4">Update</button>
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
        transition={Bounce}
      />
    </div>
  );
};

export default Edituser;
