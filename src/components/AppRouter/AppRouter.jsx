import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { PERSONAL_ACCOUNT_ROUTE } from '../utils/consts';
import { authRoutes } from '../utils/routes';

const AppRouter = () => {
  return (
    <>
      <Routes>
        {authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )}
        <Route path="*" element={<Navigate to={PERSONAL_ACCOUNT_ROUTE} replace />} />
      </Routes>
    </>
  );
};

export default AppRouter;
