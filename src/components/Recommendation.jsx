import axios from "axios";
import React, { useEffect, useState } from "react";
import AppBar from "./AppBar";
import { useLocation } from "react-router-dom";

const Recommendation = () => {
  const [users, setUsers] = useState([]);
  const [userText, setUserText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const searchParams = location.state;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        let requestData;

        if (searchParams) {
          requestData = searchParams;
        } else if (storedUser) {
          requestData = {
            dept: storedUser.dept,
            institution: storedUser.institution,
            areaOfIntrest: storedUser.areaOfIntrest,
          };
        }

        if (requestData) {
          const usersRes = await axios.post(
            "https://xperts-final-backend.onrender.com/auth/getRecommend",
            requestData
          );

          if (usersRes.status === 404) {
            setUserText("No recommendations found.");
          } else if (usersRes.status === 200) {
            const allUsers = usersRes.data.users;

            const filteredUsers = allUsers.filter(
              (user) => user.email !== storedUser.email
            );

            setUsers(filteredUsers);
          }
        } else {
          setUsers([]);
          setUserText("No user data or search parameters found.");
        }
      } catch (error) {
        setUsers([]);
        setUserText("No user data or search parameters found.");
      }
    };

    fetchRecommendations();
  }, [location]);

  return (
    <div>
      <AppBar />
      <div className='max-w-7xl mx-auto p-6'>
        <h1 className='text-3xl font-bold text-center mb-8'>Recommendations</h1>
        {users.length > 0 ? (
          <div className='grid md:grid-cols-4 gap-6'>
            {users.map((user) => (
              <div
                key={user.id}
                className='border shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300'
              >
                <h1 className='text-xl font-semibold mb-2'>{user.name}</h1>
                <div className='flex justify-between text-sm text-gray-600'>
                  <h2 className='font-medium'>Email:</h2>
                  <p>{user.email}</p>
                </div>
                <div className='flex justify-between text-sm text-gray-600'>
                  <h2 className='font-medium'>Dept:</h2>
                  <p>{user.dept}</p>
                </div>
                <div className='flex justify-between text-sm text-gray-600'>
                  <h2 className='font-medium'>Institution:</h2>
                  <p>{user.institution}</p>
                </div>
                <div className='flex justify-between text-sm text-gray-600'>
                  <h2 className='font-medium'>Year Of Graduation:</h2>
                  <p>{user.yearOfGraduation}</p>
                </div>
                <div className='mt-2 text-sm text-gray-600'>
                  <p>
                    <strong>Area Of Interest:</strong> {user.areaOfIntrest}
                  </p>
                  <p>
                    <strong>College Id:</strong> {user.collegeId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-lg text-gray-500 mt-6'>{userText}</p>
        )}
      </div>
    </div>
  );
};

export default Recommendation;
