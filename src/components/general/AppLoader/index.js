import ClipLoader from "react-spinners/ClipLoader";

const AppLoader =({size, color}) => {
  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={true} size={size} />
    </div>
  );
}

export default AppLoader;