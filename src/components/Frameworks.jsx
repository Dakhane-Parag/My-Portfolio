import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "express",
    "firebase",
    "mongodb",
    "mysql",
    "docker",
    "github",
    "css3",
    "git",
    "html5",
    "javascript",
    "react",
    "tailwindcss",
    "kubernetes"
  ];
  const skills2 = [
    "pandas",
    "numpy",
    "python",
    "matplot",
    "jupyter",
    "scikit"
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
