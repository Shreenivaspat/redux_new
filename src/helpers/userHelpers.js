export const getAvatarUrl = (username) => {
  return username
    ? `https://api.dicebear.com/6.x/adventurer/svg?seed=${username}&mood[]=happy`
    : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"; // Fallback to a default avatar if no username is provided
};
