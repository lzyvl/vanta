const ameliaDemo = `

<style>

.amelia-demo{

font-family:Inter,Arial,sans-serif;

background:
linear-gradient(180deg,#fff8f5,#fff1ed);

color:#2d1b1b;

min-height:100%;

padding-bottom:80px;

}


.amelia-demo *{

box-sizing:border-box;

}



.am-nav{

display:flex;

justify-content:space-between;

align-items:center;

padding:35px 50px;

}



.am-brand{

display:flex;

align-items:center;

gap:15px;

font-size:30px;

font-weight:700;

font-family:Georgia,serif;

}



.am-brand svg{

filter:drop-shadow(0 10px 20px #d98c8c55);

}




.am-btn{

background:#d98c8c;

color:white;

border:none;

padding:15px 35px;

border-radius:50px;

font-weight:700;

cursor:pointer;

transition:.3s;

}



.am-btn:hover{

transform:translateY(-3px);

}



.am-links{

display:flex;

gap:25px;

color:#8b5e5e;

}




.am-hero{

padding:70px 50px;

display:grid;

grid-template-columns:1fr 1fr;

gap:50px;

align-items:center;

}



.am-tag{

letter-spacing:4px;

font-size:13px;

color:#c77d7d;

font-weight:700;

}



.am-hero h1{

font-size:75px;

font-family:Georgia,serif;

line-height:1;

margin:25px 0;

}



.am-hero span{

color:#d98c8c;

}



.am-text{

font-size:20px;

line-height:1.6;

color:#7c5b5b;

}




.am-image{

height:500px;

border-radius:40px;

background:

linear-gradient(
135deg,
#e7b6b6,
#fff
);

display:flex;

align-items:center;

justify-content:center;

font-size:100px;

}





.am-section{

padding:50px;

}



.am-section h2{

font-family:Georgia,serif;

font-size:45px;

}




.am-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

}




.am-card{

background:white;

padding:35px;

border-radius:30px;

box-shadow:

0 20px 50px rgba(100,50,50,.08);

transition:.3s;

}



.am-card:hover{

transform:translateY(-10px);

}



.am-icon{

font-size:40px;

}





.am-gallery{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:20px;

}



.am-photo{

height:230px;

border-radius:25px;

background:

linear-gradient(
135deg,
#f4caca,
#fff
);

display:flex;

align-items:center;

justify-content:center;

font-size:50px;

}





.am-team{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

}



.am-person{

background:white;

padding:30px;

border-radius:25px;

text-align:center;

}





.am-review{

background:white;

padding:30px;

border-radius:25px;

margin-top:20px;

}



.am-stars{

color:#d98c8c;

}




/* BOOKING */


.am-modal{

position:fixed;

inset:0;

background:#0008;

display:none;

align-items:center;

justify-content:center;

z-index:100;

}



.am-modal.active{

display:flex;

}




.am-box{

background:white;

padding:40px;

border-radius:30px;

width:400px;

}



.am-box input{

width:100%;

padding:15px;

margin:10px 0;

border-radius:12px;

border:1px solid #ddd;

}





@media(max-width:900px){

.am-hero{

grid-template-columns:1fr;

}


.am-grid,
.am-gallery,
.am-team{

grid-template-columns:1fr;

}


.am-hero h1{

font-size:45px;

}

}


</style>





<div class="amelia-demo">






<nav class="am-nav">



<div class="am-brand">


<svg width="45" height="45" viewBox="0 0 100 100">


<circle cx="50" cy="50" r="45" fill="#d98c8c"/>


<path d="M50 25 C25 45 25 70 50 80 C75 70 75 45 50 25" fill="white"/>


</svg>


Amelia Beauty


</div>




<div class="am-links">

<span>Services</span>

<span>Gallery</span>

<span>Contact</span>


</div>




<button class="am-btn am-book">

Book Now

</button>



</nav>








<section class="am-hero">


<div>


<p class="am-tag">

LUXURY BEAUTY STUDIO

</p>




<h1>

Beauty

<span>

redefined.

</span>

</h1>




<p class="am-text">

Premium beauty treatments designed
to help you look and feel your best.

</p>



<br>


<button class="am-btn am-book">

Reserve Appointment

</button>


</div>






<div class="am-image">

✿

</div>




</section>









<section class="am-section">


<h2>

Signature Treatments

</h2>




<div class="am-grid">



<div class="am-card">

<div class="am-icon">
💅
</div>

<h3>
Luxury Nails
</h3>

<p>
Professional manicures and custom designs.
</p>

</div>




<div class="am-card">

<div class="am-icon">
✨
</div>

<h3>
Skin Treatments
</h3>

<p>
Premium facials and skincare experiences.
</p>

</div>




<div class="am-card">

<div class="am-icon">
💄
</div>

<h3>
Makeup
</h3>

<p>
Events, weddings and special occasions.
</p>

</div>



</div>


</section>









<section class="am-section">


<h2>

Our Gallery

</h2>



<div class="am-gallery">


<div class="am-photo">
💅
</div>


<div class="am-photo">
✨
</div>


<div class="am-photo">
🌸
</div>


</div>


</section>









<section class="am-section">


<h2>

Meet The Team

</h2>



<div class="am-team">


<div class="am-person">

<h3>
Amelia
</h3>

<p>
Founder & Stylist
</p>

</div>



<div class="am-person">

<h3>
Sophie
</h3>

<p>
Beauty Specialist
</p>

</div>



<div class="am-person">

<h3>
Mia
</h3>

<p>
Nail Artist
</p>

</div>



</div>


</section>









<section class="am-section">


<h2>

Client Reviews

</h2>



<div class="am-review">


<div class="am-stars">

★★★★★

</div>


"Absolutely beautiful studio. Best experience I've had."

</div>



<div class="am-review">


<div class="am-stars">

★★★★★

</div>


"Professional, friendly and amazing results."

</div>



</section>









<div class="am-modal">


<div class="am-box">


<h2>
Book Appointment
</h2>


<input placeholder="Name">


<input placeholder="Preferred Date">


<input placeholder="Treatment">



<button class="am-btn">

Confirm Booking

</button>



</div>


</div>








<script>

(function(){


const modal =
document.querySelector(".am-modal");



document.querySelectorAll(".am-book")
.forEach(btn=>{


btn.onclick=()=>{

modal.classList.add("active");

};


});



modal.onclick=(e)=>{


if(e.target===modal){

modal.classList.remove("active");

}

};


})();

</script>





</div>

`;
