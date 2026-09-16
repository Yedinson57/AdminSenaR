import { Link } from 'react-router-dom';

export default function IndexHeader({ title, description, createTo, createLabel }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
      <div>
        <h2 className="fw-bold text-dark mb-1">{title}</h2>
        <p className="text-muted small mb-0">{description}</p>
      </div>
      <Link
        to={createTo}
        className="btn text-white fw-bold px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
        style={{ backgroundColor: '#39A900' }}
      >
        {createLabel}
      </Link>
    </div>
  );
}
