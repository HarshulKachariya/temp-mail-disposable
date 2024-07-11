import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#21232a] p-7 text-white font-mono">
      <div className="logo flex text-2xl flex-row gap-2 font-bold  justify-center items-center">
        <Link href="/pages/temp mail" className="logo flex  flex-row gap-2 ">
          <EmailIcon className="text-3xl" />
          <h1>Temp Mail</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
