import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList';
import data from '../data/data';

const categories = ['All', ...(new Set(data.map((card) => card.category)))];

const Portfolio = () => {
  const [ filter, setFilter ] = useState('All');

  const selectFilter = (newFilter) => {
    if (filter === newFilter) {
      return;
    }
    // console.log(newFilter);
    setFilter(newFilter);
  }

  return (
    <div>
      <h1>I am portfolio block</h1>
      <Toolbar
        filters={categories}
        selected={filter}
        onSelectFilter={selectFilter}
      />
      <ProjectList />
    </div>
  )
}

export default Portfolio;
