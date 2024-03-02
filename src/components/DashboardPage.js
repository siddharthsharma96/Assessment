import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../Utils/loginSlice";
const DashboardPage = () => {
  const { token, user } = useSelector((store) => store.login);
  console.log(token, user);
  const dispatch = useDispatch();
  return (
    <div className="bg-radial-gradient  h-screen">
      <div className="border bg-white mb-10 border-gray-300 flex justify-end  p-3">
        <button
          className="bg-redtext  px-2 py-1 rounded-md text-white"
          onClick={() => {
            dispatch(removeToken());
          }}
        >
          Log Out
        </button>
      </div>

      <div className="">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="md:w-8/12 sm:w-9/12 mt-4 md:mt-0 md:flex md:items-center">
              <div className="Container-div">
                <h1 className="header-div-heading text-7xl text-white tracking-wide">
                  DashBoard page Logged in with {user}
                </h1>
                <div className="header-div-text pt-3 text-white my-9 tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Blanditiis, minima voluptatum aspernatur accusamus rerum vel
                  dolor quidem. Officiis est similique non sequi alias sed
                  asperiores .
                </div>
                <button className="text-white border border-fg p-1 mt-3 rounded-md bg-fg mt-3">
                  Buy now
                </button>
              </div>
            </div>
            <div className="md:w-4/12 sm:w-3/12 md:flex md:items-center my-5">
              <div className="py-5">
                <img className="w-full" src="/a.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
