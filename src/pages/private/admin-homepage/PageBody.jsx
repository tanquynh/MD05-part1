import React from 'react';
import Card from './Card';
import './pageBody.css';

function PageBody() {
    return (
        <div className="page-body">
        <div className="container-fluid">
          <div className="card-row">
            <div className="card-column">
              <div className="main-tiles border-5 border-0 card-hover card o-hidden custome-1-bg">
                <div className="b-r-4 card-body">
                  <div className="media align-items-center static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Revenue</span>
                      <h4 className="mb-0 counter">
                        $6659
                        <span className="badge badge-light-primary grow">
                          <i className="ri-trending-up" />
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-database-2-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div className="main-tiles border-5 border-0 card-hover card o-hidden custome-2-bg">
                <div className="b-r-4 card-body">
                  <div className="media align-items-center static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Orders</span>
                      <h4 className="mb-0 counter">
                        9856
                        <span className="badge badge-light-danger grow">
                          <i className="ri-trending-down" />
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-shopping-bag-3-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div className="main-tiles border-5 border-0 card-hover card o-hidden custome-3-bg">
                <div className="b-r-4 card-body">
                  <div className="media align-items-center static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Products</span>
                      <h4 className="mb-0 counter">
                        893
                        <a
                          href="add-new-product.html"
                          className="badge badge-light-secondary grow"
                        >
                          ADD NEW
                        </a>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-chat-3-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-column">
              <div className="main-tiles border-5 border-0 card-hover card o-hidden custome-4-bg">
                <div className="b-r-4 card-body">
                  <div className="media align-items-center static-top-widget">
                    <div className="media-body p-0">
                      <span className="m-0">Total Customers</span>
                      <h4 className="mb-0 counter">
                        4.6k
                        <span className="badge badge-light-success grow">
                          <i className="ri-trending-down" />
                          8.5%
                        </span>
                      </h4>
                    </div>
                    <div className="align-self-center text-center">
                      <i className="ri-user-add-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      );
}

export default PageBody;