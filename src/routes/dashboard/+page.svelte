<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<script>
// @ts-nocheck

    import person from '$lib/images/person.png'
    import jumji from '$lib/images/jumji.png'
    import x from '$lib/images/x-circle.png'
    import download from '$lib/images/download.png'
    import appsala from '$lib/images/appsala.png'
    import holuj from '$lib/images/holuj.png'
    import passiveday from '$lib/images/passiveday.png'
    import wisul from '$lib/images/wisul.png'
    import user from '$lib/images/user.png'
    import plus from '$lib/images/plus-circle.png'
    import link from '$lib/images/link.png'
    import send from '$lib/images/send.png'
    import drive from '$lib/images/drive.png'
    import like from '$lib/images/like.png'
    import teralin from '$lib/images/teralin.png'     
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    import { logged_in } from '$lib/store'
    import DashboardBrandCard from '../../components/DashboardBrandCard.svelte'
    import EmailList from '../../components/EmailList.svelte';
    let shortlisted_brands;
    let shortlisted_brands_count;
    let current_user;
    let token;
    let name;
    let user_id;
    let selected_brand;
    let selected_brand_comments;
    let shortlisted_brands_comments;
    let Link;
    let link_text = 'Copy Link'
    let invite_url;
    onMount(()=>{
    token = localStorage.getItem('Brandemy_Token')
    if(!token){
      goto('/login')
    }
    current_user = JSON.parse(localStorage.getItem('Brandemy_User'))
    name = current_user.name
    user_id = current_user.id
    Link =  `localhost:5172/voting/${user_id}`
    invite_url = `https://wisulbackend.netlify.app/.netlify/functions/index//emailsforvotings/${user_id}`
    // console.log(current_user)
    shortlisted_brands = current_user.mergedData.map((i)=> i.brands )
    shortlisted_brands_comments = current_user.mergedData.map((i)=> i.votingData )
    selected_brand_comments = shortlisted_brands_comments[0]
    shortlisted_brands_count = shortlisted_brands.length
    selected_brand = shortlisted_brands[0].id
  })

  const change_selected_brand = (id) =>{
    selected_brand_comments = current_user.mergedData.filter((i)=> i.brands.id === id )[0].votingData
    if (selected_brand === id) {
        selected_brand = null; // Unselect the current brand if clicked again
    } else {
        selected_brand = id; // Select the newly clicked brand
    }
    console.log(selected_brand);
  }
  
  const copyLink = () =>{
    navigator.clipboard.writeText(Link)
    .then(() => {
        console.log('Link copied to clipboard');
        link_text = "Link Copied!";
        setTimeout(() => {
          link_text = "Copy Link";
        }, 2000); 
      })
      .catch((error) => {
        console.error('Failed to copy link: ', error);
      });
  }
let friend_email_input;
let friend_email = [
    'pawanrajput852710@gmail.com',
    'wasiqureshi01@gmail.com'
]
const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

const add_friend_email = () => {
    if(friend_email_input === ''){
        window.alert('please enter the email')
        return
    }
    if (!isEmail(friend_email_input)) {
        window.alert('Please enter a valid email');
        return;
    }
    friend_email = [...friend_email, friend_email_input]; // Using spread operator to create a new array
    // console.log(friend_email);
    friend_email_input = ''; // Clear the input after adding the email
  };

const send_invite_link = async() =>{
    let invite_obj = {
        emails:friend_email,
        UserName: name
    }
    invite_obj = JSON.stringify(invite_obj)

    console.log(invite_obj)
    try{
        const res =  await fetch(invite_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: invite_obj
    })
    
    const response = await res.json();
    console.log(response)
    }catch(error){
        console.log(error)
    }
}

const delete_email = (email) => {
    // console.log(email)
    friend_email = friend_email.filter(fe => fe !== email);
}
const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            add_friend_email(); // Call the add_friend_email function when Enter key is pressed
        }
    };
    
    function timeAgo(timestamp) {
  const previousDate = new Date(timestamp);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - previousDate.getTime();

  // Convert milliseconds to seconds, minutes, hours, and days
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return "Just now";
  }
}

</script>

