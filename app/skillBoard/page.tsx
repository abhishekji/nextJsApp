"use client";

import React, { useState, useEffect } from "react";

import SkillForm from "../components/SkillForm";
import { SkillsCard } from "../components/SkillsCard";

interface Skill {
  id: number;
  name: string;
  level: number;
}
export default function SkillBoard() {
  const [skillsList, setSkillsList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  async function getSkills() {
    setisLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/skills");
      const resData = await res.json();
      console.log(resData);
      if (Object.keys(resData).length > 0) {
        setSkillsList(resData);
      } else {
        setSkillsList([]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setisLoading(false);
    }
  }

  const updateListData = () => {
    getSkills()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getSkills()
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Skills</h1>
      <div className="flex flex-col gap-4 mt-6">
        <SkillForm updateList={updateListData} />
        <>
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              {skillsList.map((elem: Skill) => {
                return (
                  <SkillsCard
                    key={elem.id}
                    name={elem.name}
                    level={elem.level}
                  />
                );
              })}
            </>
          )}
        </>
      </div>
    </div>
  );
}
