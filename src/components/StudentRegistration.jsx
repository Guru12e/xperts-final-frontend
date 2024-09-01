import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/colors.scss";
import "../styles/index.css";
import axios from "axios";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    borderRadius: "10px",
    width: "400px",
  },
};

Modal.setAppElement("#root");

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    department: "",
    areaOfInterest: "",
    yearOfGraduation: "",
    institution: "",
    collegeId: "",
  });

  const [otp, setOtp] = useState("");
  const [otpSend, setOtpSend] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const departments = ["ECE", "CSC", "IT", "MECH", "BME", "EEE"];
  const yearsOfGraduation = [];
  for (let year = 1995; year <= 2028; year++) {
    yearsOfGraduation.push(year.toString());
  }
  const areasOfInterest = [
    "Machine Learning",
    "Web Development",
    "Data Science",
    "Cyber Security",
    "Artificial Intelligence",
  ];
  const colleges = ["PSNACET", "SSM", "Anna University"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      password,
      department,
      areaOfInterest,
      yearOfGraduation,
      institution,
      collegeId,
    } = formData;

    if (
      !fullName ||
      !email ||
      !password ||
      !department ||
      !areaOfInterest ||
      !yearOfGraduation ||
      !institution ||
      !collegeId
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      const otpResponse = await axios.post(
        "https://xperts-final-backend.onrender.com/auth/otpVerify",
        {
          email: formData.email,
          collegeId: formData.collegeId,
        }
      );

      if (otpResponse.status === 200) {
        setEmailSent(true);
        setIsModalOpen(true);
        setOtpSend(otpResponse.data.message);
      } else if (otpResponse.status === 201) {
        setError("User email already exists.");
        return;
      } else if (otpResponse.status === 202) {
        setError("College Id already exists.");
        return;
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (e) {
      console.error("Error sending OTP:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setLoading(true);

    try {
      if (otpSend !== otp) {
        setError("Invalid OTP");
        return;
      }

      const userResponse = await axios.post(
        "https://xperts-final-backend.onrender.com/auth/studentRegister",
        {
          collegeId: formData.collegeId,
          email: formData.email,
          pass: formData.password,
          dept: formData.department,
          name: formData.fullName,
          institution: formData.institution,
          yog: formData.yearOfGraduation,
          areaOfIntrest: formData.areaOfInterest,
        }
      );

      if (userResponse.status === 401) {
        setError("College Id Found");
        return;
      } else if (userResponse.status === 200) {
        localStorage.setItem("user", JSON.stringify(userResponse.data));
        setIsModalOpen(false);
        navigate("/recommend");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (e) {
      console.error("Error during registration:", e);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className='bg-sky-100 p-8'>
      <div className='flex items-center justify-center min-h-screen'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl'
        >
          <h1 className='text-3xl font-bold text-blue-900 mb-6'>
            Student Registration Form
          </h1>
          {error.length !== 0 && (
            <div className='py-2 px-4 border rounded-md border-red-400 bg-rose-200 font-semibold uppercase text-center text-md my-4'>
              {error}
            </div>
          )}
          {loading && (
            <div className='flex justify-center my-4'>
              <div className='loader'></div> {/* Loader component */}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <fieldset className='border p-4 rounded-lg mb-4'>
              <legend className='text-2xl font-semibold text-blue-900'>
                Alumni Information
              </legend>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                {[
                  { label: "Full Name", type: "text", name: "fullName" },
                  { label: "Email Address", type: "email", name: "email" },
                  { label: "Password", type: "password", name: "password" },
                  { label: "College ID", type: "text", name: "collegeId" },
                ].map(({ label, type, name }) => (
                  <div key={name}>
                    <label className='block text-gray-700'>{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className='w-full mt-1 p-2 border rounded'
                    />
                  </div>
                ))}
                <div>
                  <label className='block text-gray-700'>College Name</label>
                  <select
                    name='institution'
                    value={formData.institution}
                    onChange={handleChange}
                    className='w-full mt-1 p-2 border rounded'
                  >
                    <option value=''>Select College</option>
                    {colleges.map((college) => (
                      <option key={college} value={college}>
                        {college}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-gray-700'>
                    Department/Specialization
                  </label>
                  <select
                    name='department'
                    value={formData.department}
                    onChange={handleChange}
                    className='w-full mt-1 p-2 border rounded'
                  >
                    <option value=''>Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-gray-700'>
                    Year of Graduation
                  </label>
                  <select
                    name='yearOfGraduation'
                    value={formData.yearOfGraduation}
                    onChange={handleChange}
                    className='w-full mt-1 p-2 border rounded'
                  >
                    <option value=''>Select Year</option>
                    {yearsOfGraduation.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-gray-700'>
                    Area of Interest
                  </label>
                  <select
                    name='areaOfInterest'
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className='w-full mt-1 p-2 border rounded'
                  >
                    <option value=''>Select Area</option>
                    {areasOfInterest.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </fieldset>

            <div className='text-center mt-6'>
              <button
                className='bg-blue-500 text-white py-2 px-4 rounded'
                type='submit'
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel='OTP Verification'
      >
        <h2 className='text-xl font-bold mb-4'>OTP Verification</h2>
        <p>Please enter the OTP sent to {formData.email}</p>
        <input
          type='text'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className='w-full mt-2 p-2 border rounded'
          placeholder='Enter OTP'
        />
        <div className='text-center mt-4'>
          <button
            className='bg-blue-500 text-white py-2 px-4 rounded'
            onClick={handleOtpSubmit}
            disabled={loading}
          >
            Verify OTP
          </button>
        </div>
      </Modal>
      {loading && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
          <div className='loader'></div>
        </div>
      )}
    </div>
  );
};

export default StudentForm;
