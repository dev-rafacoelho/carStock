export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const res = () =>{
        //...
    }
    
    const product = await res.json()
   
    return Response.json({ product })
  }