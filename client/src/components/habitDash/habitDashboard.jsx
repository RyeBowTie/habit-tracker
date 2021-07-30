import React, { useState } from 'react';

import Header from '../habitheader/HabitHeader';
import CreateHabit from '../createhabits/CreateHabit';
import DeleteHabit from '../delethabits/DeleteHabit';
import UpdateHabit from '../uphabit/UpdateHabit';

const HabitDashboard = ({ habits }) => {
    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'create') {
            return <CreateHabit />
        } else if (currentPage === 'update') {
            return <UpdateHabit habits={habits}/>
        } else if (currentPage === 'delete') {
            return <DeleteHabit habits={habits}/>
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <>
            <Header handlePageChange= {handlePageChange}/>
            {renderPage()}
        </>
    )
};

export default HabitDashboard