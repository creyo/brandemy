<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<script>
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
    import { onMount } from 'svelte'
    import { goto } from '$app/navigation'
    import { logged_in, current_user } from '$lib/store'
    onMount(()=>{
    if(!$logged_in){
      goto('/login')
    }
  })

</script>

<section class="dashboard">
<div class="container">
<h3>Profile</h3>
<div class="profile-info">
    <div class="flex">
        <img src={person} alt="">
        <p class="profile-name">{
            $current_user.name
            }</p>    
    </div>
    <p class="draw-para">
        You have been entered for a draw!! to win a free brand name. Get more chances by <span>clicking here</span> 
    </p>
    </div>


    <div class="suggested-brands">
        <p class="suggested-brands-heading">Shorlisted brands by you (5)</p>
        <div class="brands-grid">
            <div class="dashboard-brand-card selected-card">
                <div class="flex">
                    <p class="brand-name">Jumji</p>
                    <img src={x} alt="">
                </div>
                <div class="logo-div-jumji logo-div">
                    <img src={jumji} alt="brand-img">
                    <p>jumji.com</p>
                </div>
                <div class="flex">
                    <p class="voted">5 People Voted</p>
                    <img src={user} alt="">
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Passiveday</p>
                    <img src={x} alt="">
                </div>
                <div class="logo-div logo-div-passiveday">
                    <img src={passiveday} alt="brand-img">
                    <p>passiveday.com</p>
                </div>
                <div class="flex">
                    <p class="voted">5 People Voted</p>
                    <img src={user} alt="">
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Appsala</p>
                    <img src={x} alt="">
                </div>
                <div class="logo-div logo-div-appsala">
                    <img src={appsala} alt="brand-img">
                    <p>appsala.com</p>
                </div>
                <div class="flex">
                    <p class="voted">5 People Voted</p>
                    <img src={user} alt="">
                </div>
            </div>
            <div class="dashboard-brand-card">
                <div class="flex">
                    <p class="brand-name">Wisul</p>
                    <img src={x} alt="">
                </div>
                <div class="logo-div logo-div-jumji" >
                    <img src={wisul} alt="brand-img">
                    <p>wisul.com</p>
                </div>
                <div class="flex">
                    <p class="voted">5 People Voted</p>
                    <img src={user} alt="">
                </div>
            </div>

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
            <div class="comment-div">
                <div class="flex">
                    <div class="flex dp-name">
                        <img src={person} alt="user-dp">
                        <p class="comment-user">Ali Raza</p>
                    </div>
                    <p class="comment-time">10 min ago</p>
                </div>
                <p class="comment margin-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates?</p>
               <div class="flex like-reply margin-left">
                <div class="flex likes">
                    <img src={like} alt="">
                    <p>255</p>
                </div>
                <p>Reply</p>
               </div>
            </div>
            <div class="comment-div">
                <div class="flex">
                    <div class="flex dp-name">
                        <img src={person} alt="user-dp">
                        <p class="comment-user">Ali Raza</p>
                    </div>
                    <p class="comment-time">10 min ago</p>
                </div>
                <p class="comment margin-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates?</p>
               <div class="flex like-reply margin-left">
                <div class="flex likes">
                    <img src={like} alt="">
                    <p>255</p>
                </div>
                <p>Reply</p>
               </div>
            </div>
            <div class="comment-div">
                <div class="flex">
                    <div class="flex dp-name">
                        <img src={person} alt="user-dp">
                        <p class="comment-user">Ali Raza</p>
                    </div>
                    <p class="comment-time">10 min ago</p>
                </div>
                <p class="comment margin-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates?</p>
               <div class="flex like-reply margin-left">
                <div class="flex likes">
                    <img src={like} alt="">
                    <p>255</p>
                </div>
                <p>Reply</p>
               </div>
            </div>
        </div>
    </div>

    <div class="get-suggestion">
        <p class="brand-section-heading">
            Get suggestions from friends
        </p>
        <div class="flex get-suggestion-first-child">
            <p>Get suggestions via link</p>
            <button class="btn">
                <div class="flex">
                    <p>Copy Link</p>
                    <img src={link} alt="" style="margin-left:7px;"/>
                                   </div>
            </button>
        </div>

        <div class="flex">
            <p style="font-weight: 600;">Invite your friends through mail</p>
            <p class="your-email">rajeshwar@gmail.com</p>
            <button class="btn">
                <div class="flex">
                    <img src={plus} alt=""/>
                    <p>Add Mail</p>
                </div>
            </button>
            <button class="btn">
                <div class="flex">
                    <img src={send} alt=""/>
                    <p>Send Invite Link</p>
                </div>
            </button>
        </div>

        <div class="flex">
            <div class="flex suggested-email">
                <p>aravindswamy@gmail.com</p>
                <img src={x} alt=""/>
            </div>
            <div class="flex suggested-email">
                <p>aravindswamy@gmail.com</p>
                <img src={x} alt=""/>
            </div>
            <div class="flex suggested-email">
                <p>aravindswamy@gmail.com</p>
                <img src={x} alt=""/>
            </div>
            <div class="flex suggested-email">
                <p>aravindswamy@gmail.com</p>
                <img src={x} alt=""/>
            </div>
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