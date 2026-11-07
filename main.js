/* =========================================================================
   APP — People of the Bible (main.js)
   The data lives in data-nt.js and data-ot.js, which index.html loads
   before this file. Everything below is registry, layout and rendering.
   ========================================================================= */

/* ================= DATASET REGISTRY ================= */
const DATASETS = {
  nt:{ CAT:NT_CAT, PEOPLE:NT_PEOPLE, LINKS:NT_LINKS, EVENTS:NT_EVENTS, LIVES:NT_LIVES, META:NT_META },
  ot:{ CAT:OT_CAT, PEOPLE:OT_PEOPLE, LINKS:OT_LINKS, EVENTS:OT_EVENTS, LIVES:OT_LIVES, META:OT_META }
};
let TESTAMENT="nt", CAT, PEOPLE, LINKS, TL_EVENTS, TL_LIVES, META;

/* =========================================================================
   SETUP
   ========================================================================= */
let byId={}, rawLinks=[], neighbors={};
const catColorVar = c => CAT[c].color;
const kindVar = k => LG[k];
// dashed = calling & succession; dotted = possible / disputed / traditional; dash-dot = the devil
const linkDash = d => UNSURE_RE.test(d.note||"") ? "1 4" : d.kind==="spec" ? "6 4" : d.kind==="dev" ? "9 3 2 3" : null;
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const svg = d3.select("#graph");
const stage = document.getElementById("stage");
let W = stage.clientWidth, H = stage.clientHeight;

const gRoot = svg.append("g");
const gLinks = gRoot.append("g").attr("stroke-opacity",.9);
const gNodes = gRoot.append("g");
const gLabels = gRoot.append("g");

const tooltip = d3.select("#tooltip");

// zoom
const zoom = d3.zoom().scaleExtent([0.3,3.2]).on("zoom", e=>gRoot.attr("transform", e.transform));
svg.call(zoom).on("dblclick.zoom", null);

// cluster centres by category (from the active dataset's META)
function centroids(){
  const c={};
  for(const k in META.centroids){ const f=META.centroids[k]; c[k]=[f[0]*W, f[1]*H]; }
  return c;
}
let CENT = {};
const tX = d => d.id===META.hub ? W*0.5 : (CENT[d.cat]?CENT[d.cat][0]:W*0.5);
const tY = d => d.id===META.hub ? H*0.46 : (CENT[d.cat]?CENT[d.cat][1]:H*0.5);

// --- saved-arrangement persistence (works when opened in a real browser;
//     silently no-ops in sandboxes where storage is blocked)
let PIN_KEY = "bible-people-map:nt:pins:v1";
function loadPins(){ try{ const r=localStorage.getItem(PIN_KEY); return r?JSON.parse(r):null; }catch(e){ return null; } }
function savePins(){
  try{
    const d={};
    nodes.forEach(n=>{ if(n.pinned && n.fx!=null && n.fy!=null) d[n.id]=[Math.round(n.fx*10)/10, Math.round(n.fy*10)/10]; });
    localStorage.setItem(PIN_KEY, JSON.stringify(d));
  }catch(e){/* storage unavailable — session only */}
}

// ---- module-scope graph state (rebuilt per dataset in build()) ----
let nodes=[], links=[], sim=null, linkSel, nodeSel, labelSel;

const linkDist = l => {
  if(l.kind==="fam") return 46;
  if(l.kind==="disc") return 66;
  if(l.kind==="spec") return 80;
  return 74;
};

function syncPins(){ if(nodeSel) nodeSel.select(".pin-tack").attr("opacity",d=>d.pinned?1:0); }

function ticked(){
  linkSel.attr("d",d=>{
    const s=d.source, t=d.target;
    const dx=t.x-s.x, dy=t.y-s.y, dr=Math.hypot(dx,dy)*1.9;
    return `M${s.x},${s.y}A${dr},${dr} 0 0,1 ${t.x},${t.y}`;
  });
  nodeSel.attr("transform",d=>`translate(${d.x},${d.y})`);
  labelSel.attr("x",d=>d.x).attr("y",d=>d.y);
}

function build(){
  selectedId=null; clashActive=null; activeCats=defaultCats(); lensShown=new Set();
  byId = Object.fromEntries(PEOPLE.map(p=>[p.id,p]));
  rawLinks = LINKS.map(l=>({...l}));
  neighbors = {}; PEOPLE.forEach(p=>neighbors[p.id]=new Set());
  rawLinks.forEach(l=>{ neighbors[l.source].add(l.target); neighbors[l.target].add(l.source); });
  W=stage.clientWidth; H=stage.clientHeight;
  CENT = centroids();

  nodes = PEOPLE.map(p=>({...p}));
  links = rawLinks.map(l=>({...l}));

  const saved = loadPins();
  if(saved){ nodes.forEach(n=>{ const p=saved[n.id]; if(Array.isArray(p)){ n.x=n.fx=p[0]; n.y=n.fy=p[1]; n.pinned=true; } }); }

  if(sim) sim.stop();
  sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d=>d.id).distance(linkDist).strength(l=>l.kind==="fam"?0.55:0.28))
    .force("charge", d3.forceManyBody().strength(d=>-70 - d.w*10))
    .force("collide", d3.forceCollide().radius(d=>d.w+13).strength(.9))
    .force("x", d3.forceX(tX).strength(d=>d.id===META.hub?.16:.08))
    .force("y", d3.forceY(tY).strength(d=>d.id===META.hub?.16:.08))
    .force("center", d3.forceCenter(W/2, H/2).strength(.02));

  gLinks.selectAll("*").remove();
  linkSel = gLinks.selectAll("path").data(links).join("path")
    .attr("class","link")
    .attr("stroke", d=>kindVar(d.kind))
    .attr("stroke-width", d=> d.kind==="fam"?1.7 : d.kind==="spec"?1.8 : 1.3)
    .attr("stroke-opacity", d=> d.kind==="conf"?.55 : .4)
    .attr("stroke-dasharray", linkDash);

  gNodes.selectAll("*").remove();
  nodeSel = gNodes.selectAll("g.node").data(nodes).join("g")
    .attr("class","node-hit")
    .call(d3.drag()
      .on("start",(e,d)=>{ if(!prefersReduced && !e.active) sim.alphaTarget(.25).restart(); d.fx=d.x; d.fy=d.y; })
      .on("drag",(e,d)=>{ d.fx=e.x; d.fy=e.y; if(prefersReduced) ticked(); })
      .on("end",(e,d)=>{ if(!prefersReduced && !e.active) sim.alphaTarget(0); d.pinned=true; syncPins(); savePins(); }))
    .on("mouseenter",(e,d)=>{ if(!clashActive) focusNode(d.id,true); showTip(e,d); })
    .on("mousemove", moveTip)
    .on("mouseleave",()=>{ if(!clashActive && !selectedId) focusNode(null); hideTip(); })
    .on("dblclick",(e,d)=>{ e.stopPropagation(); if(d.pinned){ d.pinned=false; d.fx=null; d.fy=null; syncPins(); savePins();
        if(prefersReduced){ for(let i=0;i<120;i++) sim.tick(); ticked(); }
        else { sim.alphaTarget(.2).restart(); setTimeout(()=>sim.alphaTarget(0),650); } } })
    .on("click",(e,d)=>{ e.stopPropagation(); selectPerson(d.id); });

  nodeSel.filter(d=>d.halo).append("circle").attr("class","halo").attr("r",d=>d.w+7).attr("stroke-width",1.4);
  nodeSel.filter(d=>d.halo===2).append("circle").attr("class","halo").attr("r",d=>d.w+12).attr("stroke-width",1).attr("opacity",.32);
  nodeSel.append("circle").attr("class","node-dot").attr("r",d=>d.w)
    .attr("fill",d=> d.id===META.hub ? "var(--gold)" : catColorVar(d.cat))
    .attr("fill-opacity",d=> d.id===META.hub?1:.9)
    .attr("stroke", d=> d.id===META.hub ? "#f4d989" : "rgba(15,19,28,.85)")
    .attr("stroke-width", d=> d.id===META.hub?2:1.5);
  nodeSel.filter(d=>CAT[d.cat]&&CAT[d.cat].ring).append("circle").attr("class",d=>CAT[d.cat].ring+"-ring").attr("r",d=>d.w+3.5);
  nodeSel.append("circle").attr("class","pin-tack").attr("r",3.1)
    .attr("cx",d=>d.w*0.72).attr("cy",d=>-d.w*0.72)
    .attr("fill","var(--gold)").attr("stroke","var(--ink)").attr("stroke-width",1)
    .attr("opacity",0).style("pointer-events","none");

  gLabels.selectAll("*").remove();
  labelSel = gLabels.selectAll("text").data(nodes).join("text")
    .attr("class","node-label").attr("dy",d=>d.w+13)
    .style("font-size",d=> (d.w>=13?12.5: d.w>=9?11: 10)+"px")
    .style("font-weight",d=> d.w>=12?600:500)
    .style("opacity",d=> d.w>=9?1:.62)
    .text(d=>d.short);

  syncPins();
  sim.on("tick", ticked);

  timeCache=null;
  layoutMode=loadLayoutMode(); syncLayoutButtons();

  buildFilters();
  buildClashChips();
  applyVisibility();

  setLayoutForces();
  runLayout(1);
}

