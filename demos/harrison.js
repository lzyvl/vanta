const harrisonDemo = `

<style>

.harrison-demo{

font-family:Inter,Arial,sans-serif;

background:
radial-gradient(circle at top right,#c9a22735,transparent 35%),
linear-gradient(180deg,#050505,#111);

color:white;

min-height:100%;

padding-bottom:80px;

}


.harrison-demo *{

box-sizing:border-box;

}



.hr-nav{

display:flex;

justify-content:space-between;

align-items:center;

padding:35px 50px;

}




.hr-brand{

display:flex;

align-items:center;

gap:15px;

font-family:Georgia,serif;

font-size:30px;

font-weight:700;

}



.hr-brand svg{

filter:
drop-shadow(0 0 20px #c9a227);

}





.hr-btn{

background:
linear-gradient(90deg,#c9a227,#f5d76e);

color:#111;

border:none;

padding:15px 35px;

border-radius:50px;

font-weight:800;

cursor:pointer;

transition:.3s;

}



.hr-btn:hover{

transform:translateY(-3px);

}



.hr-links{

display:flex;

gap:25px;

color:#bdbdbd;

}




.hr-hero{

padding:70px 50px;

}



.hr-tag{

color:#c9a227;

letter-spacing:5px;

font-size:12px;

font-weight:700;

}



.hr-hero h1{

font-family:Georgia,serif;

font-size:80px;

line-height:1;

max-width:850px;

margin:30px 0;

}




.hr-hero span{

color:#c9a227;

}




.hr-text{

font-size:20px;

color:#aaa;

max-width:600px;

line-height:1.6;

}





.hr-stats{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

padding:50px;

}



.hr-stat{

background:#ffffff08;

border:1px solid #ffffff15;

padding:30px;

border-radius:25px;

}



.hr-stat h2{

font-size:42px;

color:#c9a227;

margin:0;

}





.hr-section{

padding:50px;

}



.hr-section h2{

font-family:Georgia,serif;

font-size:45px;

}





.hr-properties{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:25px;

}




.hr-property{

height:300px;

border-radius:30px;

background:

linear-gradient(
135deg,
#c9a227,
#111
);

padding:30px;

display:flex;

flex-direction:column;

justify-content:end;

font-size:22px;

font-weight:700;

}




.hr-card{

background:#111;

border:1px solid #ffffff15;

padding:35px;

border-radius:30px;

}





.hr-portal{

background:#111;

border-radius:30px;

padding:40px;

border:1px solid #ffffff15;

}



.hr-row{

display:flex;

justify-content:space-between;

background:#ffffff08;

padding:20px;

border-radius:15px;

margin-top:15px;

}




.hr-review{

background:#111;

padding:30px;

border-radius:25px;

margin-top:20px;

}



.hr-stars{

color:#c9a227;

}





/* MODAL */


.hr-modal{

position:fixed;

inset:0;

background:#000c;

display:none;

align-items:center;

justify-content:center;

z-index:100;

}



.hr-modal.active{

display:flex;

}



.hr-box{

background:#111;

padding:40px;

border-radius:30px;

width:420px;

border:1px solid #c9a22755;

}



.hr-box input{

width:100%;

padding:15px;

margin:10px 0;

background:#050505;

border:1px solid #333;

color:white;

border-radius:12px;

}





@media(max-width:900px){


.hr-stats,
.hr-properties{

grid-template-columns:1fr;

}


.hr-hero h1{

font-size:45px;

}


}


</style>





<div class="harrison-demo">





<nav class="hr-nav">


<div class="hr-brand">


<svg width="45" height="45" viewBox="0 0 100 100">


<circle cx="50" cy="50" r="45" fill="#c9a227"/>


<path d="M25 65L50 25L75 65H60V75H40V65Z" fill="#111"/>


</svg>


Harrison & Co


</div>




<div class="hr-links">

<span>Properties</span>

<span>Investments</span>

<span>About</span>

</div>




<button class="hr-btn hr-open">

Book Valuation

</button>



</nav>









<section class="hr-hero">


<p class="hr-tag">

LUXURY PROPERTY GROUP

</p>




<h1>

Exceptional homes.

<br>

<span>
Smart investments.
</span>

</h1>





<p class="hr-text">

Harrison & Co specialises in luxury
properties, premium developments and
strategic property investments.

</p>



<br>


<button class="hr-btn hr-open">

Request Valuation

</button>



</section>









<section class="hr-stats">


<div class="hr-stat">

<h2>
£250M+
</h2>

<p>
Property Sold
</p>

</div>




<div class="hr-stat">

<h2>
15+
</h2>

<p>
Years Experience
</p>

</div>




<div class="hr-stat">

<h2>
98%
</h2>

<p>
Client Satisfaction
</p>

</div>




<div class="hr-stat">

<h2>
24/7
</h2>

<p>
Private Support
</p>

</div>



</section>









<section class="hr-section">


<h2>

Featured Properties

</h2>



<div class="hr-properties">


<div class="hr-property">

Chelsea Residence

</div>



<div class="hr-property">

Modern Kensington Villa

</div>



<div class="hr-property">

Luxury City Apartment

</div>



</div>



</section>









<section class="hr-section">


<h2>

Private Client Portal

</h2>



<div class="hr-portal">


<h3>
Investment Overview
</h3>



<div class="hr-row">

<span>
Portfolio Value
</span>

<strong>
£2.4M
</strong>

</div>




<div class="hr-row">

<span>
Current Status
</span>

<strong>
Active
</strong>

</div>




<div class="hr-row">

<span>
Next Viewing
</span>

<strong>
Tomorrow 14:00
</strong>

</div>



</div>



</section>









<section class="hr-section">


<h2>
Client Reviews
</h2>



<div class="hr-review">


<div class="hr-stars">

★★★★★

</div>


"Harrison & Co delivered an outstanding buying experience."

</div>



<div class="hr-review">


<div class="hr-stars">

★★★★★

</div>


"Professional, discreet and extremely knowledgeable."

</div>



</section>









<div class="hr-modal">


<div class="hr-box">


<h2>
Property Valuation
</h2>



<input placeholder="Your Name">


<input placeholder="Property Location">


<input placeholder="Email">



<button class="hr-btn">

Submit Request

</button>



</div>


</div>









<script>

(function(){


const modal =
document.querySelector(".hr-modal");



document.querySelectorAll(".hr-open")
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
