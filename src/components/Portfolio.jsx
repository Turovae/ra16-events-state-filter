import { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';
import data from '../data/data';
import './Portfolio.css';

const categories = ['All', ...(new Set(data.map((card) => card.category)))];

const Portfolio = () => {
  const [ filter, setFilter ] = useState('All');
  const [ filtered, setFiltered ] = useState(data);

  const filterProjects = (newFilter) => {
    if (newFilter === 'All') {
      setFiltered(data);
      return;
    }

    setFiltered(data.filter((project) => project.category === newFilter));
  }

  const selectFilter = (newFilter) => {
    if (filter === newFilter) {
      return;
    }
    setFilter(newFilter);
    filterProjects(newFilter);
  }

  return (
    <div className='portfolio'>
      <Toolbar
        filters={categories}
        selected={filter}
        onSelectFilter={selectFilter}
      />
      <ProjectList data={filtered} />
    </div>
  )
}

export default Portfolio;
