import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Update Successfully")
        navigate("/profile");
      })
      .catch(error => {

      });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <form onSubmit={handleUpdate} className="card w-full max-w-md bg-base-100 p-6 shadow-xl space-y-4">
        <h2 className="text-xl font-bold text-center">Update Profile</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-info text-white w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
