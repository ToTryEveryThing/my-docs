import{_ as j,h as I,w as ee,d as te,y as re,I as ie,g as A,R as ae,N as ne,p as le,x as de,H as se}from"./chunk-A2BVO372-aV3eNG5c.js";import{j as oe,a as M,o as ce}from"./chunk-VVAYJJUS-ON3OAlQt.js";import{l as v}from"./chunk-4BPNZXC3-D8oxYY0g.js";import{m as f,J as a,Q as y,b3 as B,b4 as he,b as E,b5 as G,d as P,b6 as F,b7 as H,Y as ge,I as fe,b8 as pe,b9 as W}from"./mermaid.esm.min-BpguNmCr.js";import{s as ue}from"./chunk-BOP2KBYH-Bp_u2pgO.js";import{b as _}from"./chunk-6XGRHI2A-DHLL7F64.js";import"./chunk-BKDDFIKN-DcRAJX7K.js";import"./app-Bl_bYtR4.js";var g={},x={},z={},we=f(()=>{x={},z={},g={}},"clear"),L=f((t,e)=>(a.trace("In isDescendant",e," ",t," = ",x[e].includes(t)),!!x[e].includes(t)),"isDescendant"),ye=f((t,e)=>(a.info("Descendants of ",e," is ",x[e]),a.info("Edge is ",t),t.v===e||t.w===e?!1:x[e]?x[e].includes(t.v)||L(t.v,e)||L(t.w,e)||x[e].includes(t.w):(a.debug("Tilt, ",e,",not in descendants"),!1)),"edgeInCluster"),Q=f((t,e,r,d)=>{a.warn("Copying children of ",t,"root",d,"data",e.node(t),d);let i=e.children(t)||[];t!==d&&i.push(t),a.warn("Copying (nodes) clusterId",t,"nodes",i),i.forEach(n=>{if(e.children(n).length>0)Q(n,e,r,d);else{let l=e.node(n);a.info("cp ",n," to ",d," with parent ",t),r.setNode(n,l),d!==e.parent(n)&&(a.warn("Setting parent",n,e.parent(n)),r.setParent(n,e.parent(n))),t!==d&&n!==t?(a.debug("Setting parent",n,t),r.setParent(n,t)):(a.info("In copy ",t,"root",d,"data",e.node(t),d),a.debug("Not Setting parent for node=",n,"cluster!==rootId",t!==d,"node!==clusterId",n!==t));let h=e.edges(n);a.debug("Copying Edges",h),h.forEach(c=>{a.info("Edge",c);let p=e.edge(c.v,c.w,c.name);a.info("Edge data",p,d);try{ye(c,d)?(a.info("Copying as ",c.v,c.w,p,c.name),r.setEdge(c.v,c.w,p,c.name),a.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):a.info("Skipping copy of edge ",c.v,"-->",c.w," rootId: ",d," clusterId:",t)}catch(w){a.error(w)}})}a.debug("Removing node",n),e.removeNode(n)})},"copy"),Y=f((t,e)=>{let r=e.children(t),d=[...r];for(let i of r)z[i]=t,d=[...d,...Y(i,e)];return d},"extractDescendants"),k=f((t,e)=>{a.trace("Searching",t);let r=e.children(t);if(a.trace("Searching children of id ",t,r),r.length<1)return a.trace("This is a valid node",t),t;for(let d of r){let i=k(d,e);if(i)return a.trace("Found replacement for",t," => ",i),i}},"findNonClusterChild"),D=f(t=>!g[t]||!g[t].externalConnections?t:g[t]?g[t].id:t,"getAnchorId"),be=f((t,e)=>{if(!t||e>10){a.debug("Opting out, no graph ");return}else a.debug("Opting in, graph ");t.nodes().forEach(function(r){t.children(r).length>0&&(a.warn("Cluster identified",r," Replacement id in edges: ",k(r,t)),x[r]=Y(r,t),g[r]={id:k(r,t),clusterData:t.node(r)})}),t.nodes().forEach(function(r){let d=t.children(r),i=t.edges();d.length>0?(a.debug("Cluster identified",r,x),i.forEach(n=>{if(n.v!==r&&n.w!==r){let l=L(n.v,r),h=L(n.w,r);l^h&&(a.warn("Edge: ",n," leaves cluster ",r),a.warn("Descendants of XXX ",r,": ",x[r]),g[r].externalConnections=!0)}})):a.debug("Not a cluster ",r,x)});for(let r of Object.keys(g)){let d=g[r].id,i=t.parent(d);i!==r&&g[i]&&!g[i].externalConnections&&(g[r].id=i)}t.edges().forEach(function(r){let d=t.edge(r);a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(r)),a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(t.edge(r)));let i=r.v,n=r.w;if(a.warn("Fix XXX",g,"ids:",r.v,r.w,"Translating: ",g[r.v]," --- ",g[r.w]),g[r.v]&&g[r.w]&&g[r.v]===g[r.w]){a.warn("Fixing and trixing link to self - removing XXX",r.v,r.w,r.name),a.warn("Fixing and trixing - removing XXX",r.v,r.w,r.name),i=D(r.v),n=D(r.w),t.removeEdge(r.v,r.w,r.name);let l=r.w+"---"+r.v;t.setNode(l,{domId:l,id:l,labelStyle:"",labelText:d.label,padding:0,shape:"labelRect",style:""});let h=structuredClone(d),c=structuredClone(d);h.label="",h.arrowTypeEnd="none",c.label="",h.fromCluster=r.v,c.toCluster=r.v,t.setEdge(i,l,h,r.name+"-cyclic-special"),t.setEdge(l,n,c,r.name+"-cyclic-special")}else if(g[r.v]||g[r.w]){if(a.warn("Fixing and trixing - removing XXX",r.v,r.w,r.name),i=D(r.v),n=D(r.w),t.removeEdge(r.v,r.w,r.name),i!==r.v){let l=t.parent(i);g[l].externalConnections=!0,d.fromCluster=r.v}if(n!==r.w){let l=t.parent(n);g[l].externalConnections=!0,d.toCluster=r.w}a.warn("Fix Replacing with XXX",i,n,r.name),t.setEdge(i,n,d,r.name)}}),a.warn("Adjusted Graph",v(t)),q(t,0),a.trace(g)},"adjustClustersAndEdges"),q=f((t,e)=>{var i,n;if(a.warn("extractor - ",e,v(t),t.children("D")),e>10){a.error("Bailing out");return}let r=t.nodes(),d=!1;for(let l of r){let h=t.children(l);d=d||h.length>0}if(!d){a.debug("Done, no node has children",t.nodes());return}a.debug("Nodes = ",r,e);for(let l of r)if(a.debug("Extracting node",l,g,g[l]&&!g[l].externalConnections,!t.parent(l),t.node(l),t.children("D")," Depth ",e),!g[l])a.debug("Not a cluster",l,e);else if(!g[l].externalConnections&&t.children(l)&&t.children(l).length>0){a.warn("Cluster without external connections, without a parent and with children",l,e);let h=t.graph().rankdir==="TB"?"LR":"TB";(n=(i=g[l])==null?void 0:i.clusterData)!=null&&n.dir&&(h=g[l].clusterData.dir,a.warn("Fixing dir",g[l].clusterData.dir,h));let c=new _({multigraph:!0,compound:!0}).setGraph({rankdir:h,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.warn("Old graph before copy",v(t)),Q(l,t,c,l),t.setNode(l,{clusterNode:!0,id:l,clusterData:g[l].clusterData,labelText:g[l].labelText,graph:c}),a.warn("New graph after copy node: (",l,")",v(c)),a.debug("Old graph after copy",v(t))}else a.warn("Cluster ** ",l," **not meeting the criteria !externalConnections:",!g[l].externalConnections," no parent: ",!t.parent(l)," children ",t.children(l)&&t.children(l).length>0,t.children("D"),e),a.debug(g);r=t.nodes(),a.warn("New list of nodes",r);for(let l of r){let h=t.node(l);a.warn(" Now next level",l,h),h.clusterNode&&q(h.graph,e+1)}},"extractor"),Z=f((t,e)=>{if(e.length===0)return[];let r=Object.assign(e);return e.forEach(d=>{let i=t.children(d),n=Z(t,i);r=[...r,...n]}),r},"sorter"),me=f(t=>Z(t,t.children()),"sortNodesByHierarchy"),xe=f((t,e)=>{a.info("Creating subgraph rect for ",e.id,e);let r=y(),d=t.insert("g").attr("class","cluster"+(e.class?" "+e.class:"")).attr("id",e.id),i=d.insert("rect",":first-child"),n=B(r.flowchart.htmlLabels),l=d.insert("g").attr("class","cluster-label"),h=e.labelType==="markdown"?he(l,e.labelText,{style:e.labelStyle,useHtmlLabels:n},r):l.node().appendChild(j(e.labelText,e.labelStyle,void 0,!0)),c=h.getBBox();if(B(r.flowchart.htmlLabels)){let o=h.children[0],s=E(h);c=o.getBoundingClientRect(),s.attr("width",c.width),s.attr("height",c.height)}let p=0*e.padding,w=p/2,u=e.width<=c.width+p?c.width+p:e.width;e.width<=c.width+p?e.diff=(c.width-e.width)/2-e.padding/2:e.diff=-e.padding/2,a.trace("Data ",e,JSON.stringify(e)),i.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-u/2).attr("y",e.y-e.height/2-w).attr("width",u).attr("height",e.height+p);let{subGraphTitleTopMargin:b}=G(r);n?l.attr("transform",`translate(${e.x-c.width/2}, ${e.y-e.height/2+b})`):l.attr("transform",`translate(${e.x}, ${e.y-e.height/2+b})`);let m=i.node().getBBox();return e.width=m.width,e.height=m.height,e.intersect=function(o){return I(e,o)},d},"rect"),ve=f((t,e)=>{let r=t.insert("g").attr("class","note-cluster").attr("id",e.id),d=r.insert("rect",":first-child"),i=0*e.padding,n=i/2;d.attr("rx",e.rx).attr("ry",e.ry).attr("x",e.x-e.width/2-n).attr("y",e.y-e.height/2-n).attr("width",e.width+i).attr("height",e.height+i).attr("fill","none");let l=d.node().getBBox();return e.width=l.width,e.height=l.height,e.intersect=function(h){return I(e,h)},r},"noteGroup"),Ne=f((t,e)=>{let r=y(),d=t.insert("g").attr("class",e.classes).attr("id",e.id),i=d.insert("rect",":first-child"),n=d.insert("g").attr("class","cluster-label"),l=d.append("rect"),h=n.node().appendChild(j(e.labelText,e.labelStyle,void 0,!0)),c=h.getBBox();if(B(r.flowchart.htmlLabels)){let o=h.children[0],s=E(h);c=o.getBoundingClientRect(),s.attr("width",c.width),s.attr("height",c.height)}c=h.getBBox();let p=0*e.padding,w=p/2,u=e.width<=c.width+e.padding?c.width+e.padding:e.width;e.width<=c.width+e.padding?e.diff=(c.width+e.padding*0-e.width)/2:e.diff=-e.padding/2,i.attr("class","outer").attr("x",e.x-u/2-w).attr("y",e.y-e.height/2-w).attr("width",u+p).attr("height",e.height+p),l.attr("class","inner").attr("x",e.x-u/2-w).attr("y",e.y-e.height/2-w+c.height-1).attr("width",u+p).attr("height",e.height+p-c.height-3);let{subGraphTitleTopMargin:b}=G(r);n.attr("transform",`translate(${e.x-c.width/2}, ${e.y-e.height/2-e.padding/3+(B(r.flowchart.htmlLabels)?5:3)+b})`);let m=i.node().getBBox();return e.height=m.height,e.intersect=function(o){return I(e,o)},d},"roundedWithTitle"),Se=f((t,e)=>{let r=t.insert("g").attr("class",e.classes).attr("id",e.id),d=r.insert("rect",":first-child"),i=0*e.padding,n=i/2;d.attr("class","divider").attr("x",e.x-e.width/2-n).attr("y",e.y-e.height/2).attr("width",e.width+i).attr("height",e.height+i);let l=d.node().getBBox();return e.width=l.width,e.height=l.height,e.diff=-e.padding/2,e.intersect=function(h){return I(e,h)},r},"divider"),Ce={rect:xe,roundedWithTitle:Ne,noteGroup:ve,divider:Se},K={},Te=f((t,e)=>{a.trace("Inserting cluster");let r=e.shape||"rect";K[e.id]=Ce[r](t,e)},"insertCluster"),Ee=f(()=>{K={}},"clear"),U=f(async(t,e,r,d,i,n)=>{a.info("Graph in recursive render: XXX",v(e),i);let l=e.graph().rankdir;a.trace("Dir in recursive render - dir:",l);let h=t.insert("g").attr("class","root");e.nodes()?a.info("Recursive render XXX",e.nodes()):a.info("No nodes found for",e),e.edges().length>0&&a.trace("Recursive edges",e.edge(e.edges()[0]));let c=h.insert("g").attr("class","clusters"),p=h.insert("g").attr("class","edgePaths"),w=h.insert("g").attr("class","edgeLabels"),u=h.insert("g").attr("class","nodes");await Promise.all(e.nodes().map(async function(o){let s=e.node(o);if(i!==void 0){let N=JSON.parse(JSON.stringify(i.clusterData));a.info("Setting data for cluster XXX (",o,") ",N,i),e.setNode(i.id,N),e.parent(o)||(a.trace("Setting parent",o,i.id),e.setParent(o,i.id,N))}if(a.info("(Insert) Node XXX"+o+": "+JSON.stringify(e.node(o))),s==null?void 0:s.clusterNode){a.info("Cluster identified",o,s.width,e.node(o));let{ranksep:N,nodesep:C}=e.graph();s.graph.setGraph({...s.graph.graph(),ranksep:N,nodesep:C});let X=await U(u,s.graph,r,d,e.node(o),n),S=X.elem;ee(s,S),s.diff=X.diff||0,a.info("Node bounds (abc123)",o,s,s.width,s.x,s.y),te(S,s),a.warn("Recursive render complete ",S,s)}else e.children(o).length>0?(a.info("Cluster - the non recursive path XXX",o,s.id,s,e),a.info(k(s.id,e)),g[s.id]={id:k(s.id,e),node:s}):(a.info("Node - the non recursive path",o,s.id,s),await re(u,e.node(o),{config:n,dir:l}))})),e.edges().forEach(async function(o){let s=e.edge(o.v,o.w,o.name);a.info("Edge "+o.v+" -> "+o.w+": "+JSON.stringify(o)),a.info("Edge "+o.v+" -> "+o.w+": ",o," ",JSON.stringify(e.edge(o))),a.info("Fix",g,"ids:",o.v,o.w,"Translating: ",g[o.v],g[o.w]),await ie(w,s)}),e.edges().forEach(function(o){a.info("Edge "+o.v+" -> "+o.w+": "+JSON.stringify(o))}),a.info("Graph before layout:",JSON.stringify(v(e))),a.info("#############################################"),a.info("###                Layout                 ###"),a.info("#############################################"),a.info(e),ue(e),a.info("Graph after layout:",JSON.stringify(v(e)));let b=0,{subGraphTitleTotalMargin:m}=G(n);return me(e).forEach(function(o){let s=e.node(o);a.info("Position "+o+": "+JSON.stringify(e.node(o))),a.info("Position "+o+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s!=null&&s.clusterNode?(s.y+=m,A(s)):e.children(o).length>0?(s.height+=m,Te(c,s),g[s.id].node=s):(s.y+=m/2,A(s))}),e.edges().forEach(function(o){let s=e.edge(o);a.info("Edge "+o.v+" -> "+o.w+": "+JSON.stringify(s),s),s.points.forEach(C=>C.y+=m/2);let N=ae(p,o,s,g,r,e,d);ne(s,N)}),e.nodes().forEach(function(o){let s=e.node(o);a.info(o,s.type,s.diff),s.type==="group"&&(b=s.diff)}),{elem:h,diff:b}},"recursiveRender"),ke=f(async(t,e,r,d,i)=>{le(t,r,d,i),de(),se(),Ee(),we(),a.warn("Graph at first:",JSON.stringify(v(e))),be(e),a.warn("Graph after:",JSON.stringify(v(e)));let n=y();await U(t,e,d,i,void 0,n)},"render"),J=f(t=>P.sanitizeText(t,y()),"sanitizeText"),O={dividerMargin:10,padding:5,textHeight:10,curve:void 0},Xe=f(function(t,e,r,d){a.info("keys:",[...t.keys()]),a.info(t),t.forEach(function(i){var l,h;let n={shape:"rect",id:i.id,domId:i.domId,labelText:J(i.id),labelStyle:"",style:"fill: none; stroke: black",padding:((l=y().flowchart)==null?void 0:l.padding)??((h=y().class)==null?void 0:h.padding)};e.setNode(i.id,n),V(i.classes,e,r,d,i.id),a.info("setNode",n)})},"addNamespaces"),V=f(function(t,e,r,d,i){a.info("keys:",[...t.keys()]),a.info(t),[...t.values()].filter(n=>n.parent===i).forEach(function(n){var u,b;let l=n.cssClasses.join(" "),h=F(n.styles),c=n.label??n.id,p=0,w={labelStyle:h.labelStyle,shape:"class_box",labelText:J(c),classData:n,rx:p,ry:p,class:l,style:h.style,id:n.id,domId:n.domId,tooltip:d.db.getTooltip(n.id,i)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:((u=y().flowchart)==null?void 0:u.padding)??((b=y().class)==null?void 0:b.padding)};e.setNode(n.id,w),i&&e.setParent(n.id,i),a.info("setNode",w)})},"addClasses"),De=f(function(t,e,r,d){a.info(t),t.forEach(function(i,n){var o,s;let l=i,h="",c={labelStyle:"",style:""},p=l.text,w=0,u={labelStyle:c.labelStyle,shape:"note",labelText:J(p),noteData:l,rx:w,ry:w,class:h,style:c.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=y().flowchart)==null?void 0:o.padding)??((s=y().class)==null?void 0:s.padding)};if(e.setNode(l.id,u),a.info("setNode",u),!l.class||!d.has(l.class))return;let b=r+n,m={id:`edgeNote${b}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:H(O.curve,W)};e.setEdge(l.id,l.class,m,b)})},"addNotes"),Be=f(function(t,e){let r=y().flowchart,d=0;t.forEach(function(i){var l;d++;let n={classes:"relation",pattern:i.relation.lineType==1?"dashed":"solid",id:ge(i.id1,i.id2,{prefix:"id",counter:d}),arrowhead:i.type==="arrow_open"?"none":"normal",startLabelRight:i.relationTitle1==="none"?"":i.relationTitle1,endLabelLeft:i.relationTitle2==="none"?"":i.relationTitle2,arrowTypeStart:R(i.relation.type1),arrowTypeEnd:R(i.relation.type2),style:"fill:none",labelStyle:"",curve:H(r==null?void 0:r.curve,W)};if(a.info(n,i),i.style!==void 0){let h=F(i.style);n.style=h.style,n.labelStyle=h.labelStyle}i.text=i.title,i.text===void 0?i.style!==void 0&&(n.arrowheadStyle="fill: #333"):(n.arrowheadStyle="fill: #333",n.labelpos="c",((l=y().flowchart)==null?void 0:l.htmlLabels)??y().htmlLabels?(n.labelType="html",n.label='<span class="edgeLabel">'+i.text+"</span>"):(n.labelType="text",n.label=i.text.replace(P.lineBreakRegex,`
`),i.style===void 0&&(n.style=n.style||"stroke: #333; stroke-width: 1.5px;fill:none"),n.labelStyle=n.labelStyle.replace("color:","fill:"))),e.setEdge(i.id1,i.id2,n,d)})},"addRelations"),Le=f(function(t){O={...O,...t}},"setConf"),Ie=f(async function(t,e,r,d){a.info("Drawing class - ",e);let i=y().flowchart??y().class,n=y().securityLevel;a.info("config:",i);let l=(i==null?void 0:i.nodeSpacing)??50,h=(i==null?void 0:i.rankSpacing)??50,c=new _({multigraph:!0,compound:!0}).setGraph({rankdir:d.db.getDirection(),nodesep:l,ranksep:h,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),p=d.db.getNamespaces(),w=d.db.getClasses(),u=d.db.getRelations(),b=d.db.getNotes();a.info(u),Xe(p,c,e,d),V(w,c,e,d),Be(u,c),De(b,c,u.length+1,w);let m;n==="sandbox"&&(m=E("#i"+e));let o=n==="sandbox"?E(m.nodes()[0].contentDocument.body):E("body"),s=o.select(`[id="${e}"]`),N=o.select("#"+e+" g");if(await ke(N,c,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",e),fe.insertTitle(s,"classTitleText",(i==null?void 0:i.titleTopMargin)??5,d.db.getDiagramTitle()),pe(c,s,i==null?void 0:i.diagramPadding,i==null?void 0:i.useMaxWidth),!(i!=null&&i.htmlLabels)){let C=n==="sandbox"?m.nodes()[0].contentDocument:document,X=C.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(let S of X){let $=S.getBBox(),T=C.createElementNS("http://www.w3.org/2000/svg","rect");T.setAttribute("rx",0),T.setAttribute("ry",0),T.setAttribute("width",$.width),T.setAttribute("height",$.height),S.insertBefore(T,S.firstChild)}}},"draw");function R(t){let e;switch(t){case 0:e="aggregation";break;case 1:e="extension";break;case 2:e="composition";break;case 3:e="dependency";break;case 4:e="lollipop";break;default:e="none"}return e}f(R,"getArrowMarker");var Oe={setConf:Le,draw:Ie},Fe={parser:oe,db:M,renderer:Oe,styles:ce,init:f(t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,M.clear()},"init")};export{Fe as diagram};
