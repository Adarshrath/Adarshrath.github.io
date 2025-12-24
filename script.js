/* PARTICLES */
const c=document.getElementById("particles"),ctx=c.getContext("2d");
function r(){c.width=innerWidth;c.height=innerHeight}r();onresize=r;
let dots=[...Array(40)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,dx:(Math.random()-.5)*.3,dy:(Math.random()-.5)*.3}));
(function a(){ctx.clearRect(0,0,c.width,c.height);dots.forEach(d=>{d.x+=d.dx;d.y+=d.dy;if(d.x<0||d.x>c.width)d.dx*=-1;if(d.y<0||d.y>c.height)d.dy*=-1;ctx.fillStyle="rgba(56,189,248,.6)";ctx.beginPath();ctx.arc(d.x,d.y,2,0,Math.PI*2);ctx.fill()});requestAnimationFrame(a)})();

/* PROJECT CONTENT */
const modal=document.getElementById("modal");
const body=document.getElementById("modal-body");

const projects={
p1:`<h2>iOS Habit Reducer App</h2>
<p>This project was built to address a common flaw in habit-tracking applications: rigid streak systems that discourage users after minor lapses. I wanted to explore how behavioral psychology could be translated into application logic.</p>
<p><b>Problem:</b> Most apps reset progress after one missed day, causing demotivation.</p>
<p><b>What I did:</b> Designed a SwiftUI-based app with dynamic streak calculation instead of static counters.</p>
<p><b>How it works:</b> Habits store timestamps. On app launch, streaks are recalculated based on date comparisons, allowing flexibility.</p>
<p><b>Challenges:</b> Managing SwiftUI state persistence and handling edge cases like timezone changes.</p>
<p><b>Learnings:</b> iOS lifecycle management, state-driven UI design, and UX-aligned logic.</p>`,

p2:`<h2>Travel Companion (Machine Learning)</h2>
<p>This project focuses on solving the issue of generic travel recommendations that ignore personal preferences.</p>
<p><b>Problem:</b> Users receive irrelevant destination suggestions.</p>
<p><b>What I did:</b> Built a recommendation system using similarity-based ML.</p>
<p><b>How it works:</b> User preferences are converted into numerical vectors and compared using KNN distance metrics.</p>
<p><b>Challenges:</b> Sparse data and performance optimization.</p>
<p><b>Learnings:</b> ML pipelines, similarity scoring, and system optimization.</p>`,

p3:`<h2>Sales Insights Dashboard</h2>
<p>This project transforms raw sales data into actionable business insights.</p>
<p><b>Problem:</b> Stakeholders struggled to interpret raw datasets.</p>
<p><b>What I did:</b> Cleaned data, wrote SQL queries for KPIs, and visualized metrics in Power BI.</p>
<p><b>Outcome:</b> Faster and clearer business decision-making.</p>
<p><b>Learnings:</b> Data storytelling and analytics-driven design.</p>`,

p4:`<h2>E-commerce Order Analytics</h2>
<p>This project analyzes order lifecycle data to identify delivery bottlenecks.</p>
<p><b>Problem:</b> Delays were occurring without clear reasons.</p>
<p><b>What I did:</b> Used SQL CTEs and window functions to analyze order flows.</p>
<p><b>Outcome:</b> Identified operational inefficiencies.</p>
<p><b>Learnings:</b> Advanced SQL and analytical thinking.</p>`,

p5:`<h2>DSA Problem Tracker</h2>
<p>This project was built to bring structure to daily DSA practice.</p>
<p><b>Problem:</b> Untracked problem-solving leads to poor pattern recognition.</p>
<p><b>What I did:</b> Built a Java-based tracker to categorize problems by topic and difficulty.</p>
<p><b>Outcome:</b> Improved consistency and problem-solving discipline.</p>
<p><b>Learnings:</b> Algorithmic patterns and structured learning.</p>`
};

document.querySelectorAll(".project-card").forEach(c=>{
  c.onclick=()=>{
    body.innerHTML=projects[c.dataset.project];
    modal.classList.add("active");
    gtag('event','project_open',{project:c.dataset.project});
  };
});

document.querySelector(".close").onclick=()=>modal.classList.remove("active");
window.onkeydown=e=>e.key==="Escape"&&modal.classList.remove("active");

/* THEME TOGGLE */
document.getElementById("themeSwitch").onclick=()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
};
