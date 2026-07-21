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
    --card:#0f172a;
    font-family:Inter,Arial,sans-serif;
    background:
    radial-gradient(circle at top right,#2563eb40,transparent 35%),
    linear-gradient(180deg,#050816,#020617);
    color:white;
    min-height:100%;
    overflow:hidden;
}


.primeflow-demo *{
    box-sizing:border-box;
}



.prime-nav{

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:35px 50px;

}



.prime-logo{

    display:flex;
    align-items:center;
    gap:14px;
    font-size:28px;
    font-weight:800;

}



.prime-logo svg{

    filter:drop-shadow(0 0 20px #38bdf8);

}




.prime-btn{

    background:linear-gradient(90deg,var(--blue),var(--cyan));
    color:white;
    border:none;
    padding:14px 30px;
    border-radius:40px;
    font-weight:700;
    box-shadow:0 15px 40px #2563eb55;
    cursor:pointer;

}



.prime-hero{

    padding:50px;

}



.prime-tag{

    color:var(--cyan);
    font-size:13px;
    letter-spacing:3px;
    font-weight:700;

}



.prime-hero h1{

    font-size:70px;
    line-height:1;
    max-width:700px;
    margin:25px 0;

}



.prime-hero h1 span{

    background:linear-gradient(90deg,#38bdf8,#2563eb);
    -webkit-background-clip:text;
    color:transparent;

}



.prime-description{

    color:#94a3b8;
    font-size:20px;
    max-width:550px;
    line-height:1.6;

}



.prime-stats{

    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    padding:50px;

}



.prime-stat{

    background:#ffffff08;
    border:1px solid #ffffff15;
    backdrop-filter:blur(20px);
    padding:30px;
    border-radius:25px;

}



.prime-stat h2{

    color:white;
    font-size:42px;
    margin-bottom:10px;

}



.prime-stat p{

    color:#94a3b8;

}




.prime-section{

    padding:50px;

}



.prime-section h2{

    font-size:42px;
    margin-bottom:35px;

}



.prime-services{

    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:25px;

}



.prime-card{

    background:
    linear-gradient(
    145deg,
    #111827,
    #020617
    );

    border:1px solid #ffffff15;
    padding:35px;
    border-radius:25px;
    transition:.3s;

}



.prime-card:hover{

    transform:translateY(-10px);
    border-color:#38bdf8;

}



.prime-icon{

    font-size:40px;
    margin-bottom:20px;

}



.prime-card h3{

    font-size:24px;
    margin-bottom:15px;

}



.prime-card p{

    color:#94a3b8;
    line-height:1.5;

}




.quote-box{

    margin:50px;
    padding:45px;
    border-radius:30px;
    background:
    linear-gradient(
    135deg,
    #2563eb,
    #0ea5e9
    );

}



.quote-box h2{

    font-size:38px;

}



.quote-box button{

    margin-top:25px;
    background:white;
    color:#2563eb;
    border:0;
    padding:15px 35px;
    border-radius:40px;
    font-weight:700;

}




.review-grid{

    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:20px;

}



.review-card{

    background:#111827;
    padding:30px;
    border-radius:20px;
    border:1px solid #ffffff10;

}



.stars{

    color:#38bdf8;
    font-size:22px;

}



@media(max-width:800px){

.prime-hero h1{

font-size:45px;

}


.prime-services,
.prime-stats,
.review-grid{

grid-template-columns:1fr;

}

}


</style>



<div class="primeflow-demo">



<nav class="prime-nav">


<div class="prime-logo">


<svg width="45" height="45" viewBox="0 0 100 100">

<rect width="100" height="100" rx="25" fill="#2563eb"/>

<path d="M25 65L50 25L75 65L50 55Z" fill="white"/>

</svg>


PrimeFlow

</div>



<button class="prime-btn">
Get Quote
</button>


</nav>





<section class="prime-hero">


<p class="prime-tag">
PREMIUM HOME SERVICES
</p>


<h1>
Reliable work.
<br>
<span>Exceptional results.</span>
</h1>


<p class="prime-description">

PrimeFlow delivers professional electrical,
maintenance and property solutions with
speed, precision and guaranteed quality.

</p>


<br>


<button class="prime-btn">
Book Service
</button>


</section>







<section class="prime-stats">


<div class="prime-stat">

<h2>
500+
</h2>

<p>
Completed Projects
</p>

</div>



<div class="prime-stat">

<h2>
4.9★
</h2>

<p>
Customer Rating
</p>

</div>



<div class="prime-stat">

<h2>
24/7
</h2>

<p>
Support Available
</p>

</div>



</section>







<section class="prime-section">


<h2>
Our Expertise
</h2>


<div class="prime-services">


<div class="prime-card">

<div class="prime-icon">
⚡
</div>

<h3>
Electrical
</h3>

<p>
Safe installations, repairs and upgrades from certified professionals.
</p>

</div>



<div class="prime-card">

<div class="prime-icon">
🔧
</div>

<h3>
Repairs
</h3>

<p>
Fast solutions designed to keep your property running perfectly.
</p>

</div>



<div class="prime-card">

<div class="prime-icon">
🏠
</div>

<h3>
Maintenance
</h3>

<p>
Protect your investment with reliable ongoing servicing.
</p>

</div>



</div>


</section>







<div class="quote-box">


<h2>
Need a professional today?
</h2>


<p>
Get a free consultation and quote within minutes.
</p>


<button>
Request Quote
</button>


</div>







<section class="prime-section">


<h2>
Customer Reviews
</h2>


<div class="review-grid">


<div class="review-card">

<div class="stars">
★★★★★
</div>

<br>

"Fantastic service from start to finish. Highly recommended."

</div>



<div class="review-card">

<div class="stars">
★★★★★
</div>

<br>

"Professional team, excellent communication and quality work."

</div>


</div>


</section>



</div>

`;
