import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "express",
    "firebase",
    "mongodb",
    "mysql",
    "css3",
    "html5",
    "javascript",
    "react",
    "tailwindcss",
  ];
  const skills2 = [
    "python",
    "fastapi",
    "docker",
    "aws1",
    "git",
    "github",
    "postman"

  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={35} radius={100} reverse speed={2}>
        {skills2.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
