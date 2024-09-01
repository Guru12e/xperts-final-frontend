import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/colors.scss';
import '../styles/index.css';

const RoleSelection = () => {

    const navigate = useNavigate();
    function handleStudent() {
        navigate('/student-form');
    }

    function handleAlumni() {
        navigate('/alumni-form');
    }

    function handleBack() {
        navigate('/');
    }

    function handleRoleSelection() { }

    return (
        <div>
            <div className='bg-[var(--navy)] px-5 py-3'>
                <button onClick={handleBack}>
                    <p className='text-[var(--dull-white)]'>Back</p>
                </button>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-[var(--sky-blue)]">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-[var(--dull-white)] p-8 rounded-lg shadow-lg text-center"
                >
                    <h1 className="text-4xl font-bold text-[var(--deep-blue)] mb-4">Select Your Role</h1>
                    <p className="text-lg text-gray-700 mb-8">Please choose your role to proceed:</p>
                    <div className="flex justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleStudent}
                            className="bg-[var(--deep-blue)] text-white py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300"
                        >
                            Student
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleAlumni}
                            className="bg-[var(--deep-blue)] text-white py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300"
                        >
                            Alumni
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RoleSelection;
