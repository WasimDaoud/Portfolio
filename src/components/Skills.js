import Card from "./Card";
import { skills } from "../Assets/DATA/Data"

const Skills = () => {
  return (
    <div className="meal-page z-10">
      <div className="max-w-[1380px] mx-auto pt-[50px]">
        {/*( skills )*/}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="overflow-hidden mx-auto w-[250px] h-[325px]  hover:scale-110 duration-1000 flex justify-center items-center my-[20px]"
            >
              <Card skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills ;