function fitView(dur){
  W=stage.clientWidth; H=stage.clientHeight;
  const pad=70;
  const fit=nodes.filter(n=>shown(n.id));
  // in the structured layout, frame where people are heading rather than where they are mid-move
  const at=n=>(layoutMode==="structured" && !n.pinned && structTargets[n.id]) ? structTargets[n.id] : [n.x,n.y];
  const xs=(fit.length?fit:nodes).map(n=>at(n)[0]), ys=(fit.length?fit:nodes).map(n=>at(n)[1]);
  const minX=Math.min(...xs), maxX=Math.max(...xs), minY=Math.min(...ys), maxY=Math.max(...ys);
  const bw=maxX-minX, bh=maxY-minY;
  let k=Math.min(2.6, 0.92*Math.min(W/(bw+pad*2), H/(bh+pad*2)));
  let tx=W/2-k*(minX+bw/2), ty=H/2-k*(minY+bh/2);
  // structured: fit the height and start at the left (the earliest figures); pan right to read on
  if(layoutMode==="structured"){
    const kh=Math.min(1.2, Math.max(zoom.scaleExtent()[0], 0.94*H/(bh+pad*2)));
    if(bw*kh > W-pad*2){ k=kh; tx=pad-k*minX; ty=H/2-k*(minY+bh/2); }
  }
  svg.transition().duration(dur).call(zoom.transform, d3.zoomIdentity.translate(tx,ty).scale(k));
}

/* ---------- layout modes: "default" (clustered force layout) / "structured" (time-ordered grid) ---------- */
let LAYOUT_KEY = "bible-people-map:nt:layout:v1";
let layoutMode = "default", structTargets = {};
function loadLayoutMode(){ try{ return localStorage.getItem(LAYOUT_KEY)==="structured"?"structured":"default"; }catch(e){ return "default"; } }
function saveLayoutMode(){ try{ localStorage.setItem(LAYOUT_KEY, layoutMode); }catch(e){/* session only */} }

// rough year for each person: LIVES bars first, then the `dates` text, then inferred from family / other ties
let timeCache = null;
function parseYears(s){
  if(!s) return [];
  // drop ages, durations and verse references ("lived 175 years", "died at 123", "Genesis 25:7") — not years
  s=s.replace(/\d+\s*:\s*\d+(?:\s*[–-]\s*\d+)?/g," ")
     .replace(/\b\d+(?:\s*\+\s*\d+)?\s*(?:years?|months?|days?)\b/gi," ")
     .replace(/\b(?:at|aged|age)\s+\d+/gi," ");
  const out=[], bc=/\bBC\b/.test(s), ad=/\bAD\b/.test(s);
  const cent=/(\d{1,2})(?:st|nd|rd|th)(?:\s*[–-]\s*(\d{1,2})(?:st|nd|rd|th))?\s*c(?:entury|\.)\s*(BC|AD)?/g;
  let m, rest=s;
  while((m=cent.exec(s))){
    const era=m[3]||(ad&&!bc?"AD":"BC"), sg=era==="BC"?-1:1;
    [m[1],m[2]].filter(Boolean).forEach(c=>out.push(sg*(c*100-50)));
  }
  rest=s.replace(cent," ");
  for(const x of rest.matchAll(/AD\s*(\d{1,4})/g)) out.push(+x[1]);
  rest=rest.replace(/AD\s*\d{1,4}/g," ");
  for(const x of rest.matchAll(/(\d{1,4})\s*BC/g)) out.push(-x[1]);
  rest=rest.replace(/\d{1,4}\s*BC/g," ");
  if(bc!==ad) for(const x of rest.matchAll(/\b(\d{3,4})\b/g)) out.push(bc?-x[1]:+x[1]);
  return out;
}
function estimateTimes(){
  if(timeCache) return timeCache;
  const t={};
  TL_LIVES.forEach(l=>{ if(byId[l.id]) t[l.id]=(l.s+l.e)/2; });
  PEOPLE.forEach(p=>{ if(t[p.id]==null){ const ys=parseYears(p.dates); if(ys.length) t[p.id]=d3.mean(ys); } });
  // family ties carry direction: a parent comes about a generation before the child
  const GEN=25, step={"father of":1,"mother of":1,"legal father of":1,"adopted":1,"grandfather of":2,"great-grandfather of":3,"ancestor of":3,"forefather of":3,"descendant of":-3,"granddaughter of":-2};
  const settle=(estimate)=>{ for(let pass=0;pass<60;pass++){ const add={};
      PEOPLE.forEach(p=>{ if(t[p.id]==null){ const e=estimate(p.id); if(e.length) add[p.id]=d3.mean(e); } });
      const ks=Object.keys(add); if(!ks.length) break; ks.forEach(k=>t[k]=add[k]); } };
  settle(id=>{ const e=[]; rawLinks.forEach(l=>{ const g=step[l.type]; if(l.kind!=="fam") return;
      const d=(g||0)*GEN;
      if(l.target===id && t[l.source]!=null) e.push(t[l.source]+d);
      if(l.source===id && t[l.target]!=null) e.push(t[l.target]-d); }); return e; });
  settle(id=>[...neighbors[id]].filter(o=>t[o]!=null).map(o=>t[o]));
  const catMean={};
  Object.keys(CAT).forEach(c=>{ const v=PEOPLE.filter(p=>p.cat===c&&t[p.id]!=null).map(p=>t[p.id]); if(v.length) catMean[c]=d3.mean(v); });
  const all=Object.values(t), fallback=all.length?d3.median(all):0;
  PEOPLE.forEach(p=>{ if(t[p.id]==null) t[p.id]=catMean[p.cat]??fallback; });
  return timeCache=t;
}

// reads like a page: earliest at top-left, each column filling top→bottom, then on to the next column right
function structuredTargets(){
  const t=estimateTimes(), catOrder=Object.keys(CAT);
  const vis=nodes.filter(n=>shown(n.id));
  if(!vis.length) return {};
  // META.lead (Father, Son & Spirit in the NT; God & his Spirit in the OT) leads the reading order
  const lead=META.lead||[META.hub], rank=d=>{ const i=lead.indexOf(d.id); return i<0?lead.length:i; };
  vis.sort((a,b)=>(rank(a)-rank(b)) || (t[a.id]-t[b.id]) || (catOrder.indexOf(a.cat)-catOrder.indexOf(b.cat)) || (b.w-a.w));
  // each column is about one screen tall, so the map reads as a wide, pannable timeline
  const colW=170, rowH=d=>2*d.w+26, maxH=Math.max(360, H-120);
  const cols=[[]]; let used=0;
  vis.forEach(n=>{ const h=rowH(n); if(used+h>maxH && cols[cols.length-1].length){ cols.push([]); used=0; } cols[cols.length-1].push(n); used+=h; });
  const pos={};
  cols.forEach((c,i)=>{ let y=0; c.forEach(n=>{ const h=rowH(n); pos[n.id]=[i*colW, y+h/2]; y+=h; }); });
  return pos;
}

