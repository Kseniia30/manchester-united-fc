import HonoursPage from 'pages/HonoursPage';
import { Route, Routes } from 'react-router';
import ColoursPage from './pages/ColoursPage';
import HistoryPage from './pages/HistoryPage';
import { HomePage } from './pages/HomePage';
import { Layout } from './pages/Layout';
import PlayersInfoPage from './pages/PlayerInfoPage';
import PlayersPage from './pages/PlayersPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="crests" element={<ColoursPage />} />
                    <Route path="players" element={<PlayersPage />} />
                    <Route
                        path="players/:playerId"
                        element={<PlayersInfoPage />}
                    />
                    <Route path="honours" element={<HonoursPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
