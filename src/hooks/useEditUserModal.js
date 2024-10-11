import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEditUser, updateUser } from "../features/user/userSlice";

const useEditUserModal = () => {
  const dispatch = useDispatch();

  // State to control modal visibility and hold the edited user data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  // Function to handle the "Edit" button click, opens the modal and populates user data
  const handleEditClick = (user) => {
    dispatch(setEditUser(user)); // Optional: You can store the user in Redux if needed
    setIsModalVisible(true); // Open the modal
    setEditedUserData(user); // Populate modal with user's data
  };

  // Function to handle the modal "Cancel" button, closes the modal and resets data
  const handleCancel = () => {
    dispatch(setEditUser(null)); // Clear the Redux state if needed
    setIsModalVisible(false); // Close the modal
    setEditedUserData({}); // Reset the edited user data
  };

  // Function to handle the modal "OK" button, updates the user data and closes the modal
  const handleOk = () => {
    // Dispatch updateUser with the updated data
    dispatch(
      updateUser({ id: editedUserData.id, updatedData: editedUserData })
    );
    setIsModalVisible(false); // Close the modal
    setEditedUserData({}); // Clear the edited user data
  };

  return {
    isModalVisible, // Whether the modal is open or closed
    handleEditClick, // Function to call when the edit button is clicked
    handleCancel, // Function to call when the modal is canceled
    handleOk, // Function to call when the modal is confirmed (OK)
    editedUserData, // The data being edited in the modal
    setEditedUserData, // Function to update the user data in real time
  };
};

export default useEditUserModal;
