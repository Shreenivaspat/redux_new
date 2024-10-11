import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/user/userSlice";
import UserCardItem from "../common/UserCardItem";
import EditUserModal from "../common/EditUserModal";
import { Skeleton } from "antd";
import { fetchUserDetails } from "../../api/userApi";
import useEditUserModal from "../../hooks/useEditUserModal";

const UserCard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  // Use the custom hook
  const {
    isModalVisible,
    handleEditClick,
    handleCancel,
    handleOk,
    editedUserData,
    setEditedUserData,
  } = useEditUserModal();

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);

  const handleDeleteClick = (userId) => {
    dispatch(deleteUser(userId));
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
