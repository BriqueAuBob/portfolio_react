import { useEffect } from "react";

export default function page404() {
  useEffect(() => {
    window.location.href = "http://45.155.169.158/enseignements";
  }, []);

  return (
    <div className="page-404">
      <h2>Redirection en cours...</h2>
    </div>
  );
}
