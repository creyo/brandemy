/** @type {import('./$types').PageServerLoad} */

export async function load({params}){
    // console.log(params.user_id)
    let user_id = params.user_id
    const apiUrl = `https://wisulbackend.netlify.app/.netlify/functions/index/votingpagedetails/${user_id}`

        try {
          const res = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
    }})
    const data = await res.json();
    // console.log(data)
    if (res.status !== 200) {
        console.error(`Error fetching data: ${res.status}`);
        return {
          status: res.status,
          error: new Error('Internal Server Error'),
        };
      }
      return{
        data,
      }
} catch(error){
    console.error('Error fetching data:', error);
    return {
      status: 500,
      error: new Error('Internal Server Error'),
    }}
}