<section class="dashboard">
<div class="container">
<h3>Profile</h3>
<div class="profile-info">
    <div class="flex">
        <img src={person} alt="">
        <p class="profile-name">{
            name
            }</p>    
    </div>
    <p class="draw-para">
        You have been entered for a draw!! to win a free brand name. Get more chances by <span>clicking here</span> 
    </p>
    </div>


    <div class="suggested-brands">
        <p class="suggested-brands-heading">Shorlisted brands by you ({shortlisted_brands_count})</p>
        <div class="brands-grid">            
             {#if shortlisted_brands} 
            {#each shortlisted_brands as brand}
                <DashboardBrandCard {brand} selected_brand={selected_brand} change_selected_brand = {(id)=>change_selected_brand(id)} { selected_brand_comments}/>
                {/each}
                {/if}

            <button class="btn">
                <div class="flex">
                    <img src={plus} alt=""/>
                    <p>Add More</p>
                </div>
            </button>
        </div>
    </div>

    <div class="comments-div">
        <p class="brand-section-heading">Comments</p>  
        <div class="comments-line"></div>
        <div class="dashboard-comments">

            {#if selected_brand_comments}
            {#each selected_brand_comments as comment}
            <div class="comment-div">
                <div class="flex">
                    <div class="flex dp-name">
                        <img src={person} alt="user-dp">
                        <p class="comment-user">Ali Raza</p>
                    </div> <p class="comment-time">{timeAgo(comment.timestamp)}</p> 
                </div>
                <p class="comment margin-left">{comment.comment}</p>
               <div class="flex like-reply margin-left">
                <div class="flex likes">
                    <img src={like} alt="">
                    <p>255</p>
                </div>
                <p>Reply</p>
               </div>
            </div>
            {/each}
            {/if}

        </div>
    </div>

    <div class="get-suggestion">
        <p class="brand-section-heading">
            Get suggestions from friends
        </p>
        <div class="flex get-suggestion-first-child">
            <p>Get suggestions via link</p>
            <button class="btn btn-dashboard"  on:click={copyLink}>
                <div class="flex">
                    <p>{
                        link_text
                        }</p>
                    <img src={link} alt="" style="margin-left:7px;"/>
                                   </div>
            </button>
        </div>

        <div class="flex">
            <p style="font-weight: 600;">Invite your friends through mail</p>
            <!-- <p class="your-email">rajeshwar@gmail.com</p> -->
            <input type="text" placeholder="Enter your friend's email here" id="friend_input" bind:value={friend_email_input} on:keydown={handleKeyDown}>
            <button class="btn" on:click={add_friend_email}>
                <div class="flex">
                    <img src={plus} alt=""/>
                    <p>Add Mail</p>
                </div>
            </button>
            <button class="btn" on:click={send_invite_link}>
                <div class="flex">
                    <img src={send} alt=""/>
                    <p>Send Invite Link</p>
                </div>
            </button>
        </div>

        <div class="flex">
       {#each friend_email as fe}
            <EmailList email={fe} delete_email={delete_email}/>
        {/each}                    
        </div>
    </div>

    
    <div class="purchased-brands">
        <p class="brand-section-heading">Purchased Brands</p>
        <div class="brands-grid">
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Jumji</p>
                    <!-- <img src={x} alt=""> -->
                </div>
                <div class="logo-div-jumji logo-div">
                    <img src={jumji} alt="brand-img">
                    <p>jumji.com</p>
                </div>
                <div class="flex">
                    <p class="voted">Download Assets</p>
                    <div class="flex">
                        <img src={drive} alt="" style="margin: 0 3px;">
                        <img src={download} alt="">
                    </div>
                   
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Passiveday</p>
                    <!-- <img src={x} alt=""> -->
                </div>
                <div class="logo-div logo-div-passiveday">
                    <img src={passiveday} alt="brand-img">
                    <p>passiveday.com</p>
                </div>
                  <div class="flex">
                    <p class="voted">Download Assets</p>
                    <div class="flex">
                        <img src={drive} alt="" style="margin: 0 3px;" >
                        <img src={download} alt="">
                    </div>
                   
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Appsala</p>
                    <!-- <img src={x} alt=""> -->
                </div>
                <div class="logo-div logo-div-appsala">
                    <img src={appsala} alt="brand-img">
                    <p>appsala.com</p>
                </div>
                  <div class="flex">
                    <p class="voted">Download Assets</p>
                    <div class="flex">
                        <img src={drive} alt="" style="margin: 0 3px;">
                        <img src={download} alt="">
                    </div>
                   
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Wisul</p>
                    <!-- <img src={x} alt=""> -->
                </div>
                <div class="logo-div logo-div-jumji" >
                    <img src={wisul} alt="brand-img">
                    <p>wisul.com</p>
                </div>
                  <div class="flex">
                    <p class="voted">Download Assets</p>
                    <div class="flex">
                        <img src={drive} alt="" style="margin: 0 3px;">
                        <img src={download} alt="">
                    </div>
                   
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Holuj</p>
                    <!-- <img src={x} alt=""> -->
                </div>
                <div class="logo-div logo-div-holuj" >
                    <img src={holuj} alt="brand-img">
                    <p>holuj.com</p>
                </div>
                  <div class="flex">
                    <p class="voted">Download Assets</p>
                    <div class="flex">
                        <img src={drive} alt="" style="margin: 0 3px;">
                        <img src={download} alt="">
                    </div>
                   
                </div>
            </div>
          </div>
    </div>

</div>
</section>