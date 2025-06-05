import { SkillForm } from "../components/SkillForm";
import { SkillsCard } from "../components/SkillsCard";

interface Skill {
    id: number,
    name: string,
    level: number
}

async function getSkills(){
    const res = await fetch('http://localhost:3000/api/skills', {next: {revalidate: 10}})
    const resData = await res.json();
    console.log(resData);
    if(Object.keys(resData).length > 0){
        return resData;
    } else {
        return [];
    }
}

export default async function SkillBoard() {
   const skills = await getSkills();
   return(
    <div className="p-8"> 
     <h1 className="text-2xl font-bold mb-4">Your Skills</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <SkillForm/>
        {skills.map((elem: Skill) => {
            return <SkillsCard key={elem.id} name={elem.name} level={elem.level} />
        })}

     </div>
        </div>
   )
}