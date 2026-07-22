const primeflowDemo = `

<style>

.primeflow-demo{
font-family:Inter,Arial,sans-serif;
background:
radial-gradient(circle at top right,#2563eb55,transparent 35%),
linear-gradient(180deg,#020617,#050816);
color:white;
min-height:100%;
padding-bottom:80px;
}


.primeflow-demo *{
box-sizing:border-box;
}


.pf-nav{

display:flex;
justify-content:space-between;
align-items:center;
padding:35px 50px;

}



.pf-brand{

display:flex;
align-items:center;
gap:14px;
font-size:28px;
font-weight:800;

}



.pf-brand svg{

filter:drop-shadow(0 0 20px #38bdf8);

}



.pf-btn{

background:linear-gradient(90deg,#2563eb,#38bdf8);
border:none;
color:white;
padding:15px 32px;
border-radius:50px;
font-weight:700;
cursor:pointer;
transition:.3s;

}


.pf-btn:hover{

transform:translateY(-3px);

}



.pf-links{

display:flex;
gap:25px;

}



.pf-links span{

color:#94a3b8;
cursor:pointer;

}




.pf-hero{

padding:70px 50px;

}



.pf-small{

color:#38bdf8;
letter-spacing:4px;
font-size:13px;
font-weight:700;

}



.pf-hero h1{

font-size:75px;
line-height:1;
max-width:800px;
margin:25px 0;

}



.pf-hero h1 span{

background:linear-gradient(90deg,#38bdf8,#2563eb);
-webkit-background-clip:text;
color:transparent;

}



.pf-text{

max-width:600px;
font-size:20px;
line-height:1.6;
color:#94a3b8;

}




.pf-stats{

display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
padding:50px;

}



.pf-stat{

background:#ffffff08;
border:1px solid #ffffff15;
border-radius:25px;
padding:30px;

}



.pf-stat h2{

font-size:40px;
margin:0;

}



.pf-stat p{

color:#94a3b8;

}





.pf-section{

padding:50px;

}



.pf-section h2{

font-size:42px;

}



.pf-grid{

display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;

}



.pf-card{

background:#111827;
border:1px solid #ffffff12;
padding:35px;
border-radius:25px;
transition:.3s;

}



.pf-card:hover{

transform:translateY(-10px);
border-color:#38bdf8;

}



.pf-icon{

font-size:40px;

}



.pf-projects{

display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;

}



.pf-project{

height:220px;
border-radius:25px;
background:
linear-gradient(135deg,#2563eb,#020617);
display:flex;
align-items:end;
padding:25px;
font-size:22px;
font-weight:700;

}



.pf-review{

background:#111827;
border-radius:25px;
padding:30px;
margin-top:20px;

}



.pf-stars{

color:#38bdf8;

}



/* MODAL */


.pf-modal{

position:fixed;
inset:0;
background:#000000aa;
display:none;
align-items:center;
justify-content:center;
z-index:100;

}



.pf-modal.active{

display:flex;

}



.pf-box{

background:#0f172a;
padding:40px;
border-radius:30px;
width:400px;
border:1px solid #ffffff20;

}



.pf-box input,
.pf-box textarea{

width:100%;
padding:15px;
margin:10px 0;
border-radius:12px;
border:none;
background:#020617;
color:white;

}



@media(max-width:900px){

.pf-grid,
.pf-stats,
.pf-projects{

grid-template-columns:1fr;

}


.pf-hero h1{

font-size:45px;

}

}


</style>




<div class="primeflow-demo">



<nav class="pf-nav">


<div class="pf-brand">


<svg width="45" height="45" viewBox="0 0 100 100">

<rect width="100" height="100" rx="25" fill="#2563eb"/>

<path d="M25 70L50 20L75 70L50 55Z" fill="white"/>

</svg>


PrimeFlow


</div>



<div class="pf-links">

<span>Services</span>
<span>Projects</span>
<span>Reviews</span>

</div>



<button class="pf-btn pf-open">

Get Quote

</button>


</nav>






<section class="pf-hero">


<p class="pf-small">
PREMIUM PROPERTY SERVICES
</p>



<h1>

Professional work.
<br>

<span>Perfect results.</span>

</h1>




<p class="pf-text">

PrimeFlow provides reliable electrical,
maintenance and repair solutions for homes
and businesses across the UK.

</p>



<br>


<button class="pf-btn pf-open">

Book Service

</button>


</section>







<section class="pf-stats">


<div class="pf-stat">

<h2>
500+
</h2>

<p>
Projects Complete
</p>

</div>



<div class="pf-stat">

<h2>
10+
</h2>

<p>
Years Experience
</p>

</div>



<div class="pf-stat">

<h2>
4.9★
</h2>

<p>
Average Rating
</p>

</div>



<div class="pf-stat">

<h2>
24/7
</h2>

<p>
Support
</p>

</div>


</section>







<section class="pf-section">


<h2>
Our Services
</h2>


<div class="pf-grid">


<div class="pf-card">

<div class="pf-icon">
⚡
</div>

<h3>
Electrical
</h3>

<p>
Professional installations and upgrades.
</p>

</div>




<div class="pf-card">

<div class="pf-icon">
🔧
</div>

<h3>
Repairs
</h3>

<p>
Fast solutions when you need them.
</p>

</div>




<div class="pf-card">

<div class="pf-icon">
🏠
</div>

<h3>
Maintenance
</h3>

<p>
Protect your property long term.
</p>

</div>


</div>


</section>








<section class="pf-section">


<h2>
Recent Projects
</h2>


<div class="pf-projects">


<div class="pf-project">
Smart Home Upgrade
</div>


<div class="pf-project">
Luxury Renovation
</div>


<div class="pf-project">
Commercial Install
</div>


</div>


</section>







<section class="pf-section">


<h2>
Customer Reviews
</h2>



<div class="pf-review">

<div class="pf-stars">
★★★★★
</div>

"Outstanding service. Professional from start to finish."

</div>




<div class="pf-review">

<div class="pf-stars">
★★★★★
</div>

"Quick response and excellent workmanship."

</div>



</section>







<div class="pf-modal">


<div class="pf-box">


<h2>
Request Quote
</h2>


<input placeholder="Your Name">


<input placeholder="Phone Number">


<textarea placeholder="What service do you need?"></textarea>



<button class="pf-btn">

Send Request

</button>


</div>


</div>







<script>

(function(){


const modal =
document.querySelector(".pf-modal");


document.querySelectorAll(".pf-open")
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
