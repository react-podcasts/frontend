import React from 'react';
import { Link } from 'react-router-dom';
import './subscriptions-list.css';

const SubscriptionsList = ({ subscriptions }) => {
  return (
    <ul className="subscriptions-list">
      { subscriptions.map(({ id, coverUrl600, title }) => {
        return (
          <li key={id} className="subscriptions-list__item">
            <Link
              className="subscriptions-list__link"
              to={`/podcast/${id}`}
            >
              <img
                className="subscriptions-list__image"
                src={coverUrl600}
                alt={title}
              />
            </Link>
          </li>
        )
      }) }
    </ul>
  );
};

export default SubscriptionsList;