function setLayoutForces(){
  if(!sim) return;
  if(layoutMode==="structured"){
    const T=structTargets=structuredTargets();
    structuredSig=Object.keys(T).sort().join(",");
    sim.force("link").strength(0);
    sim.force("charge").strength(0);
    sim.force("collide").radius(d=>T[d.id]?d.w+4:0).strength(.3);
    sim.force("x",d3.forceX(d=>T[d.id]?T[d.id][0]:d.x).strength(d=>T[d.id]?.6:0));
    sim.force("y",d3.forceY(d=>T[d.id]?T[d.id][1]:d.y).strength(d=>T[d.id]?.6:0));
    sim.force("center",null);
  }else{
    sim.force("link").strength(l=>l.kind==="fam"?0.55:0.28);
    sim.force("charge").strength(d=>-70 - d.w*10);
    sim.force("collide").radius(d=>d.w+13).strength(.9);
    sim.force("x",d3.forceX(tX).strength(d=>d.id===META.hub?.16:.08));
    sim.force("y",d3.forceY(tY).strength(d=>d.id===META.hub?.16:.08));
    sim.force("center",d3.forceCenter(W/2,H/2).strength(.02));
  }
}
function runLayout(alpha){
  if(prefersReduced){ for(let i=0;i<240;i++) sim.tick(); sim.stop(); ticked(); fitView(0); }
  else { sim.alpha(alpha).restart(); setTimeout(()=>fitView(600), 900); }
}
// buttons: both clear every pinned position, then lay out afresh; later drags pin as usual
function resetLayout(mode){
  layoutMode=mode; saveLayoutMode(); syncLayoutButtons();
  nodes.forEach(n=>{ n.pinned=false; n.fx=null; n.fy=null; });
  syncPins(); savePins();
  // default re-seeds positions exactly as a fresh page load does, so it lands on the same view
  if(mode==="default"){ nodes.forEach(n=>{ delete n.x; delete n.y; n.vx=0; n.vy=0; }); sim.nodes(nodes); }
  setLayoutForces();
  runLayout(1);
}
function syncLayoutButtons(){
  document.getElementById("layoutDefault").setAttribute("aria-pressed",(layoutMode==="default").toString());
  document.getElementById("layoutStructured").setAttribute("aria-pressed",(layoutMode==="structured").toString());
}
document.getElementById("layoutDefault").onclick=()=>resetLayout("default");
document.getElementById("layoutStructured").onclick=()=>resetLayout("structured");

/* ---------- focus / highlight ---------- */
let selectedId=null, activeCats=new Set(), clashActive=null, lensShown=new Set();

const defaultCats = () => new Set((META.defaultCats||Object.keys(CAT)).filter(k=>CAT[k]));
// a person is drawn if their group is switched on, or a name lens is showing them
function shown(id){ return activeCats.has(byId[id].cat) || lensShown.has(id); }
const inFilter = shown;

// switched-off groups are removed from view entirely (not just faded)
function applyVisibility(){
  if(!nodeSel) return;
  nodeSel.style("display",d=>shown(d.id)?null:"none");
  labelSel.style("display",d=>shown(d.id)?null:"none");
  linkSel.style("display",d=>shown(d.source.id)&&shown(d.target.id)?null:"none");
  const cnt=document.getElementById("groupCount");
  if(cnt) cnt.textContent=`${nodes.filter(n=>shown(n.id)).length} of ${nodes.length} people`;
  // the structured grid is built from whoever is visible, so re-flow it when that changes
  if(layoutMode==="structured" && sim && sim.force("link")){
    const sig=nodes.filter(n=>shown(n.id)).map(n=>n.id).sort().join(",");
    if(sig!==structuredSig){ setLayoutForces(); runLayout(.8); }
  }
}
let structuredSig="";

function focusNode(id, hover){
  // returns visual emphasis on a node's neighborhood
  const active = id!==null;
  nodeSel.select(".node-dot")
    .attr("opacity",d=>{
      if(!inFilter(d.id)) return .06;
      if(!active) return 1;
      return (d.id===id || neighbors[id].has(d.id)) ? 1 : .16;
    });
  nodeSel.selectAll(".halo").attr("opacity",d=>{
    if(active && !(d.id===id||neighbors[id].has(d.id))) return .06;
    return d.halo===2?.32:.5;
  });
  labelSel.style("opacity",d=>{
    if(!inFilter(d.id)) return .05;
    if(!active) return d.w>=9?1:.62;
    return (d.id===id || neighbors[id].has(d.id)) ? 1 : .1;
  });
  linkSel
    .attr("stroke-opacity",d=>{
      if(!inFilter(d.source.id)||!inFilter(d.target.id)) return .03;
      if(!active) return d.kind==="conf"?.55:.4;
      return (d.source.id===id||d.target.id===id) ? .9 : .04;
    })
    .attr("stroke-width",d=>{
      const base = d.kind==="fam"?1.7 : d.kind==="spec"?1.8 : 1.3;
      if(active && (d.source.id===id||d.target.id===id)) return base+1.2;
      return base;
    });
}

function applyFilter(){
  applyVisibility();
  focusNode(selectedId, false);
}

/* ---------- tooltip ---------- */
function showTip(e,d){
  tooltip.html(
    `<div class="tt-name">${d.name}</div>`+
    `<div class="tt-role">${roleLine(d)}</div>`+
    `<div class="tt-dates">${d.dates||""}</div>`
  );
  tooltip.style("opacity",1); moveTip(e);
}
function moveTip(e){
  // measure from the tooltip's own containing block, not the stage, so it sits just above the pointer
  const r=(tooltip.node().offsetParent||document.body).getBoundingClientRect();
  tooltip.style("left",(e.clientX-r.left)+"px").style("top",(e.clientY-r.top-14)+"px");
}
function hideTip(){ tooltip.style("opacity",0); }
function roleLine(d){
  const map={family:"Family & kin",twelve:"One of the Twelve",follow:"Follower of Jesus",church:"Early church",rulers:"Ruler / authority",rome:"Roman Empire",
    prim:"Creation & Flood",line:"Genealogies",patri:"Patriarchs & Matriarchs",tribe:"House of Jacob",kin:"Wider family & kin",exod:"Exodus & Wilderness",priest:"Priest / Levite",lead:"Tribal leader",judg:"Conquest & Judges",king:"King of Israel/Judah",proph:"Prophet",exile:"Exile & Return",wis:"Wisdom & Poetry",natn:"Foreign nation"};
  return d.aliases ? d.aliases : (map[d.cat]||"");
}

/* ---------- detail panel ---------- */
const panel=document.getElementById("panel");
const panelScroll=document.getElementById("panelScroll");
document.getElementById("panelClose").onclick=()=>{ closePanel(); };
svg.on("click",()=>{ if(selectedId){ closePanel(); } });
svg.on("dblclick",()=>{
  let any=false;
  nodes.forEach(n=>{ if(n.pinned){ n.pinned=false; n.fx=null; n.fy=null; any=true; } });
  if(any){ syncPins(); savePins();
    if(prefersReduced){ for(let i=0;i<160;i++) sim.tick(); ticked(); }
    else { sim.alphaTarget(.25).restart(); setTimeout(()=>sim.alphaTarget(0),700); } }
});

