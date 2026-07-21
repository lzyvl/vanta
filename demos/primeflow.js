/* =========================
PRIMEFLOW SERVICES
PREMIUM TRADES WEBSITE DEMO
========================= */

const primeflowDemo = `

<style>

.primeflow-demo{
--blue:#2563eb;
--cyan:#38bdf8;
--dark:#050816;
--card:#111827;
font-family:Inter,Arial,sans-serif;
background:
radial-gradient(circle at top right,#2563eb55,transparent 35%),
linear-gradient(180deg,#050816,#020617);
color:white;
min-height:100%;
padding-bottom:60px;
}


.primeflow-demo *{
box-sizing:border-box;
}


.pf-nav{

display:flex;
justify-content:space-between;
align-items:center;
padding:35px 45px;
position:sticky;
top:0;
background:#050816cc;
backdrop-filter:blur(20px);
z-index:5;

}


.pf-logo{

display:flex;
align-items:center;
gap:12px;
font-size:28px;
font-weight:800;

}


.pf-logo svg{

filter:drop-shadow(0 0 20px #38bdf8);

}



.pf-nav-links{

display:flex;
gap:25px;

}


.pf-nav-links a{

color:#94a3b8;
cursor:pointer;

}



.pf-btn{

background:linear-gradient(90deg,#2563eb,#38bdf8);
border:0;
color:white;
padding:15px 35px;
border-radius:50px;
font-weight:700;
cursor:pointer;
box-shadow:0 15px 40px #2563eb55;

}



.pf-hero{

padding:70px 45px;

}


.pf-tag{

color:#38bdf8;
letter-spacing:3px;
font-size:13px;
font-weight:700;

}


.pf-hero h1{

font-size:75px;
line-height:1;
max-width:750px;

}


.pf-hero span{

background:linear-gradient(90deg,#38bdf8,#2563eb);
-webkit-background-clip:text;
color:transparent;

}


.pf-text{

max-width:550px;
color:#94a3b8;
font-size:20px;
line-height:1.6;

}



.pf-stats{

display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
padding:45px;

}


.pf-stat{

background:#ffffff08;
border:1px solid #ffffff15;
padding:30px;
border-radius:25px;

}


.pf-stat h2{

font-size:40px;

}


.pf-stat p{

color:#94a3b8;

}




.pf-section{

padding:45px;

}


.pf-section h2{

font-size:40px;

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




.pf-portal{

background:
linear-gradient(135deg,#111827,#020617);
border:1px solid #ffffff15;
border-radius:30px;
padding:40px;

}



.portal-status{

display:flex;
justify-content:space-between;
padding:20px;
background:#ffffff08;
border-radius:20px;
margin-top:20px;

}




.pf-reviews{

display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;

}


.review{

background:#111827;
padding:30px;
border-radius:25px;

}



.stars{

color:#38bdf8;

}




.pf-modal{

position:fixed;
inset:0;
background:#00000099;
display:none;
align-items:center;
justify-content:center;
z-index:20;

}



.pf-modal.active{

display:flex;

}



.pf-form{

background:#111827;
padding:40px;
border-radius:30px;
width:400px;

}


.pf-form input{

width:100%;
padding:15px;
margin:10px 0;
background:#020617;
border:1px solid #ffffff20;
color:white;
border-radius:10px;

}



@media(max-width:900px){

.pf-grid,
.pf-stats,
.pf-projects,
.pf-reviews{

grid-template-columns:1fr;

}

.pf-hero h1{

font-size:45px;

}

}


</style>



<div class="primeflow-demo">



<nav class="pf-nav">


<div class="pf-logo">

<svg width="45" height="45" viewBox="0 0 100 100">

<rect width="100" height="100" rx="25" fill="#2563eb"/>

<path d="M25 65L50 20L75 65L50 50Z" fill="white"/>

</svg>

PrimeFlow

</div>


<div class="pf-nav-links">

<a>
Services
</a>

<a>
Projects
</a>

<a>
Reviews
</a>

</div>



<button class="pf-btn" onclick="openPrimeQuote()">
Get Quote
</button>


</nav>





<section class="pf-hero">

<p class="pf-tag">
PREMIUM PROPERTY SERVICES
</p>


<h1>

Your home.
<br>

<span>Handled properly.</span>

</h1>



<p class="pf-text">

PrimeFlow provides professional electrical,
repair and maintenance solutions for modern homes
and businesses.

</p>


<br>


<button class="pf-btn" onclick="openPrimeQuote()">
Book Service
</button>


</section>







<section class="pf-stats">


<div class="pf-stat">
<h2>500+</h2>
<p>Projects Completed</p>
</div>


<div class="pf-stat">
<h2>10+</h2>
<p>Years Experience</p>
</div>


<div class="pf-stat">
<h2>4.9★</h2>
<p>Customer Rating</p>
</div>


<div class="pf-stat">
<h2>24/7</h2>
<p>Support</p>
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
Installations, upgrades and emergency repairs.
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
Fast fixes completed by professionals.
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
Keep your property performing perfectly.
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
Luxury Home Upgrade
</div>


<div class="pf-project">
Office Renovation
</div>


<div class="pf-project">
Smart Home Setup
</div>


</div>


</section>







<section class="pf-section">


<h2>
Client Portal
</h2>


<div class="pf-portal">


<h3>
Current Booking
</h3>


<div class="portal-status">

<span>
Technician Assigned
</span>

<strong>
✓ Confirmed
</strong>

</div>


<div class="portal-status">

<span>
Arrival Time
</span>

<strong>
14:30
</strong>

</div>


</div>


</section>







<section class="pf-section">


<h2>
Customer Reviews
</h2>


<div class="pf-reviews">


<div class="review">

<div class="stars">
★★★★★
</div>

"Professional from start to finish."

</div>



<div class="review">

<div class="stars">
★★★★★
</div>

"Best service company we've used."

</div>


</div>


</section>






<div class="pf-modal" id="primeQuote">


<div class="pf-form">

<h2>
Request Quote
</h2>


<input placeholder="Name">


<input placeholder="Phone">


<input placeholder="Service Needed">


<button class="pf-btn">
Submit
</button>


</div>


</div>




<script>

function openPrimeQuote(){

document.querySelector("#primeQuote")
.classList.add("active");

}

</script>



</div>

`;
