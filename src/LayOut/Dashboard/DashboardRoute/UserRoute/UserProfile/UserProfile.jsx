import DashboardProfile from "../../../../../Components/DashboardProfile/DashboardProfile";
import DashboardHeader from "../../../DashboardHeader";


const UserProfile = () => {

  return (
    <div>
      <DashboardHeader heading={'My Profile'}></DashboardHeader>
     <DashboardProfile></DashboardProfile>
    </div>
  );
};

export default UserProfile;
