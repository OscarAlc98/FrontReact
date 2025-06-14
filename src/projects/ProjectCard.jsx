import { Project } from './Project';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function formatDescription(description) {
  return description.substring(0, 60) + '...';
}

function ProjectCard(props) {
  const { project, onEdit, onDelete } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl || null} alt={project.name} />
      <section className="section dark">
        <Link to={'/projects/' + project.id}>
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        </Link>
        <button className="button-edit"
            onClick={() => {
                handleEditClick(project);
            }}>
            <span className="fas fa-edit "></span>
            Edit
        </button>
        <button className="button-delete"
            onClick={() => {
                onDelete(project.id);
            }}>
            <span className="fas fa-trash "></span>
            Delete
        </button>
      </section>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Project).isRequired,
  onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ProjectCard;