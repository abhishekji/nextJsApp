import { users } from '@/app/data/users'

export const GET = async(
    request: Request,
    {params}:{params: Promise<{id: string}>}
) => {
  const {id} = await params;
  const foundUser = users.find(elem => {
    return elem.id === Number(id)
  })

  return Response.json(foundUser);
}

export const PATCH = async(request: Request, {params}:{params: Promise<{id: string}>} ) => {
    const {id} = await params;
    const userRequest = await request.json();
    const foundUser = users.find(elem => {
        return elem.id === Number(id)
    })
    console.log(foundUser, userRequest)
    const updatedUser = {...foundUser, ...userRequest};
    return Response.json(updatedUser);
}

export const DELETE = async(request: Request, {params}: {params: Promise<{id: string}>}) => {
    const {id} = await params;
  //  const userRequest = await request.json();
    const elemIndex = users.findIndex(elem => {
        return elem.id === Number(id)
    });
    const currUsers = JSON.parse(JSON.stringify(users));
    currUsers.splice(elemIndex, 1);
    for(let ind = elemIndex; ind < currUsers.length; ind++) {
        currUsers[ind].id = currUsers[ind].id - 1
    }
    return Response.json(currUsers);
}
