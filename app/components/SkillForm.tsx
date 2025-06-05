"use client"

import {useState} from 'react';

export function SkillForm() {

    const [name, setName] = useState<string>('');
    const [level, setLevel] = useState<number>(1);

    const submitSkill = async () => {
        const res = await fetch('/api/skills',{
            method: 'POST',
            body: JSON.stringify({name, level, userId: 'MockId', id: Math.random() * 1000  })
        });
        console.log(res);
        if(res.ok){
            console.log('Skill added');
            setName('');
            setLevel(1);
        }

    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); submitSkill(); }} className="space-y-4">
            <input
            className='border p-2 w-full'
            type='text'
            placeholder='Search Text'
            value={name}
            onChange={(e) => {
                setName(e.target.value)
            }}/>

        <input
            className='border p-2 w-full'
            type='number'
            placeholder='Search Level'
            value={level}
            onChange={(e) => {
                if(Number.isNaN(parseInt(e.target.value)) === false) {
                return setLevel(parseInt(e.target.value))
                }
            }}/>
             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Skill</button>
        </form>
    )
}