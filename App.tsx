import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ReadingLibraryScreen from './screens/ReadingLibraryScreen';
import ReadingPracticeScreen from './screens/ReadingPracticeScreen';
import ListeningLibraryScreen from './screens/ListeningLibraryScreen';
import ListeningPracticeScreen from './screens/ListeningPracticeScreen';
import HistoryScreen from './screens/HistoryScreen';
import ReportScreen from './screens/ReportScreen';
import { RoutePath } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePath.LOGIN} element={<LoginScreen />} />
        <Route path={RoutePath.DASHBOARD} element={<DashboardScreen />} />
        <Route path={RoutePath.READING_LIB} element={<ReadingLibraryScreen />} />
        <Route path={RoutePath.READING_PRACTICE} element={<ReadingPracticeScreen />} />
        <Route path={RoutePath.LISTENING_LIB} element={<ListeningLibraryScreen />} />
        <Route path={RoutePath.LISTENING_PRACTICE} element={<ListeningPracticeScreen />} />
        <Route path={RoutePath.HISTORY} element={<HistoryScreen />} />
        <Route path={RoutePath.REPORT} element={<ReportScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
