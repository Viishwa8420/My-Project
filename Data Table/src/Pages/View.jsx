import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEdit } from "react-icons/fa";
import { MdDelete, MdHeight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Bounce } from 'react-toastify';

const ViewUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [multiDelete, setMultiDelete] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(savedUsers);
    setFilteredUsers(savedUsers);
  }, []);

  const handleDelete = (id) => {
    const updatedUsers = allUsers.filter((user) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.error("User deleted successfully.");
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const filterByStatus = (status) => {
    const updatedUsers = allUsers.filter((user) => user.userStatus === status);
    setFilteredUsers(status === '' ? allUsers : updatedUsers);
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchInput(searchValue);
    const filtered = allUsers.filter((user) =>
      user.userName.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(filtered);
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortOrder(sortValue);
    setFilteredUsers(sortRecords(filteredUsers, sortValue));
  };

  const sortRecords = (records, order) => {
    if (order === 'az') {
      return [...records].sort((a, b) => a.userName.localeCompare(b.userName));
    } else if (order === 'za') {
      return [...records].sort((a, b) => b.userName.localeCompare(a.userName));
    }
    return records;
  };

  const handleMultiDelete = (id, checked) => {
    let selectedUsers = [...multiDelete];
    if (checked) {
      selectedUsers.push(id);
    } else {
      selectedUsers = selectedUsers.filter((userId) => userId !== id);
    }
    setMultiDelete(selectedUsers);
  };

  const deleteMultipleUsers = () => {
    if (multiDelete.length === 0) {
      toast.warn("Minimum 1 user should be selected.");
      return;
    }
    const updatedUsers = allUsers.filter((user) => !multiDelete.includes(user.id));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setMultiDelete([]);
    toast.error("Selected users deleted successfully.");
  };

  const statusChange = (status, id) => {
    let updatedUsers = allUsers.map((user) => {
      if (user.id === id) {
        user.userStatus = status === "inactive" ? "active" : "inactive";
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    toast.success("Status updated successfully...", {
      autoClose: 1000,
    });
  };

  const toggleMultipleStatus = () => {
    let updatedUsers = allUsers.map((user) => {
      if (multiDelete.includes(user.id)) {
        user.userStatus = user.userStatus === "active" ? "inactive" : "active";
      }
      return user;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setAllUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    toast.success("Status updated for selected users...", {
      autoClose: 1000,
    });
  };

  return (
    <div>
      <Header />
      <h2 align="center" className='my-5'>View Users</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-3 mx-auto d-flex justify-content-evenly">
            <div className="mb-3">
              <label htmlFor="searchUser" className="form-label">Search by Name</label>
              <input
                type="text"
                id="searchUser"
                placeholder='Search Users by Name'
                className="form-control"
                onChange={handleSearch}
                value={searchInput}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sortUsers" className="form-label">Sort Users</label>
              <select id="sortUsers" className="form-select" onChange={handleSort} value={sortOrder}>
                <option value="">--- Select Sorting ---</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Filter by Status</label><br />
              <select className="form-select" onChange={(e) => filterByStatus(e.target.value)}>
                <option value="">--- Select Status ---</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <button className="btn mt-3" style={{height:"50px",border:"0",color:"red",fontSize:"30px" }} onClick={deleteMultipleUsers}><MdDelete/></button>
            <button className="btn mt-4" style={{border:"0",color:"white",backgroundColor:"#3498db",height:"40px",fontSize:"18px"}} onClick={toggleMultipleStatus}>
              Toggle Status
            </button>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Courses</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => handleMultiDelete(user.id, e.target.checked)}
                    />
                  </td>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userCourses.join(', ')}</td>
                  <td>
                    <button
                      className={`btn btn-${user.userStatus === 'active' ? 'success' : 'danger'}`}
                      onClick={() => statusChange(user.userStatus, user.id)}
                    >
                      {user.userStatus}
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger me-2" onClick={() => handleDelete(user.id)}><MdDelete/></button>
                    <button className="btn btn-info" onClick={() => navigateTo(`/edit/${user.id}`)}><FaEdit /></button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default ViewUsers;