function relationsFor(id){
  const out=[];
  rawLinks.forEach(l=>{
    if(l.source===id) out.push({other:l.target, type:l.type, note:l.note});
    else if(l.target===id) out.push({other:l.source, type:invert(l.type), note:l.note});
  });
  // sort: family first, then discipleship, then rest
  return out;
}
function invert(t){
  const m={
    "father of":"child (father)","mother of":"child (mother)","legal father of":"legal child of",
    "brother of":"sibling of","sister of":"sibling of","married":"married","kin of":"kin of",
    "kinswoman of":"kin of","grandfather of":"grandchild of","father-in-law of":"son/daughter-in-law of",
    "called":"called by","betrayed by":"betrayed","later chosen":"chosen by","replaced":"replaced by",
    "mentor of":"mentored by","instructed":"instructed by","brought in":"brought in by",
    "first teacher of":"first followed","partner of":"partner of","cousin of":"cousin of",
    "co-worker of":"co-worker of","converted":"converted by","convert":"convert (of)",
    "fellow leader of":"fellow leader of","fellow deacon of":"fellow deacon of",
    "master of":"servant of","approved his death":"death approved by","rebuked by":"rebuked",
    "baptized by":"baptized","sheltered by":"sheltered","follower":"followed by","friend of":"friend of",
    "raised from death":"raised by","cross carried by":"carried the cross of","possibly brother of":"possibly brother of",
    "sought to kill":"sought by","executed":"executed by","questioned":"questioned by","sentenced":"sentenced by",
    "condemned":"condemned by","interrogated":"interrogated by","called (in a vision)":"appeared to"
  };
  return m[t]||t;
}

/* ---------- bible.com (YouVersion) linking ---------- */
const BOOK_CODES = {
  "genesis":"GEN","exodus":"EXO","leviticus":"LEV","numbers":"NUM","deuteronomy":"DEU",
  "joshua":"JOS","judges":"JDG","ruth":"RUT","1 samuel":"1SA","2 samuel":"2SA",
  "1 kings":"1KI","2 kings":"2KI","1 chronicles":"1CH","2 chronicles":"2CH",
  "ezra":"EZR","nehemiah":"NEH","esther":"EST","job":"JOB","psalm":"PSA","psalms":"PSA",
  "proverbs":"PRO","ecclesiastes":"ECC","song of solomon":"SNG","song of songs":"SNG",
  "isaiah":"ISA","jeremiah":"JER","lamentations":"LAM","ezekiel":"EZK","daniel":"DAN",
  "hosea":"HOS","joel":"JOL","amos":"AMO","obadiah":"OBA","jonah":"JON","micah":"MIC",
  "nahum":"NAM","habakkuk":"HAB","zephaniah":"ZEP","haggai":"HAG","zechariah":"ZEC","malachi":"MAL",
  "matthew":"MAT","mark":"MRK","luke":"LUK","john":"JHN","acts":"ACT","romans":"ROM",
  "1 corinthians":"1CO","2 corinthians":"2CO","galatians":"GAL","ephesians":"EPH",
  "philippians":"PHP","colossians":"COL","1 thessalonians":"1TH","2 thessalonians":"2TH",
  "1 timothy":"1TI","2 timothy":"2TI","titus":"TIT","philemon":"PHM","hebrews":"HEB",
  "james":"JAS","1 peter":"1PE","2 peter":"2PE","1 john":"1JN","2 john":"2JN","3 john":"3JN",
  "jude":"JUD","revelation":"REV"
};
const ONE_CHAPTER_BOOKS = new Set(["obadiah","philemon","2 john","3 john","jude"]);
function refBookName(ref){
  const m = ref.match(/^((?:[1-3]\s)?[A-Za-z][A-Za-z ]*?)\s+(\d+)(?::(\d+))?/);
  return m ? m[1].trim().toLowerCase() : null;
}
function bibleUrl(ref){
  const book = refBookName(ref);
  const code = book && BOOK_CODES[book];
  if(!code) return null;
  if(ONE_CHAPTER_BOOKS.has(book)) return `https://www.bible.com/bible/111/${code}.1.NIV`;
  const m = ref.match(/^((?:[1-3]\s)?[A-Za-z][A-Za-z ]*?)\s+(\d+)(?::(\d+))?/);
  const chapter = m[2], verse = m[3];
  return `https://www.bible.com/bible/111/${code}.${chapter}${verse?"."+verse:""}.NIV`;
}

/* ---------- BibleProject book-overview posters ----------
   Hotlinked directly from BibleProject's own CDN (never downloaded/resized/
   reformatted -- see CLAUDE.md "Source of truth" for the licensing basis).
   One row per poster IMAGE (not per book), so combined-book posters (e.g.
   1-2 Samuel) are a single entry. Verified against the real catalog at
   https://bibleproject.com/downloads/ on 2026-07-10; there is currently no
   poster for Hebrews. */
