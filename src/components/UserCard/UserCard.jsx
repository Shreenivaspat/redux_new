import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  setEditUser,
  updateUser,
} from "../../features/user/userSlice";
import UserCardItem from "../common/UserCardItem";
import EditUserModal from "../common/EditUserModal";
import { Skeleton } from "antd";
import { fetchUserDetails } from "../../api/userApi";

const UserCard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  const handleDeleteClick = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleEditClick = (user) => {
    dispatch(setEditUser(user));
    setIsModalVisible(true);
    setEditedUserData(user);
  };

  const handleCancel = () => {
    dispatch(setEditUser(null));
    setIsModalVisible(false);
    setEditedUserData({});
  };

  const handleOk = () => {
    dispatch(
      updateUser({ id: editedUserData.id, updatedData: editedUserData })
    );
    setIsModalVisible(false);
    setEditedUserData({});
  };

  const renderCards = () => {
    if (loading) {
      return <Skeleton active />;
    }

    return users.map((user) => (
      <UserCardItem
        key={user.id}
        user={user}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    ));
  };

  return (
    <div className="card-container">
      {renderCards()}

      {isModalVisible && (
        <EditUserModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          editedUserData={editedUserData}
          setEditedUserData={setEditedUserData}
        />
      )}
    </div>
  );
};

export default UserCard;
