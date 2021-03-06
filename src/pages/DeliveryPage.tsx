import * as React from 'react';

import DateSlider from '../containers/DateSlider';
import LeafletMap from '../containers/LeafletMap';
import './DeliveryPage.scss';

interface DeliveryPageProps {

}

export const DeliveryPage: React.SFC<DeliveryPageProps> = ({}) => {

  return (
    <section className="delivery-page">
      {/* <div className="delivery-page__sidebar">
        <SubmissionForm />
      </div> */}
      <div className="delivery-page__google-map">
        <div style={{ height: '100vh', width: '100%' }}>
          <LeafletMap />
        </div>
      </div>
      <DateSlider />
    </section>
  );
};