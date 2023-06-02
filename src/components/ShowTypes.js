import "../styles/ShowTypes.css";
import { Link } from "react-router-dom";

const ShowTypes = (props) => {
  return (
    <div>
      <div className="main-section-2 w-full">
        <div className="section-2container max-w-[1380px] h-full mx-auto">
          <div className="flex flex-col justify-center w-full h-[100%] py-[50px]">
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="tl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%] ">
                <Link
                  className="relative"
                  to={`/${props.services[0].path}`}
                >
                  <img
                    src={props.services[0].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute color font-bold bottom-[-45px] right-[46%] text-[30px] text-white">
                    {props.services[0].title}
                  </h1>
                </Link>
              </div>
              <div className="tr hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%]">
                <Link
                  className="relative"
                  to={`/${props.services[1].path}`}
                >
                  <img
                    src={props.services[1].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[85%] md:h-[80%] mx-auto"
                  />
                  <h1 className="color font-bold text-center text-[30px]">
                    {props.services[1].title}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="bl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%]">
                <Link
                  className="relative"
                  to={`/${props.services[2].path}`}
                >
                  <img
                    src={props.services[2].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[85%] md:h-[80%] mx-auto"
                  />
                  <h1 className="text-center color font-bold text-[30px] ">
                    {props.services[2].title}
                  </h1>
                </Link>
              </div>
              <div className="br hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%]">
                <Link
                  className="relative"
                  to={`/${props.services[3].path}`}
                >
                  <img
                    src={props.services[3].image}
                    alt="picture"
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="color font-bold text-center text-[30px]">
                    {props.services[3].title}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTypes;
