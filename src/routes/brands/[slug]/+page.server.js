// @ts-nocheck
/** @type {import('./$types').PageServerLoad} */
  export async function load({ params }) {
    const ApiUrl = 'https://wisulbackend.netlify.app/.netlify/functions/index/brandemydata';
      // console.log('getBrandData');
      try {
        const res = await fetch(ApiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
  }})
  const data = await res.json();
 
      if (res.status !== 200) {
        console.error(`Error fetching data: ${res.status}`);
        return {
          status: res.status,
          error: new Error('Internal Server Error'),
        };
      }
      function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }   
      const brand = data.msg.filter(item => item.brand_name === capitalizeFirstLetter(params.slug))[0];
      if (!brand) {
          return {
          status: 404,
          error: new Error('Blog post not found'),
        };
      }
      return {
        data:brand,
      }
}
  catch (error) {
    console.error('Error fetching data:', error);
    return {
      status: 500,
      error: new Error('Internal Server Error'),
    }}
}

  