const POSTER_CDN = "https://d1bsmz3sdihplr.cloudfront.net/media/Posters%20Download/";
const POSTER_OT_OVERVIEW = POSTER_CDN + "TaNaKOTovw_FNL.jpg";
const POSTER_NT_OVERVIEW = POSTER_CDN + "NT%20Overview.jpg";
const POSTERS = [
  { books:["genesis"], testament:"ot", url:POSTER_CDN+"01-02%20Genesis_FNL.jpg" },
  { books:["exodus"], testament:"ot", url:POSTER_CDN+"03-04_Exodus_art_FNL.jpg" },
  { books:["leviticus"], testament:"ot", url:POSTER_CDN+"05-Leviticus-FNL-1.jpg" },
  { books:["numbers"], testament:"ot", url:POSTER_CDN+"06-Numbers-FNL-1.jpg" },
  { books:["deuteronomy"], testament:"ot", url:POSTER_CDN+"07-Deuteronomy-FNL.jpg" },
  { books:["joshua"], testament:"ot", url:POSTER_CDN+"08-Joshua-FNL.jpg" },
  { books:["judges"], testament:"ot", url:POSTER_CDN+"09-Judges_FNL.jpg" },
  { books:["ruth"], testament:"ot", url:POSTER_CDN+"10%20Ruth%20FNL.jpg" },
  { books:["1 samuel","2 samuel"], testament:"ot", url:POSTER_CDN+"11-12-Samuel-FNL.jpg" },
  { books:["1 kings","2 kings"], testament:"ot", url:POSTER_CDN+"13-14-Kings-FNL.jpg" },
  { books:["ezra","nehemiah"], testament:"ot", url:POSTER_CDN+"15-Ezra-Nehemiah-FNL.jpg" },
  { books:["esther"], testament:"ot", url:POSTER_CDN+"16-Esther-FNL.jpg" },
  { books:["job"], testament:"ot", url:POSTER_CDN+"17-Job-FNL.jpg" },
  { books:["psalm","psalms"], testament:"ot", url:POSTER_CDN+"18-Psalms-FNL.jpg" },
  { books:["proverbs"], testament:"ot", url:POSTER_CDN+"19-Proverbs-FNL.jpg" },
  { books:["ecclesiastes"], testament:"ot", url:POSTER_CDN+"20_Ecclesiastes.jpg" },
  { books:["song of solomon","song of songs"], testament:"ot", url:POSTER_CDN+"21-Song-of-Songs-FNL.jpg" },
  { books:["isaiah"], testament:"ot", url:POSTER_CDN+"22-23-Isaiah-FNL.jpg" },
  { books:["jeremiah"], testament:"ot", url:POSTER_CDN+"24_Jeremiah_hq.jpg" },
  { books:["lamentations"], testament:"ot", url:POSTER_CDN+"25-Lamentations-FNL.jpg" },
  { books:["ezekiel"], testament:"ot", url:POSTER_CDN+"26-27-Ezekiel-FNL.jpg" },
  { books:["daniel"], testament:"ot", url:POSTER_CDN+"28-Daniel-FNL.jpg" },
  { books:["hosea"], testament:"ot", url:POSTER_CDN+"29-Hosea_FNL.jpg" },
  { books:["joel"], testament:"ot", url:POSTER_CDN+"30-Joel-FNL.jpg" },
  { books:["amos"], testament:"ot", url:POSTER_CDN+"31-Amos-FNL.jpg" },
  { books:["obadiah"], testament:"ot", url:POSTER_CDN+"32-Obadiah-FNL.jpg" },
  { books:["jonah"], testament:"ot", url:POSTER_CDN+"33-Jonah-FNL.jpg" },
  { books:["micah"], testament:"ot", url:POSTER_CDN+"34-Micah-FNL.jpg" },
  { books:["nahum"], testament:"ot", url:POSTER_CDN+"35-Nahum-FNL.jpg" },
  { books:["habakkuk"], testament:"ot", url:POSTER_CDN+"36-Habakkuk-FNL.jpg" },
  { books:["zephaniah"], testament:"ot", url:POSTER_CDN+"37-Zephaniah-FNL.jpg" },
  { books:["haggai"], testament:"ot", url:POSTER_CDN+"38-Haggai-FNL.jpg" },
  { books:["zechariah"], testament:"ot", url:POSTER_CDN+"39-Zechariah-FNL.jpg" },
  { books:["malachi"], testament:"ot", url:POSTER_CDN+"40-Malachi-FNL.jpg" },
  // filename says "41-Chronicles" (single number) but the poster itself
  // covers both 1st and 2nd Chronicles side by side -- verified visually.
  { books:["1 chronicles","2 chronicles"], testament:"ot", url:POSTER_CDN+"41-Chronicles-FNL.jpg" },
  { books:["matthew"], testament:"nt", url:POSTER_CDN+"42-Matthew-FNL-1.jpg" },
  { books:["mark"], testament:"nt", url:POSTER_CDN+"44-Mark-FNL.jpg" },
  // "45-46" reflects a two-part video for the single Gospel of John, not two books.
  { books:["john"], testament:"nt", url:POSTER_CDN+"45-46-john-1.jpg" },
  { books:["luke"], testament:"nt", url:POSTER_CDN+"47-48-Luke-FNL.jpg" },
  { books:["acts"], testament:"nt", url:POSTER_CDN+"49-Acts-FNL.jpg" },
  { books:["romans"], testament:"nt", url:POSTER_CDN+"50_Romans.jpg" },
  // Despite the "52-53" filename, this poster is 1 Corinthians only -- verified
  // visually; 2 Corinthians is the separate file below, not a duplicate.
  { books:["1 corinthians"], testament:"nt", url:POSTER_CDN+"52-53-Corinthians.jpg" },
  { books:["2 corinthians"], testament:"nt", url:POSTER_CDN+"53-2-Corinthians-FNL2.jpg" },
  { books:["galatians"], testament:"nt", url:POSTER_CDN+"54-Galatians-FNL.jpg" },
  { books:["ephesians"], testament:"nt", url:POSTER_CDN+"55-Ephesians-FNL.jpg" },
  { books:["philippians"], testament:"nt", url:POSTER_CDN+"56-Philippians-FNL.jpg" },
  { books:["colossians"], testament:"nt", url:POSTER_CDN+"57%20Colossians%20PRF.jpg" },
  { books:["philemon"], testament:"nt", url:POSTER_CDN+"58-Philemon-FNL-1.jpg" },
  { books:["1 thessalonians"], testament:"nt", url:POSTER_CDN+"59a-1-Thessalonians-FNL.jpg" },
  { books:["2 thessalonians"], testament:"nt", url:POSTER_CDN+"59b-2-Thessalonians-FNL.jpg" },
  { books:["1 timothy"], testament:"nt", url:POSTER_CDN+"60-1-Timothy-FNL.jpg" },
  { books:["2 timothy"], testament:"nt", url:POSTER_CDN+"61-2-Timothy-FNL.jpg" },
  { books:["titus"], testament:"nt", url:POSTER_CDN+"62%20Titus%20FNL.jpg" },
  // no poster currently exists for Hebrews -- intentional gap, not an omission.
  { books:["james"], testament:"nt", url:POSTER_CDN+"64-James_FNL.jpg" },
  { books:["1 peter"], testament:"nt", url:POSTER_CDN+"65-1-Peter-FNL.jpg" },
  { books:["2 peter"], testament:"nt", url:POSTER_CDN+"66-2-Peter-FNL.jpg" },
  { books:["1 john","2 john","3 john"], testament:"nt", url:POSTER_CDN+"67-123-John.jpg" },
  { books:["jude"], testament:"nt", url:POSTER_CDN+"68-Jude-FNL.jpg" },
  // "69-70" is Revelation split across a two-part video, not a Jude+Revelation
  // combo -- verified visually.
  { books:["revelation"], testament:"nt", url:POSTER_CDN+"69-70-Revelation-FNL.jpg" }
];
const POSTER_BY_BOOK = {};
POSTERS.forEach(row=>row.books.forEach(b=>POSTER_BY_BOOK[b]=row));

function selectPerson(id){
  // reaching someone in a switched-off group (via a connection, search or the
  // timeline) switches that group on so they can be seen on the map
  if(!shown(id)) setCat(byId[id].cat, true);
  selectedId=id;
  focusNode(id,false);
  const d=byId[id];
  const rels=relationsFor(id);
  const relHtml = rels.map(r=>{
    const o=byId[r.other];
    return `<div class="rel" data-goto="${o.id}">`+
      `<span class="rel-type">${r.type}</span>`+
      `<span><span class="rel-name">${o.short}</span>`+
      (r.note?` <span class="rel-note">— ${r.note}</span>`:"")+`</span></div>`;
  }).join("");
  const posterRows = d.refs ? dedupePosters(d.refs.map(refBookName).map(b=>POSTER_BY_BOOK[b]).filter(Boolean)) : [];

  panelScroll.innerHTML =
    `<div class="p-cat" style="--c:${catColorVar(d.cat)}"><span class="dot"></span>${CAT[d.cat].label}</div>`+
    `<div class="p-name">${d.name}</div>`+
    (d.aliases?`<div class="p-alias">${d.aliases}</div>`:"")+
    (d.dates?`<div class="p-dates">${d.dates}</div>`:"")+
    `<p class="p-desc">${d.desc}</p>`+
    (d.notconfused?`<div class="p-warn"><b>Not to be confused with</b> ${d.notconfused}</div>`:"")+
    (rels.length?`<div class="p-section-h">Connections</div>${relHtml}`:"")+
    (d.refs?`<div class="p-section-h">Where to read</div><div class="p-refs">${d.refs.map(r=>{
      const url=bibleUrl(r);
      return url?`<a href="${url}" target="_blank" rel="noopener noreferrer">${r}</a>`:`<span>${r}</span>`;
    }).join("")}</div>`:"")+
    (posterRows.length?`<div class="p-posters">${posterRows.map(row=>
      `<button class="p-poster-btn" type="button" data-poster="${row.url}">${posterLabel(row)}</button>`
    ).join("")}</div>`:"");

  panelScroll.querySelectorAll(".rel").forEach(el=>{
    el.onclick=()=>{ selectPerson(el.dataset.goto); centerOn(el.dataset.goto); };
  });
  panelScroll.querySelectorAll(".p-poster-btn").forEach(el=>{
    el.onclick=()=>openPosterView(el.dataset.poster, el.textContent);
  });
  panel.classList.add("open");
  hideTip();
}
function dedupePosters(rows){
  const seen=new Set(), out=[];
  rows.forEach(r=>{ if(!seen.has(r.url)){ seen.add(r.url); out.push(r); } });
  return out;
}
function posterLabel(row){
  const cap = s => s.replace(/\b\w/g,c=>c.toUpperCase());
  return "Poster: " + row.books.map(cap).join(" & ");
}
function closePanel(){ selectedId=null; panel.classList.remove("open"); focusNode(null,false); }
function centerOn(id){
  const n=byId[id]; if(n.x==null) return;
  const t=d3.zoomTransform(svg.node());
  const k=Math.max(t.k,1.1);
  svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity.translate(W/2-k*n.x, (H*0.46)-k*n.y).scale(k));
}

