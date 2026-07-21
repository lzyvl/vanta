<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Harrison & Co | Private Advisory</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Inter,sans-serif;
background:#080b12;
color:white;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:30px 8%;
}

.logo{
font-family:"Playfair Display";
font-size:28px;
letter-spacing:1px;
}

.logo span{
color:#d8b36a;
}

nav button{
background:#d8b36a;
border:none;
padding:12px 25px;
border-radius:30px;
font-weight:600;
}

.hero{
padding:100px 8%;
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
align-items:center;
}

.hero h1{
font-family:"Playfair Display";
font-size:70px;
line-height:1.05;
}

.hero h1 span{
color:#d8b36a;
}

.hero p{
margin:30px 0;
color:#aaa;
font-size:18px;
max-width:500px;
}

.cta{
background:#d8b36a;
color:#111;
padding:16px 35px;
border-radius:40px;
display:inline-block;
}

.building{
height:450px;
border-radius:30px;
background:
linear-gradient(
135deg,
rgba(216,179,106,.3),
transparent
),
url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c")
center/cover;
}


.stats{
display:flex;
justify-content:center;
gap:80px;
padding:60px 8%;
background:#0d111c;
}

.stat h2{
font-size:40px;
color:#d8b36a;
}

.services{
padding:80px 8%;
}

.cards{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
margin-top:40px;
}

.card{
background:#111724;
padding:35px;
border-radius:20px;
border:1px solid #222;
}

.card h3{
margin-bottom:15px;
color:#d8b36a;
}

.review{
margin:80px 8%;
padding:40px;
background:#111724;
border-radius:25px;
font-size:22px;
font-family:"Playfair Display";
}

@media(max-width:900px){

.hero{
grid-template-columns:1fr;
}

.hero h1{
font-size:45px;
}

.cards{
grid-template-columns:1fr;
}

}

</style>

</head>


<body>


<nav>

<div class="logo">
HARRISON <span>& CO</span>
</div>

<button>
Book Consultation
</button>

</nav>



<section class="hero">

<div>

<h1>
Private Advisory
for <span>Modern Wealth</span>
</h1>


<p>
Harrison & Co provides strategic property,
investment and lifestyle advisory services
for high-net-worth individuals.
</p>


<a class="cta">
Explore Services
</a>

</div>


<div class="building"></div>


</section>



<section class="stats">

<div class="stat">
<h2>18+</h2>
<p>Years Experience</p>
</div>


<div class="stat">
<h2>240</h2>
<p>Clients Served</p>
</div>


<div class="stat">
<h2>£85M</h2>
<p>Assets Managed</p>
</div>


</section>




<section class="services">

<h2>
Our Expertise
</h2>


<div class="cards">


<div class="card">
<h3>Property Strategy</h3>
<p>
Acquisition and portfolio growth strategies.
</p>
</div>


<div class="card">
<h3>Private Advisory</h3>
<p>
Personalised financial planning solutions.
</p>
</div>


<div class="card">
<h3>Global Network</h3>
<p>
Exclusive opportunities worldwide.
</p>
</div>


</div>

</section>



<div class="review">

"Professional, discreet and incredibly effective.
Harrison & Co transformed the way we manage our assets."

</div>



</body>
</html>
