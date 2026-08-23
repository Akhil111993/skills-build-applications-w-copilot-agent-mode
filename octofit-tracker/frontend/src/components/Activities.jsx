import { useEffect, useState } from 'react';

const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
  return codespaceName ? `https://${codespaceName}-8000.app.github.dev` : 'http://localhost:8000';
};

export default function Activities() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = `${getApiBaseUrl()}/api/activities/`;

    fetch(url)
      .then((response) => response.json())
      .then((payload) => {
        const data = Array.isArray(payload) ? payload : payload?.data ?? [];
        setItems(data);
      })
      .catch((err) => {
        setError(err.message || 'Failed to load activities');
      });
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id || item.id}>{item.type} - {item.durationMinutes} min</li>
        ))}
      </ul>
    </div>
  );
}
