import React, { useState } from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import AddProperty from './components/AddProperty';
import PropertyDetail from './components/PropertyDetail';

const pages = {
  'PropertyList': 'PropertyList',
  'PropertyDetail': 'PropertyDetail',
  'AddProperty': 'AddProperty'
}

function App() {
  const [page, setPage] = useState(pages.PropertyList);

  return (
    <main className='layout'>
      <header>This is nav bar</header>
      <div onClick={() => setPage(pages.AddProperty)}> Add Property </div>
      {page === pages.PropertyList && <PropertyList />}
      {page === pages.PropertyDetail && <PropertyDetail />}
      {page === pages.AddProperty && <AddProperty />}

    </main>
  );
}

export default App;
