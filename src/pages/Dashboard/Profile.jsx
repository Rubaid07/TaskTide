import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
        <img
          src={user?.photoURL || "https://i.ibb.co/RSC3d3F/default-avatar.jpg"}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />
        <h2 className="text-xl font-bold">{user?.displayName || "No Name Found"}</h2>
        <p className="text-sm text-gray-500 mb-4">{user?.email}</p>
        <button
          onClick={() => navigate("/update-profile")}
          className="btn btn-info text-white w-full"
        >
          Update Info
        </button>
      </div>
    </div>
  );
};

export default Profile;