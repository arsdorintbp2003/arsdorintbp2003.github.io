import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PnfPage from '../pnf/PnfPage';
import PnfInfo from '../pnf/PnfInfo';

function ThoRoutes() {
	return (
        <Routes>
	        <Route path="/" element={<PnfPage />} />
	        <Route path="/Paper-football" element={<PnfInfo />} />
        </Routes>
    );
}

export default ThoRoutes;
