import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/colors.scss";

export default function AppBar() {
  const [isTab, setisTab] = useState(window.innerWidth <= 824);
  const [isMobile, setisMobile] = useState(window.innerWidth <= 640);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isUser, setisUser] = useState(false);
  const [user, setUser] = useState();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const [searchFields, setSearchFields] = useState({
    institution: "",
    dept: "",
    areaOfIntrest: "",
  });

  const areasOfInterest = [
    "Machine Learning",
    "Web Development",
    "Data Science",
    "Cyber Security",
    "Artificial Intelligence",
  ];
  const colleges = ["PSNACET", "SSM", "Anna University"];
  const departments = ["ECE", "CSC", "IT", "MECH", "BME", "EEE"];

  useEffect(() => {
    const handleResize = () => {
      setisTab(window.innerWidth <= 824);
      setisMobile(window.innerWidth <= 640);
    };

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setisUser(true);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/role");
  }

  function handleLogin() {
    navigate("/login");
  }

  function toggleSidebar() {
    setisSidebarOpen(!isSidebarOpen);
  }

  function toggleSearchModal() {
    setIsSearchModalOpen(!isSearchModalOpen);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    const filteredSearchFields = {};

    Object.keys(searchFields).forEach((key) => {
      if (searchFields[key]) {
        filteredSearchFields[key] = searchFields[key];
      }
    });

    navigate("/recommend", { state: filteredSearchFields });
    toggleSearchModal();
  }

  function handleInputChange(e) {
    setSearchFields({
      ...searchFields,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className='bg-[var(--navy)] px-5 py-3 flex justify-between items-center sm:px-10 sm:py-4'>
        <p
          className='text-xl text-[var(--teal)] font-bold sm:text-2xl lg:text-3xl cursor-pointer'
          onClick={() => {
            navigate("/");
          }}
        >
          ConnectAL.
          {isTab && <br />}
          {!isTab && (
            <span className='text-xl text-[var(--dull-white)] font-normal mx-1 sm:mx-3 sm:text-2xl lg:text-3xl'>
              |
            </span>
          )}
          <span className='text-xs text-[var(--dull-white)] font-normal sm:text-base lg:text-lg'>
            Connect, Learn, Grow: Your Alumni Network
          </span>
        </p>

        {isUser ? (
          <div className='flex items-center'>
            <h1 className='text-lg text-[var(--dull-white)] mr-5'>
              Welcome, {user.name}
            </h1>
            <button
              className='secondary-btn text-[var(--dull-white)]'
              onClick={toggleSearchModal}
            >
              Search
            </button>
          </div>
        ) : isMobile ? (
          <div
            className='text-[var(--dull-white)] cursor-pointer'
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </div>
        ) : (
          <div>
            <button className='primary-btn mr-5' onClick={handleRegister}>
              Register
            </button>
            <button className='primary-btn' onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>

      {isSidebarOpen && (
        <div className='w-2/3 h-full fixed inset-0 bg-[var(--deep-blue)] text-[var(--dull-white)] p-6 z-50'>
          <ul className='space-y-4'>
            <li className='hover:text-[var(--teal)] cursor-pointer'>Home</li>
            <li className='hover:text-[var(--teal)] cursor-pointer'>
              About Us
            </li>
            <li className='hover:text-[var(--teal)] cursor-pointer'>
              Features
            </li>
            <li className='hover:text-[var(--teal)] cursor-pointer'>
              Join Now
            </li>
            <li className='hover:text-[var(--teal)] cursor-pointer'>
              Contact Us
            </li>
          </ul>
        </div>
      )}

      {isSearchModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-1/3'>
            <h2 className='text-xl font-bold mb-4'>
              Search for Recommendations
            </h2>
            <form onSubmit={handleSearchSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-medium'>Institution</label>
                <select
                  name='institution'
                  value={searchFields.institution}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded'
                >
                  <option value=''>Select Institution</option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium'>Department</label>
                <select
                  name='dept'
                  value={searchFields.dept}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded'
                >
                  <option value=''>Select Department</option>
                  {departments.map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium'>
                  Area of Interest
                </label>
                <select
                  name='areaOfIntrest'
                  value={searchFields.areaOfIntrest}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded'
                >
                  <option value=''>Select Area of Interest</option>
                  {areasOfInterest.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='mr-4 px-4 py-2 bg-gray-200 rounded'
                  onClick={toggleSearchModal}
                >
                  Cancel
                </button>
                <button type='submit' className='primary-btn'>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
