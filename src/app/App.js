import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { v4 as uuidV4 } from 'uuid';

import TextEditor from '../pages/TextEditor';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' exact> */}
        <Route
          path='/documents'
          element={<Navigate replace to={`/documents/${uuidV4()}`} />}
        />
        {/* </Route> */}
        <Route path='/documents/:id' element={<TextEditor />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
