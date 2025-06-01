export const dynamic = 'force-static';
export const revalidate = 10;


export const GET = () => {
    return Response.json(
        {time: new Date().toLocaleTimeString()}
    )
}