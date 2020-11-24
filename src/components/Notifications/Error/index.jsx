import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import errorsSelectors from '../../../redux/error/selectors';
import notification from '../../../services/notification';

const Error = () => {
  const [error, setError] = useState([]);
  const allErrors = useSelector(errorsSelectors.getError);
  const errors = [allErrors];

  useEffect(() => {
    errors.map(err => {
      if (err) {
        const keys = Object.keys(err);
        keys.map(e => {
          setError(prev => [...prev, err[e]]);
        });
      }
    });
  }, [...errors]);

  useEffect(() => {
    if (!error) return;
    error.map(e => {
      let message;
      if (typeof e === 'string') {
        message = e.replace(/_/g, ' ');
      } else {
        message = e[0].replace(/_/g, ' ');
      }
      notification({
        type: 'error',
        message,
      });
    });
    setError('');
  }, [error]);

  return <></>;
};

export default Error;
