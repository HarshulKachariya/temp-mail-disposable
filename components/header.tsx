import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  return (
    <div className="bg-[#21232a] p-7 text-white font-mono">
      <div className="logo flex text-2xl flex-row gap-2 font-bold  justify-center items-center">
        <EmailIcon className="text-3xl" />
        <h1>Temp Mail</h1>
      </div>
    </div>
  );
};

export default Header;
