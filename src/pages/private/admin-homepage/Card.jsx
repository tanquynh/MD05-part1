import React from 'react';


function Card({ title, value, badgeIcon, badgeText, badgeColor, icon }) {
 
        return (
            <div className={`main-tiles border-5 border-0 card-hover card o-hidden ${badgeColor}`}>
              <div className="b-r-4 card-body">
                <div className="media align-items-center static-top-widget">
                  <div className="media-body p-0">
                    <span className="m-0">{title}</span>
                    <h4 className="mb-0 counter">
                      {value}
                      <span className={`badge badge-light-${badgeColor} grow`}>
                        <i className={`ri-${badgeIcon}`} />
                        {badgeText}
                      </span>
                    </h4>
                  </div>
                  <div className="align-self-center text-center">
                    <i className={`ri-${icon}`} />
                  </div>
                </div>
              </div>
            </div>
          );
    
}

export default Card;
