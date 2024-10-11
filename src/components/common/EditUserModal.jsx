import { Modal, Input } from "antd";
import PropTypes from "prop-types";

const EditUserModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  editedUserData,
  setEditedUserData,
}) => {
  EditUserModal.propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    editedUserData: PropTypes.object.isRequired,
    setEditedUserData: PropTypes.func.isRequired,
  };
  return (
    <Modal
      title="Edit User"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        style={{ marginBottom: 16 }}
        placeholder="name"
        value={editedUserData.name}
        onChange={(e) =>
          setEditedUserData({ ...editedUserData, name: e.target.value })
        }
      />
      <Input
        style={{ marginBottom: 16 }}
        placeholder="email"
        value={editedUserData.email}
        onChange={(e) =>
          setEditedUserData({ ...editedUserData, email: e.target.value })
        }
      />
      <Input
        style={{ marginBottom: 16 }}
        placeholder="phone"
        value={editedUserData.phone}
        onChange={(e) =>
          setEditedUserData({ ...editedUserData, phone: e.target.value })
        }
      />
      <Input
        style={{ marginBottom: 16 }}
        placeholder="website"
        value={editedUserData.website}
        onChange={(e) =>
          setEditedUserData({ ...editedUserData, website: e.target.value })
        }
      />
    </Modal>
  );
};

export default EditUserModal;
