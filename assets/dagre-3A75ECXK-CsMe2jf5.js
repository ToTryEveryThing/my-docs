import{l as b}from"./chunk-4BPNZXC3-DalRvRj4.js";import{m as y,J as a,bl as R,bm as T,bn as L,bo as $,b5 as F,bp as S,bq as j,br as M,bs as Y,bt as Q,bu as H,bv as V,bw as q,Q as z}from"./mermaid.esm.min-DzLtqrIT.js";import{s as K}from"./chunk-BOP2KBYH-CDFMWs-7.js";import{b as O}from"./chunk-6XGRHI2A-CGnpPPWS.js";import"./chunk-BKDDFIKN-9sHIE7cj.js";import"./app-Q8tRuFHo.js";var c=new Map,E=new Map,G=new Map,U=y(()=>{E.clear(),G.clear(),c.clear()},"clear"),I=y((e,t)=>{let r=E.get(t)||[];return a.trace("In isDescendant",t," ",e," = ",r.includes(e)),r.includes(e)},"isDescendant"),W=y((e,t)=>{let r=E.get(t)||[];return a.info("Descendants of ",t," is ",r),a.info("Edge is ",e),e.v===t||e.w===t?!1:r?r.includes(e.v)||I(e.v,t)||I(e.w,t)||r.includes(e.w):(a.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),k=y((e,t,r,s)=>{a.warn("Copying children of ",e,"root",s,"data",t.node(e),s);let g=t.children(e)||[];e!==s&&g.push(e),a.warn("Copying (nodes) clusterId",e,"nodes",g),g.forEach(o=>{if(t.children(o).length>0)k(o,t,r,s);else{let i=t.node(o);a.info("cp ",o," to ",s," with parent ",e),r.setNode(o,i),s!==t.parent(o)&&(a.warn("Setting parent",o,t.parent(o)),r.setParent(o,t.parent(o))),e!==s&&o!==e?(a.debug("Setting parent",o,e),r.setParent(o,e)):(a.info("In copy ",e,"root",s,"data",t.node(e),s),a.debug("Not Setting parent for node=",o,"cluster!==rootId",e!==s,"node!==clusterId",o!==e));let d=t.edges(o);a.debug("Copying Edges",d),d.forEach(h=>{a.info("Edge",h);let X=t.edge(h.v,h.w,h.name);a.info("Edge data",X,s);try{W(h,s)?(a.info("Copying as ",h.v,h.w,X,h.name),r.setEdge(h.v,h.w,X,h.name),a.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):a.info("Skipping copy of edge ",h.v,"-->",h.w," rootId: ",s," clusterId:",e)}catch(N){a.error(N)}})}a.debug("Removing node",o),t.removeNode(o)})},"copy"),J=y((e,t)=>{let r=t.children(e),s=[...r];for(let g of r)G.set(g,e),s=[...s,...J(g,t)];return s},"extractDescendants"),Z=y((e,t,r)=>{let s=e.edges().filter(d=>d.v===t||d.w===t),g=e.edges().filter(d=>d.v===r||d.w===r),o=s.map(d=>({v:d.v===t?r:d.v,w:d.w===t?t:d.w})),i=g.map(d=>({v:d.v,w:d.w}));return o.filter(d=>i.some(h=>d.v===h.v&&d.w===h.w))},"findCommonEdges"),x=y((e,t,r)=>{let s=t.children(e);if(a.trace("Searching children of id ",e,s),s.length<1)return e;let g;for(let o of s){let i=x(o,t,r),d=Z(t,r,i);if(i)if(d.length>0)g=i;else return i}return g},"findNonClusterChild"),D=y(e=>!c.has(e)||!c.get(e).externalConnections?e:c.has(e)?c.get(e).id:e,"getAnchorId"),_=y((e,t)=>{if(!e||t>10){a.debug("Opting out, no graph ");return}else a.debug("Opting in, graph ");e.nodes().forEach(function(r){e.children(r).length>0&&(a.warn("Cluster identified",r," Replacement id in edges: ",x(r,e,r)),E.set(r,J(r,e)),c.set(r,{id:x(r,e,r),clusterData:e.node(r)}))}),e.nodes().forEach(function(r){let s=e.children(r),g=e.edges();s.length>0?(a.debug("Cluster identified",r,E),g.forEach(o=>{let i=I(o.v,r),d=I(o.w,r);i^d&&(a.warn("Edge: ",o," leaves cluster ",r),a.warn("Descendants of XXX ",r,": ",E.get(r)),c.get(r).externalConnections=!0)})):a.debug("Not a cluster ",r,E)});for(let r of c.keys()){let s=c.get(r).id,g=e.parent(s);g!==r&&c.has(g)&&!c.get(g).externalConnections&&(c.get(r).id=g)}e.edges().forEach(function(r){let s=e.edge(r);a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(r)),a.warn("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(e.edge(r)));let g=r.v,o=r.w;if(a.warn("Fix XXX",c,"ids:",r.v,r.w,"Translating: ",c.get(r.v)," --- ",c.get(r.w)),c.get(r.v)||c.get(r.w)){if(a.warn("Fixing and trying - removing XXX",r.v,r.w,r.name),g=D(r.v),o=D(r.w),e.removeEdge(r.v,r.w,r.name),g!==r.v){let i=e.parent(g);c.get(i).externalConnections=!0,s.fromCluster=r.v}if(o!==r.w){let i=e.parent(o);c.get(i).externalConnections=!0,s.toCluster=r.w}a.warn("Fix Replacing with XXX",g,o,r.name),e.setEdge(g,o,s,r.name)}}),a.warn("Adjusted Graph",b(e)),A(e,0),a.trace(c)},"adjustClustersAndEdges"),A=y((e,t)=>{var g,o;if(a.warn("extractor - ",t,b(e),e.children("D")),t>10){a.error("Bailing out");return}let r=e.nodes(),s=!1;for(let i of r){let d=e.children(i);s=s||d.length>0}if(!s){a.debug("Done, no node has children",e.nodes());return}a.debug("Nodes = ",r,t);for(let i of r)if(a.debug("Extracting node",i,c,c.has(i)&&!c.get(i).externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),!c.has(i))a.debug("Not a cluster",i,t);else if(!c.get(i).externalConnections&&e.children(i)&&e.children(i).length>0){a.warn("Cluster without external connections, without a parent and with children",i,t);let d=e.graph().rankdir==="TB"?"LR":"TB";(o=(g=c.get(i))==null?void 0:g.clusterData)!=null&&o.dir&&(d=c.get(i).clusterData.dir,a.warn("Fixing dir",c.get(i).clusterData.dir,d));let h=new O({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.warn("Old graph before copy",b(e)),k(i,e,h,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:c.get(i).clusterData,label:c.get(i).label,graph:h}),a.warn("New graph after copy node: (",i,")",b(h)),a.debug("Old graph after copy",b(e))}else a.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c.get(i).externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),a.debug(c);r=e.nodes(),a.warn("New list of nodes",r);for(let i of r){let d=e.node(i);a.warn(" Now next level",i,d),d!=null&&d.clusterNode&&A(d.graph,t+1)}},"extractor"),P=y((e,t)=>{if(t.length===0)return[];let r=Object.assign([],t);return t.forEach(s=>{let g=e.children(s),o=P(e,g);r=[...r,...o]}),r},"sorter"),ee=y(e=>P(e,e.children()),"sortNodesByHierarchy"),B=y(async(e,t,r,s,g,o)=>{a.warn("Graph in recursive render:XAX",b(t),g);let i=t.graph().rankdir;a.trace("Dir in recursive render - dir:",i);let d=e.insert("g").attr("class","root");t.nodes()?a.info("Recursive render XXX",t.nodes()):a.info("No nodes found for",t),t.edges().length>0&&a.info("Recursive edges",t.edge(t.edges()[0]));let h=d.insert("g").attr("class","clusters"),X=d.insert("g").attr("class","edgePaths"),N=d.insert("g").attr("class","edgeLabels"),p=d.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(l){let n=t.node(l);if(g!==void 0){let u=JSON.parse(JSON.stringify(g.clusterData));a.trace(`Setting data for parent cluster XXX
 Node.id = `,l,`
 data=`,u.height,`
Parent cluster`,g.height),t.setNode(g.id,u),t.parent(l)||(a.trace("Setting parent",l,g.id),t.setParent(l,g.id,u))}if(a.info("(Insert) Node XXX"+l+": "+JSON.stringify(t.node(l))),n==null?void 0:n.clusterNode){a.info("Cluster identified XBX",l,n.width,t.node(l));let{ranksep:u,nodesep:w}=t.graph();n.graph.setGraph({...n.graph.graph(),ranksep:u+25,nodesep:w});let m=await B(p,n.graph,r,s,t.node(l),o),C=m.elem;R(n,C),n.diff=m.diff||0,a.info("New compound node after recursive render XAX",l,"width",n.width,"height",n.height),T(C,n)}else t.children(l).length>0?(a.trace("Cluster - the non recursive path XBX",l,n.id,n,n.width,"Graph:",t),a.trace(x(n.id,t)),c.set(n.id,{id:x(n.id,t),node:n})):(a.trace("Node - the non recursive path XAX",l,p,t.node(l),i),await L(p,t.node(l),i))})),await y(async()=>{let l=t.edges().map(async function(n){let u=t.edge(n.v,n.w,n.name);a.info("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),a.info("Edge "+n.v+" -> "+n.w+": ",n," ",JSON.stringify(t.edge(n))),a.info("Fix",c,"ids:",n.v,n.w,"Translating: ",c.get(n.v),c.get(n.w)),await $(N,u)});await Promise.all(l)},"processEdges")(),a.info("Graph before layout:",JSON.stringify(b(t))),a.info("############################################# XXX"),a.info("###                Layout                 ### XXX"),a.info("############################################# XXX"),K(t),a.info("Graph after layout:",JSON.stringify(b(t)));let f=0,{subGraphTitleTotalMargin:v}=F(o);return await Promise.all(ee(t).map(async function(l){var u;let n=t.node(l);if(a.info("Position XBX => "+l+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n==null?void 0:n.clusterNode)n.y+=v,a.info("A tainted cluster node XBX1",l,n.id,n.width,n.height,n.x,n.y,t.parent(l)),c.get(n.id).node=n,S(n);else if(t.children(l).length>0){a.info("A pure cluster node XBX1",l,n.id,n.x,n.y,n.width,n.height,t.parent(l)),n.height+=v,t.node(n.parentId);let w=(n==null?void 0:n.padding)/2||0,m=((u=n==null?void 0:n.labelBBox)==null?void 0:u.height)||0,C=m-w||0;a.debug("OffsetY",C,"labelHeight",m,"halfPadding",w),await j(h,n),c.get(n.id).node=n}else{let w=t.node(n.parentId);n.y+=v/2,a.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",w,w==null?void 0:w.offsetY,n),S(n)}})),t.edges().forEach(function(l){let n=t.edge(l);a.info("Edge "+l.v+" -> "+l.w+": "+JSON.stringify(n),n),n.points.forEach(C=>C.y+=v/2);let u=t.node(l.v);var w=t.node(l.w);let m=M(X,n,c,r,u,w,s);Y(n,m)}),t.nodes().forEach(function(l){let n=t.node(l);a.info(l,n.type,n.diff),n.isGroup&&(f=n.diff)}),a.warn("Returning from recursive render XAX",d,f),{elem:d,diff:f}},"recursiveRender"),se=y(async(e,t)=>{var o,i,d,h,X,N;let r=new O({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((o=e.config)==null?void 0:o.nodeSpacing)||((d=(i=e.config)==null?void 0:i.flowchart)==null?void 0:d.nodeSpacing)||e.nodeSpacing,ranksep:((h=e.config)==null?void 0:h.rankSpacing)||((N=(X=e.config)==null?void 0:X.flowchart)==null?void 0:N.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),s=t.select("g");Q(s,e.markers,e.type,e.diagramId),H(),V(),q(),U(),e.nodes.forEach(p=>{r.setNode(p.id,{...p}),p.parentId&&r.setParent(p.id,p.parentId)}),a.debug("Edges:",e.edges),e.edges.forEach(p=>{if(p.start===p.end){let f=p.start,v=f+"---"+f+"---1",l=f+"---"+f+"---2",n=r.node(f);r.setNode(v,{domId:v,id:v,parentId:n.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),r.setParent(v,n.parentId),r.setNode(l,{domId:l,id:l,parentId:n.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),r.setParent(l,n.parentId);let u=structuredClone(p),w=structuredClone(p),m=structuredClone(p);u.label="",u.arrowTypeEnd="none",u.id=f+"-cyclic-special-1",w.arrowTypeEnd="none",w.id=f+"-cyclic-special-mid",m.label="",n.isGroup&&(u.fromCluster=f,m.toCluster=f),m.id=f+"-cyclic-special-2",r.setEdge(f,v,u,f+"-cyclic-special-0"),r.setEdge(v,l,w,f+"-cyclic-special-1"),r.setEdge(l,f,m,f+"-cyc<lic-special-2")}else r.setEdge(p.start,p.end,{...p},p.id)}),a.warn("Graph at first:",JSON.stringify(b(r))),_(r),a.warn("Graph after XAX:",JSON.stringify(b(r)));let g=z();await B(s,r,e.type,e.diagramId,void 0,g)},"render");export{se as render};