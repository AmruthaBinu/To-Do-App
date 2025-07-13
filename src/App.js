import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import SearchToDo from './components/SearchToDo';
import DeleteToDo from './components/DeleteToDo';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={   <AddToDo /> }/>
        <Route path="/search" element={   <SearchToDo /> }/>
        <Route path="/delete" element={   <DeleteToDo /> }/>
        <Route path="/view" element={   <ViewAll /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