/* ---------- category filter chips ---------- */
const catWrap=document.getElementById("catFilters");
function buildFilters(){
  catWrap.innerHTML='<span class="ctl-label">Groups</span>'+
    '<span class="chip-set" role="group" aria-label="Select groups">'+
    '<button type="button" class="chip mini" data-set="main" title="Only the main groups (the starting view)">Main</button>'+
    '<button type="button" class="chip mini" data-set="all">All</button>'+
    '<button type="button" class="chip mini" data-set="none">None</button></span>';
  catWrap.querySelectorAll("[data-set]").forEach(b=>{
    b.onclick=()=>{
      const s=b.dataset.set;
      activeCats = s==="main" ? defaultCats() : new Set(s==="all"?Object.keys(CAT):[]);
      syncCatChips();
      applyFilter();
    };
  });
  Object.entries(CAT).forEach(([key,val])=>{
    const b=document.createElement("button");
    b.className="chip"; b.dataset.cat=key;
    b.style.setProperty("--c",val.color);
    b.innerHTML=`<span class="dot"></span>${val.label}`;
    b.onclick=()=>{ setCat(key, !activeCats.has(key)); };
    catWrap.appendChild(b);
  });
  const cnt=document.createElement("span");
  cnt.className="group-count"; cnt.id="groupCount"; cnt.setAttribute("aria-live","polite");
  catWrap.appendChild(cnt);
  syncCatChips();
}
function syncCatChips(){
  catWrap.querySelectorAll(".chip[data-cat]").forEach(c=>c.setAttribute("aria-pressed",activeCats.has(c.dataset.cat).toString()));
}
function setCat(key,on){
  if(on) activeCats.add(key); else activeCats.delete(key);
  syncCatChips();
  applyFilter();
}

/* ---------- name-clash lens ----------
   One compact picker instead of a chip per name: a trigger button opens a
   searchable, alphabetical popover listing each shared name and how many
   people carry it. */
const clashWrap=document.getElementById("clashFilters");
let lensPop=null, lensTrigger=null, lensSearch=null, lensList=null;
function buildClashChips(){
  clashWrap.innerHTML='<span class="ctl-label">Name lens</span>'+
    '<span class="lens-pick">'+
    '<button type="button" class="chip lens-trigger" id="lensTrigger" aria-haspopup="dialog" aria-expanded="false"></button>'+
    '<button type="button" class="chip mini lens-clear" id="lensClear" aria-label="Clear name lens" hidden>×</button>'+
    '<div class="lens-pop" id="lensPop" role="dialog" aria-label="Choose a shared name" hidden>'+
      '<input type="search" class="lens-search" id="lensSearch" placeholder="Filter names…" autocomplete="off" spellcheck="false">'+
      '<div class="lens-list" id="lensList"></div>'+
      '<div class="lens-foot" id="lensFoot"></div>'+
    '</div></span>';
  lensPop=document.getElementById("lensPop");
  lensTrigger=document.getElementById("lensTrigger");
  lensSearch=document.getElementById("lensSearch");
  lensList=document.getElementById("lensList");
  const counts={};
  PEOPLE.forEach(p=>{ if(p.clash) counts[p.clash]=(counts[p.clash]||0)+1; });
  const names=[...(META.clashNames||[])].sort((a,b)=>a.localeCompare(b));
  lensList.innerHTML=names.map(nm=>
    `<button type="button" class="chip clash" aria-pressed="false" data-name="${nm}">`+
    `${nm}<span class="lens-n">${counts[nm]||0}</span></button>`).join("");
  lensList.querySelectorAll(".chip.clash").forEach(b=>{
    b.onclick=()=>{ toggleClash(b.dataset.name); closeLensPop(); };
  });
  document.getElementById("lensFoot").textContent=
    `${names.length} names shared by more than one person`;
  lensSearch.oninput=()=>{
    const q=lensSearch.value.trim().toLowerCase();
    lensList.querySelectorAll(".chip.clash").forEach(b=>{
      b.hidden = q && !b.dataset.name.toLowerCase().includes(q);
    });
  };
  lensSearch.onkeydown=e=>{
    if(e.key==="Enter"){ const first=lensList.querySelector(".chip.clash:not([hidden])"); if(first) first.click(); }
    if(e.key==="Escape"){ closeLensPop(); lensTrigger.focus(); }
  };
  lensTrigger.onclick=()=> lensPop.hidden ? openLensPop() : closeLensPop();
  document.getElementById("lensClear").onclick=()=>clearClash();
  updateLensTrigger();
}
function openLensPop(){
  lensPop.hidden=false; lensTrigger.setAttribute("aria-expanded","true");
  lensSearch.value=""; lensSearch.oninput();
  lensSearch.focus();
}
function closeLensPop(){
  if(!lensPop) return;
  lensPop.hidden=true; lensTrigger.setAttribute("aria-expanded","false");
}
function updateLensTrigger(){
  if(!lensTrigger) return;
  const n=(META.clashNames||[]).length;
  lensTrigger.innerHTML = clashActive
    ? `“${clashActive}”<span class="lens-caret">▾</span>`
    : `Choose a name <span class="lens-n">${n}</span><span class="lens-caret">▾</span>`;
  lensTrigger.setAttribute("aria-pressed", clashActive ? "true":"false");
  lensTrigger.classList.toggle("clash", !!clashActive);
  document.getElementById("lensClear").hidden = !clashActive;
}
document.addEventListener("click",e=>{
  if(lensPop && !lensPop.hidden && !e.target.closest(".lens-pick")) closeLensPop();
});
const clashPanel=document.getElementById("clashPanel");
document.getElementById("clashClose").onclick=()=>clearClash();

function toggleClash(nm){
  const already = clashActive===nm;
  document.querySelectorAll(".chip.clash").forEach(c=>c.setAttribute("aria-pressed","false"));
  if(already){ clearClash(); return; }
  clashActive=nm;
  const btn=lensList && lensList.querySelector(`.chip.clash[data-name="${CSS.escape(nm)}"]`);
  if(btn) btn.setAttribute("aria-pressed","true");
  updateLensTrigger();
  const members=PEOPLE.filter(p=>p.clash===nm);
  const ids=new Set(members.map(m=>m.id));
  // show every bearer of the name, even those in switched-off groups
  lensShown=ids; applyVisibility();
  // dim all but members
  nodeSel.select(".node-dot").attr("opacity",d=> ids.has(d.id)?1:.08);
  nodeSel.selectAll(".halo").attr("opacity",d=> ids.has(d.id)? .6 : .04);
  labelSel.style("opacity",d=> ids.has(d.id)?1:.06);
  linkSel.attr("stroke-opacity",.03);
  // pulse rings
  nodeSel.selectAll(".clash-ring").remove();
  if(!prefersReduced){
    nodeSel.filter(d=>ids.has(d.id)).append("circle")
      .attr("class","clash-ring").attr("r",d=>d.w+4).attr("fill","none")
      .attr("stroke","var(--gold)").attr("stroke-width",2).attr("opacity",.9)
      .append("animate").attr("attributeName","r").attr("values",d=>`${d.w+4};${d.w+13}`)
        .attr("dur","1.4s").attr("repeatCount","indefinite");
  }
  // comparison cards
  document.getElementById("clashTitle").textContent=`Everyone called “${nm}”`;
  document.getElementById("clashSub").textContent=(META.clashSub&&META.clashSub[nm])||"";
  const grid=document.getElementById("clashGrid");
  grid.innerHTML=members.map(m=>
    `<div class="clash-card" style="--c:${catColorVar(m.cat)}" data-goto="${m.id}">`+
    `<div class="cc-name">${m.name}</div>`+
    `<div class="cc-dates">${m.dates||""}</div>`+
    `<div class="cc-tag">${m.clashtag||m.desc}</div></div>`
  ).join("");
  grid.querySelectorAll(".clash-card").forEach(c=>{
    c.onclick=()=>{ selectPerson(c.dataset.goto); centerOn(c.dataset.goto); };
  });
  clashPanel.classList.add("show");
  document.getElementById("legend").style.display="none";
}
function clearClash(){
  clashActive=null;
  lensShown=new Set(); applyVisibility();
  document.querySelectorAll(".chip.clash").forEach(c=>c.setAttribute("aria-pressed","false"));
  updateLensTrigger();
  nodeSel.selectAll(".clash-ring").remove();
  clashPanel.classList.remove("show");
  // the legend belongs to the network view only
  if(window.matchMedia("(min-width:761px)").matches && !document.getElementById("timeline").classList.contains("show"))
    document.getElementById("legend").style.display="";
  focusNode(selectedId,false);
}

