// src/components/Profile.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="container Profile">
        <div className="row" >
            <div className="col Profile-avatar">            
                <img src={user.picture} alt="Profile" />
            </div>
            <div className="col-6 Profile-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    </div>
  );
};

export default Profile;