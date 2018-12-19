import * as React from 'react';

import GoogleMap from '../containers/GoogleMap';
import SubmissionForm from '../containers/SubmissionForm';
import './DeliveryPage.scss';

interface DeliveryPageProps {

}

export const DeliveryPage: React.SFC<DeliveryPageProps> = ({}) => {
  return (
    <section className="delivery-page">
      <div className="delivery-page__sidebar">
        <SubmissionForm />
      </div>
      <div className="delivery-page__google-map">
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};