import UserCard from "@/components/UserCard";
import { Divider } from "@mui/material";

const page = () => {
  return (
    <div >
      <div style={{display:'flex',flexWrap:"wrap"}}>
        <UserCard type="Account" color="#cfd1a5"/>
        <UserCard type="User" color="#a39255"/>
        <UserCard type="Bank" color="#cfd1a5"/>
        <UserCard type="Loan" color="#a39255"/>
      </div>
      </div>
  );
};

export default page;
