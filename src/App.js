// Import data

// TODO
// App
// Searchbar
// Directory
// Gallery
//  Posting
// Sidebar
//   Help

// Import components
import React from 'react'
import './App.css';
import Gallery from './components/gallery.js'
import Searchbar from './components/searchbar.js';
import Directory from './components/directory.js';
import Sidebar from './components/sidebar.js';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        < Searchbar />
        < Directory />
        < Gallery />
        < Sidebar />
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
