import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

const Loading = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 300);

    return () => clearTimeout(timeout);
  }, [location]);

  if (!loading) return null;

  return <span>Loading...</span>;
};

export default Loading;
