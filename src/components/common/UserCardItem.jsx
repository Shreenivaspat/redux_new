import { Card } from "antd";
import PropTypes from "prop-types";
import { CardDetailsData } from "../../constants/userCardConstants";
import { HeartFilled } from "@ant-design/icons";
import { useState } from "react";

const { Meta } = Card;

const UserCardItem = ({ user, handleEditClick, handleDeleteClick }) => {
  const { EmailIcon, PhoneIcon, GlobalIcon, EditIcon, DeleteIcon } =
    CardDetailsData.Icons;

  const [heartColor, setHeartColor] = useState("inherit"); // Default color

  const handleHeartClick = () => {
    setHeartColor((prevColor) => (prevColor === "red" ? "inherit" : "red"));
  };

  UserCardItem.propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      website: PropTypes.string,
    }).isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
  };

  return (
    <Card
      key={user.id}
      className="user-card"
      actions={[
        <HeartFilled
          key="heart"
          style={{ color: heartColor }}
          onClick={handleHeartClick}
        />,
        <EditIcon key="edit" onClick={() => handleEditClick(user)} />,
        <DeleteIcon
          key="ellipsis"
          onClick={() => handleDeleteClick(user.id)}
        />,
      ]}
      style={{ width: 300 }}
      cover={
        <img
          alt={`${user.name}'s cover`}
          src={CardDetailsData?.CardDetails.DEFAULT_COVER_IMAGE}
        />
      }
    >
      <Meta
        title={user.name}
        description={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div>
              <EmailIcon /> {user.email}
            </div>
            <div>
              <PhoneIcon /> {user.phone}
            </div>
            <div>
              <GlobalIcon /> {user.website}
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default UserCardItem;