/* ---------- poster gallery / viewer ----------
   Images are only ever requested at the moment a user opens one -- gallery
   tiles and per-person buttons are text-only, and openPosterView() is the
   single place in the codebase that ever sets #posterImg's src. */
const posterModal=document.getElementById("posterModal");
const posterGallery=document.getElementById("posterGallery");
const posterView=document.getElementById("posterView");
const posterImg=document.getElementById("posterImg");
const posterFullscreen=document.getElementById("posterFullscreen");
document.getElementById("postersBtn").onclick=()=>openPosterGallery();
document.getElementById("posterModalClose").onclick=()=>closePosterModal();
document.getElementById("posterBack").onclick=()=>{ posterView.hidden=true; posterGallery.hidden=false; posterImg.removeAttribute("src"); };
posterModal.addEventListener("click",e=>{ if(e.target===posterModal) closePosterModal(); });

function openPosterGallery(){
  const overview = TESTAMENT==="ot" ? POSTER_OT_OVERVIEW : POSTER_NT_OVERVIEW;
  const overviewLabel = TESTAMENT==="ot" ? "Old Testament Overview" : "New Testament Overview";
  const rows = POSTERS.filter(p=>p.testament===TESTAMENT);
  document.getElementById("posterGalleryTitle").textContent =
    (TESTAMENT==="ot"?"Old Testament":"New Testament")+" book posters";
  const grid=document.getElementById("posterGrid");
  grid.innerHTML =
    `<button class="poster-tile" type="button" data-poster="${overview}">${overviewLabel}</button>`+
    rows.map(row=>`<button class="poster-tile" type="button" data-poster="${row.url}">${posterLabel(row)}</button>`).join("");
  grid.querySelectorAll(".poster-tile").forEach(el=>{
    el.onclick=()=>openPosterView(el.dataset.poster, el.textContent);
  });
  posterView.hidden=true;
  posterGallery.hidden=false;
  posterModal.classList.add("show");
}
function openPosterView(url,label){
  posterImg.src=url;
  posterImg.alt=label||"BibleProject poster";
  posterFullscreen.href=url;
  posterGallery.hidden=true;
  posterView.hidden=false;
  posterModal.classList.add("show");
}
function closePosterModal(){
  posterModal.classList.remove("show");
  posterImg.removeAttribute("src");
}

/* ---------- search ---------- */
const search=document.getElementById("searchBox");
search.addEventListener("input",()=>{
  const q=search.value.trim().toLowerCase();
  if(!q){ focusNode(selectedId,false); return; }
  const hits=nodes.filter(n=>(n.name+" "+(n.aliases||"")+" "+n.short).toLowerCase().includes(q));
  const ids=new Set(hits.map(h=>h.id));
  nodeSel.select(".node-dot").attr("opacity",d=> ids.has(d.id)?1:.08);
  labelSel.style("opacity",d=> ids.has(d.id)?1:.06);
  nodeSel.selectAll(".halo").attr("opacity",d=> ids.has(d.id)?.6:.04);
  linkSel.attr("stroke-opacity",.03);
});
search.addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const q=search.value.trim().toLowerCase();
    const hit=nodes.find(n=>(n.name+" "+n.short).toLowerCase().includes(q));
    if(hit){ selectPerson(hit.id); centerOn(hit.id); }
  }
});

/* =========================================================================
   TIMELINE VIEW
   ========================================================================= */
const tlWrap=document.getElementById("timeline");
const tlSvg=d3.select("#tl");
let tlBuilt=false;

function buildTimeline(){
  // META.tlPack stacks bars into as few rows as fit (name before each bar) and
  // gives event labels their own lanes; otherwise one row per life, names on the left
  const pack=!!META.tlPack;
  const rowH=pack?24:26, left=176, right=40;
  const width=Math.max(stage.clientWidth, META.tlMinWidth||1180);
  const inner=width-left-right;
  // a multi-point domain with tlStops (fractions of the width) draws each stretch at its own
  // scale — e.g. the long primeval era compressed, the crowded monarchy widened
  const dom=META.tlDomain||[-12,108];
  const rng=dom.length>2 && META.tlStops ? META.tlStops.map(f=>left+inner*f) : [left,left+inner];
  const x=d3.scaleLinear().domain(dom).range(rng);
  const lives=TL_LIVES.map(l=>({...l, p:byId[l.id]}));
  const star=o=>o.est?"*":"";
  tlSvg.attr("width",width).selectAll("*").remove();

  // title / caveat (the caveat wraps, so measure it before placing the chart)
  tlSvg.append("text").attr("x",left).attr("y",30)
    .attr("class","tl-band-label").style("font-family","var(--display)").style("font-size","18px").style("fill","var(--vellum)")
    .text(META.tlTitle||"");
  const cap=tlSvg.append("text").attr("x",left).attr("y",50).attr("class","tl-note");
  wrapText(cap, META.tlCaption||"", Math.min(inner, Math.max(480, stage.clientWidth-left-60)));
  const top=Math.max(118, 50+(cap.selectAll("tspan").size()-1)*13+68);

  const measure=tlSvg.append("text").style("visibility","hidden");
  const textW=(s,font,size)=>{ measure.style("font-family",font).style("font-size",size).text(s); return measure.node().getComputedTextLength(); };
  if(pack){
    lives.sort((a,b)=>a.s-b.s);
    const ends=[];
    lives.forEach(l=>{
      const from=x(l.s)-textW(l.p.short+star(l),"var(--serif)","12.5px")-16;
      const to=Math.max(x(l.e),x(l.s)+3)+(l.tenure?textW(l.lab||"in office","var(--mono)","9px")+14:10);
      let r=ends.findIndex(e=>e<from); if(r<0){ r=ends.length; ends.push(0); }
      ends[r]=to; l.row=r;
    });
  } else lives.forEach((l,i)=>l.row=i);
  const rows=lives.length?d3.max(lives,l=>l.row)+1:0;
  const base=top+rows*rowH;

  // event lanes: each label goes in the first lane clear of its neighbours
  const events=TL_EVENTS.map((ev,i)=>({...ev, lane:i%2}));
  let laneH=30, lanes=2;
  if(pack){
    const laneEnd=[];
    events.sort((a,b)=>a.y-b.y).forEach(ev=>{
      const xx=x(ev.y);
      let r=laneEnd.findIndex(e=>e<xx-64); if(r<0){ r=laneEnd.length; laneEnd.push(0); }
      laneEnd[r]=xx+64; ev.lane=r;
    });
    laneH=62; lanes=Math.max(1,laneEnd.length);
  }
  measure.remove();
  tlSvg.attr("height", base + 22 + lanes*laneH + 60);

  // axis ticks
  const ticks=META.tlTicks||[];
  const axisY=top-14;
  tlSvg.append("line").attr("x1",left).attr("x2",left+inner).attr("y1",axisY).attr("y2",axisY).attr("stroke","var(--edge)");
  ticks.forEach(t=>{
    const xx=x(t);
    tlSvg.append("line").attr("class","tl-grid").attr("x1",xx).attr("x2",xx).attr("y1",top-8).attr("y2",base+6);
    tlSvg.append("text").attr("x",xx).attr("y",axisY-6).attr("text-anchor","middle")
      .style("font-family","var(--mono)").style("font-size","10.5px").style("fill","var(--muted-2)")
      .text(fmtYear(t));
  });
  // mark where the scale changes, so bar lengths are not compared across stretches
  if(rng.length>2) dom.slice(1,-1).forEach(d=>{
    const xb=x(d);
    tlSvg.append("line").attr("x1",xb).attr("x2",xb).attr("y1",axisY-18).attr("y2",base+6)
      .attr("stroke","var(--muted-2)").attr("stroke-opacity",.7).attr("stroke-dasharray","1 5");
    tlSvg.append("text").attr("x",xb).attr("y",axisY-22).attr("text-anchor","middle")
      .style("font-family","var(--mono)").style("font-size","9px").style("fill","var(--muted-2)")
      .text("◂ scale changes ▸");
  });

  // events (vertical gold lines with labels in lanes)
  events.forEach(ev=>{
    const xx=x(ev.y);
    const g=tlSvg.append("g").attr("class","tl-event");
    g.append("line").attr("x1",xx).attr("x2",xx).attr("y1",top-8).attr("y2",base+10)
      .attr("stroke","var(--gold)").attr("stroke-opacity",.45).attr("stroke-dasharray","2 3");
    const ly=base+22 + ev.lane*laneH;
    g.append("circle").attr("cx",xx).attr("cy",base+10).attr("r",3).attr("fill","var(--gold)");
    g.append("text").attr("x",xx).attr("y",ly).attr("text-anchor","middle")
      .style("font-family","var(--mono)").style("font-size","10px").style("fill","var(--gold)")
      .text(fmtYear(ev.y)+star(ev));
    const lbl=g.append("text").attr("x",xx).attr("y",ly+13).attr("text-anchor","middle")
      .style("font-family","var(--serif)").style("font-size","11.5px").style("fill","var(--vellum)");
    wrapText(lbl, ev.label, 118);
    if(ev.note){
      const lines=lbl.selectAll("tspan").size()||1;
      g.append("text").attr("x",xx).attr("y",ly+13+lines*13+2).attr("text-anchor","middle")
        .style("font-family","var(--serif)").style("font-style","italic").style("font-size","10px").style("fill","var(--muted-2)")
        .text(ev.note);
    }
  });

  // life bars
  lives.forEach(l=>{
    const y=top + l.row*rowH;
    const c=catColorVar(l.p.cat);
    const x1=x(l.s), x2=x(l.e);
    // label: in its own left column, or just before the bar when packed
    tlSvg.append("text").attr("x",pack?x1-8:left-12).attr("y",y+7).attr("text-anchor","end")
      .attr("class","tl-band-label").style("fill","var(--vellum)").style("font-size","12.5px")
      .text(l.p.short+star(l));
    const bar=tlSvg.append("rect")
      .attr("x",x1).attr("y",y-4).attr("width",Math.max(3,x2-x1)).attr("height",13).attr("rx",4)
      .attr("fill",c).attr("fill-opacity",l.tenure?.35:.55).attr("stroke",c).attr("stroke-opacity",.9)
      .style("cursor","pointer");
    if(l.uS||l.uE) bar.attr("stroke-dasharray","3 3");
    const span=`${fmtYear(l.s)}–${fmtYear(l.e)}`;
    bar.on("click",()=>{ setView("network"); selectPerson(l.id); centerOn(l.id); })
       .append("title").text((l.tenure? `${l.p.short} — ${l.lab||"in office"} ${span}` : `${l.p.short} — ${span}`)
         +(l.est?" (estimate)":l.tenure?"":" (est.)")+(l.note?` · ${l.note}`:""));
    if(l.tenure){
      tlSvg.append("text").attr("x",Math.max(x2,x1+3)+6).attr("y",y+6).style("font-family","var(--mono)").style("font-size","9px").style("fill","var(--muted-2)").text(l.lab||"in office");
    }
  });

  tlBuilt=true;
}
function fmtYear(y){ return y<0 ? (-y)+" BC" : (y===0?"AD 1":"AD "+y); }
function wrapText(sel,text,width){
  const words=text.split(/\s+/); let line=[],lineNo=0;
  const el=sel; el.text(null);
  const x=+el.attr("x"), y=+el.attr("y");
  let tspan=el.append("tspan").attr("x",x).attr("y",y);
  words.forEach(w=>{
    line.push(w); tspan.text(line.join(" "));
    if(tspan.node().getComputedTextLength()>width && line.length>1){
      line.pop(); tspan.text(line.join(" ")); line=[w];
      tspan=el.append("tspan").attr("x",x).attr("y",y+(++lineNo)*13).text(w);
    }
  });
}

