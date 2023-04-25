import { useNavigate } from "react-router-dom";

export default function page404() {
  const navigate = useNavigate();

  return (
    <div className="page-404">
      <h1>404</h1>
      <h2>Page not found</h2>
      <div className="btn-list center">
        {navigate && (
          <button onClick={() => navigate(-2)} className="btn small">
            Go back
          </button>
        )}
        <a href="/" className="btn small">
          Go to home
        </a>
      </div>
    </div>
  );
}
