import React from "react";

interface SkillCardProps {
  name: string;
  level: number;
}

export const SkillsCard = ({ name, level }: SkillCardProps) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="font-bold text-lg">{name}</h3>
      <p>Level: {level}</p>
    </div>
  );
};
