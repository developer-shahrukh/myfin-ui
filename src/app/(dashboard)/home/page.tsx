import UserCard from "@/components/UserCard";
import { Divider } from "@mui/material";

const page = () => {
  return (
    <div >
      <div style={{display:'flex'}}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      </div>
  );
};

export default page;
