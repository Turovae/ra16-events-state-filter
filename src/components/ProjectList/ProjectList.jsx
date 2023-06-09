import { PropTypes } from 'prop-types';
import './ProjectList.css';

const ProjectList = (props) => {
  const { data } = props;
  return (
    <div className='portfolio__projects'>
      {/* <h2>Projects</h2> */}
      {
        data.map((project, index) => (
          <img key={index} src={project.img} alt='project.category' className='project__item' />
        ))
      }
    </div>
  );
};

ProjectList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectList;
