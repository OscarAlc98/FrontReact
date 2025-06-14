import { Project } from './Project';

export default function ProjectDetail({ project }) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          {project.imageUrl ? (
            <img
              className="rounded"
              src={project.imageUrl}
              alt={project.name}
            />
          ) : null}
          <section className="section dark">
            <h3 className="strong">
              <strong>{project.name}</strong>
            </h3>
            <p>{project.description}</p>
            <p>Budget : {project.budget}</p>

            <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
            <p>
              <mark className="active">
                {' '}
                {project.isActive ? 'active' : 'inactive'}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}