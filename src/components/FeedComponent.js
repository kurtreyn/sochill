import React from 'react';
import { Card } from 'react-bootstrap';
import blankProfilePic from '../images/blank-profile-pic.png';

export default function FeedComponent() {
  return (
    <>
      <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 feed-col">
        <Card>
          <Card.Header className="feed-header">
            <h3>Friend's User Name</h3>
            <img src={blankProfilePic} alt="profile pic" />
          </Card.Header>
          <Card.Body>
            <p>post content</p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