/* ---------- view switching ---------- */
const btnNet=document.getElementById("viewNetwork"), btnTl=document.getElementById("viewTimeline");
function setView(v){
  const net=v==="network";
  btnNet.setAttribute("aria-pressed",net); btnTl.setAttribute("aria-pressed",!net);
  document.getElementById("graph").style.display=net?"block":"none";
  document.getElementById("legend").style.display=(net&&!clashActive&&window.matchMedia("(min-width:761px)").matches)?"":"none";
  document.getElementById("hint").style.display=net?"":"none";
  document.getElementById("layoutToggle").style.display=net?"":"none";
  tlWrap.classList.toggle("show",!net);
  if(!net){ if(!tlBuilt) buildTimeline(); closePanel(); clearClash(); }
}
btnNet.onclick=()=>setView("network");
btnTl.onclick=()=>setView("timeline");

/* ---------- resize ---------- */
let rT;
window.addEventListener("resize",()=>{
  clearTimeout(rT);
  rT=setTimeout(()=>{
    W=stage.clientWidth; H=stage.clientHeight; CENT=centroids();
    if(sim && layoutMode==="default"){
      setLayoutForces();
      sim.alpha(.35).restart();
    }
    tlBuilt=false; if(tlWrap.classList.contains("show")) buildTimeline();
  },220);
});

// keyboard: Escape closes
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(posterModal.classList.contains("show")) closePosterModal(); else if(lensPop && !lensPop.hidden) closeLensPop(); else if(clashActive) clearClash(); else if(filterDrawer.classList.contains("open")) closeFilterDrawer(); else closePanel(); } });

/* ---------- mobile filter drawer ---------- */
const filtersToggle=document.getElementById("filtersToggle");
const filterDrawer=document.getElementById("filterDrawer");
function closeFilterDrawer(){ filterDrawer.classList.remove("open"); filtersToggle.setAttribute("aria-expanded","false"); }
function openFilterDrawer(){ filterDrawer.classList.add("open"); filtersToggle.setAttribute("aria-expanded","true"); }
filtersToggle.onclick=()=>{ filterDrawer.classList.contains("open") ? closeFilterDrawer() : openFilterDrawer(); };
svg.on("click.drawer",()=>{ if(filterDrawer.classList.contains("open")) closeFilterDrawer(); });

/* ---------- testament switching ---------- */
function applyMeta(){
  document.getElementById("appKicker").textContent=META.kicker||"";
  document.getElementById("appTitle").textContent=META.title||"";
  document.getElementById("appSubtitle").textContent=META.subtitle||"";
  document.getElementById("graph").setAttribute("aria-label",META.graphLabel||"");
  document.getElementById("legend").innerHTML='<h4>Kind of tie</h4>'+
    (META.legend||[]).map(([v,l,s])=>`<div class="row"><span class="swatch${s?" "+s:""}" style="--c:var(${v})"></span>${l}</div>`).join("");
}
function loadTestament(key){
  TESTAMENT=key;
  const ds=DATASETS[key];
  CAT=ds.CAT; PEOPLE=ds.PEOPLE; LINKS=ds.LINKS; TL_EVENTS=ds.EVENTS; TL_LIVES=ds.LIVES; META=ds.META;
  PIN_KEY="bible-people-map:"+key+":pins:v1";
  LAYOUT_KEY="bible-people-map:"+key+":layout:v1";
  structuredSig="";
  // reset UI state
  clashActive=null; clashPanel.classList.remove("show");
  panel.classList.remove("open");
  closePosterModal();
  document.getElementById("searchBox").value="";
  svg.call(zoom.transform, d3.zoomIdentity);
  applyMeta();
  build();
  tlBuilt=false;
  setView("network");
  document.getElementById("testOT").setAttribute("aria-pressed",(key==="ot").toString());
  document.getElementById("testNT").setAttribute("aria-pressed",(key==="nt").toString());
}
document.getElementById("testOT").onclick=()=>{ if(TESTAMENT!=="ot") loadTestament("ot"); };
document.getElementById("testNT").onclick=()=>{ if(TESTAMENT!=="nt") loadTestament("nt"); };

// ---- initial load ----
loadTestament("nt");
