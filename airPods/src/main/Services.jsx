import React from 'react';
import servicesData from '../data/servicesData';

const Services = () => {
  return (
   
      <div className="row">
        {servicesData.map((item) => {
          const { id, icon, title, info } = item;

          return (
            <div key={id} className="col-12 col-md-3 col-lg-4 mb-4">
              <div className="d-flex align-items-start p-3 bg-dark rounded shadow-sm">
                <div className="icon_style me-3">{icon}</div>
                <div>
                  <h4 className="text-light">{title}</h4>
                  <p className="text-secondary">{info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Services;
