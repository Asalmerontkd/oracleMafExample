(function(){function b(){this._affectedNodeIds={};this._affectedNodes=[];this._nodesToRecreate=[];this._descendentChanges={};this._ancestorNodes=[];this._attributeChanges={};this._changeResult={};this._initialStates={};this._hasChanges=!1}function c(a,c){var d=adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST),e=c.getAffectedNodes(),g=new adf.mf.api.amx.VisitContext({amxNodes:e}),h=new b;a.visit(g,function(a,b){var g=b.getId(),k=c.getAffectedAttributes(g);d&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,
"adf.mf.internal.amx","applyUpdatesToAmxNodeHierarchy","Found node to apply updates. ID: "+g);var m=b.isRendered(),v=b.getState(),g=c.getCollectionChanges(g),g=b.updateAttributes(k,g);b.__updateTagInstanceAttributes(c);b.__processConverterChanges(c,g);k=b.getState();d&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyUpdatesToAmxNodeHierarchy","Node attributes have been applied. New node state: "+adf.mf.api.amx.AmxNodeStates.getLabelForValue(k));if(k==adf.mf.api.amx.AmxNodeStates.UNRENDERED)return h.addChangeResult(b,
v,g,adf.mf.api.amx.AmxNodeChangeResult[m?"RERENDER":"NONE"]),adf.mf.api.amx.VisitResult.REJECT;var B;k!=adf.mf.api.amx.AmxNodeStates.INITIAL?(d&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyUpdatesToAmxNodeHierarchy","Updating the children of the node"),B=b.updateChildren(g),k=b.getState(),m=k==adf.mf.api.amx.AmxNodeStates.INITIAL,d&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyUpdatesToAmxNodeHierarchy","New node state: "+adf.mf.api.amx.AmxNodeStates.getLabelForValue(k)+
". Should the build visit callback be skipped: "+m+". Update children method returned: "+adf.mf.api.amx.AmxNodeChangeResult.getLabelForValue(B))):(B=adf.mf.api.amx.AmxNodeChangeResult.RERENDER,m=!1);h.addChangeResult(b,v,g,B);(v=B==adf.mf.api.amx.AmxNodeChangeResult.REPLACE)&&(m=!0);0==m&&(b.visit(new adf.mf.api.amx.VisitContext({data:{affectedAmxNodes:e,targetNode:b}}),adf.mf.internal.amx._buildVisitCallback),k=b.getState(),d&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyUpdatesToAmxNodeHierarchy",
"Node state after invoking the build visit callback: "+adf.mf.api.amx.AmxNodeStates.getLabelForValue(k)));return v||k==adf.mf.api.amx.AmxNodeStates.INITIAL||k==adf.mf.api.amx.AmxNodeStates.UNRENDERED?adf.mf.api.amx.VisitResult.REJECT:adf.mf.api.amx.VisitResult.ACCEPT});return h}function a(a,b){for(var c=adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST),d={},e=[],g,h,k=b.getAmxNodesToRecreate(),y=0,A=k.length;y<A;++y){g=k[y];c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","recreateRequestedAmxNodes",
"Will attempt to recreate node with ID "+g.getId());var D=g.getParent();h=D.getId();var C=d[h];null==C?(C=[g],d[h]=C,e.push(D)):C.push(g)}a.visit(new adf.mf.api.amx.VisitContext({amxNodes:e}),function(a,e){var g=e.getId(),h=d[g],g=[],k,m;k=0;for(m=h.length;k<m;++k){var w=h[k];c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","recreateRequestedAmxNodes","Re-creating node "+w.getId());var v=w.getTag(),y=w.getStampKey(),v=v.buildAmxNode(e,y);e.replaceChild(w,v)&&g.push([w,v])}e.visit(new adf.mf.api.amx.VisitContext,
adf.mf.internal.amx._buildVisitCallback);k=0;for(m=g.length;k<m;++k)h=g[k],b.amxNodeRecreated(h[0],h[1]);return adf.mf.api.amx.VisitResult.ACCEPT})}function e(a,b){var c=b.getAmxNodesForDescendentChanges(),c=new adf.mf.api.amx.VisitContext({amxNodes:c});a.visit(c,function(a,c){var d=c.getId(),d=b.getDescendentChanges(d),d=c.__getDescendentChangeAction(d);d==adf.mf.api.amx.AmxNodeChangeResult.REPLACE&&(d=adf.mf.api.amx.AmxNodeChangeResult.RERENDER);b.setDescendentChangesResult(c,d);return adf.mf.api.amx.VisitResult.ACCEPT})}
function d(a,b){var c=adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST),d=b.getAffectedNodes(),d=new adf.mf.api.amx.VisitContext({amxNodes:d}),e=adf.mf.internal.perf.startMonitorCall("Apply render changes",adf.mf.log.level.FINER,"adf.mf.internal.amx:applyRenderChanges");amx.mustProcessQueues=!1;a.visit(d,function(a,d){var e=d.getId(),g=b.getChangeResult(e);c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyRenderChanges","Found node to apply render changes. ID: "+e+". Change result: "+
adf.mf.api.amx.AmxNodeChangeResult.getLabelForValue(g));switch(g){case adf.mf.api.amx.AmxNodeChangeResult.REFRESH:var g=b.getAttributeChanges(e),h=b.getDescendentChanges(e);null==g&&(g=new adf.mf.api.amx.AmxAttributeChange);d.refresh(g,h);c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyRenderChanges","Completed the refresh of node "+e);break;case adf.mf.api.amx.AmxNodeChangeResult.RERENDER:return d.rerender(),c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx",
"applyRenderChanges","Completed the re-render of node "+e),adf.mf.api.amx.VisitResult.REJECT}c&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx","applyRenderChanges","Completed the processing of the changes for node "+e);return adf.mf.api.amx.VisitResult.ACCEPT});amx.processAndCleanInitQueue();amx.processAndCleanPostDisplayQueue();amx.mustProcessQueues=!0;e.stop()}function g(a){this._itemized=a.itemized;this._hasMoreKeysChanged=1==a.hasMoreKeysChanged;if(this._itemized){this._created=
[];this._deleted=[];this._updated=[];this._dirtied=[];var b,c,d=a.created;if(null!=d)for(b=0,c=d.length;b<c;++b)this._created.push(d[b].key);d=a.updated;if(null!=d)for(b=0,c=d.length;b<c;++b)this._updated.push(d[b]);d=a.deleted;if(null!=d)for(b=0,c=d.length;b<c;++b)this._deleted.push(d[b]);a=a.dirtied;if(null!=a)for(b=0,c=a.length;b<c;++b)this._dirtied.push(a[b]),d=this._updated.indexOf(a[b]),0<=d&&this._updated.splice(d,1)}}function h(){this._changedAttributes={};this._oldValues={};this._length=
0;this._collectionChanges={};this._custom={}}function k(){this._amxNodes=[];this._amxNodeChanges={};this._previousStates={}}adf.mf.internal.amx.AmxNodeChangesResults=b;b.prototype={hasChanges:function(){return this._hasChanges},getAffectedNodes:function(){return this._affectedNodes},getChangeResult:function(a){return this._changeResult[a]},getAttributeChanges:function(a){return this._attributeChanges[a]},getAmxNodesToRecreate:function(){return this._nodesToRecreate},getAmxNodesForDescendentChanges:function(){return this._ancestorNodes},
getDescendentChanges:function(a){return this._descendentChanges[a]},amxNodeRecreated:function(a,b){var c=this._affectedNodes.indexOf(a);-1!=c&&(this._affectedNodes[c]=b);if(a.isRendered()){var d=b.getId();if(b.isReadyToRender())this._changeResult[d]=adf.mf.api.amx.AmxNodeChangeResult.RERENDER;else{var c=this._initialStates[d],d=this._attributeChanges[d],e=b.__getClosestRenderedNode(!0);this._markNodeAffected(e);this._queueCallToAncestor(b,c,d,e)}}},setDescendentChangesResult:function(a,b){var c=a.getId(),
d=this._changeResult[c];if(null==d||b>d)this._changeResult[c]=b,b!=adf.mf.api.amx.AmxNodeChangeResult.NONE&&this._markNodeAffected(a)},addChangeResult:function(a,b,c,d){var e=a.__getClosestRenderedNode(!0),g=a.getId();this._initialStates[g]=b;this._attributeChanges[g]=c;this._hasChanges=!0;d==adf.mf.api.amx.AmxNodeChangeResult.REPLACE&&this._nodesToRecreate.push(a);null!=e&&(d!=adf.mf.api.amx.AmxNodeChangeResult.NONE&&this._markNodeAffected(e),e===a?this._changeResult[g]=d:this._queueCallToAncestor(a,
b,c,e))},_markNodeAffected:function(a){var b=a.getId();!0!==this._affectedNodeIds[b]&&(this._affectedNodeIds[b]=!0,this._affectedNodes.push(a))},_queueCallToAncestor:function(a,b,c,d){var e=d.getId(),g=this._descendentChanges[e];null==g&&(g=new adf.mf.api.amx.AmxDescendentChanges,this._descendentChanges[e]=g,this._ancestorNodes.push(d));g.__addAmxNode(a,b,c)}};adf.mf.internal.amx.markNodeForUpdate=function(a){adf.mf.log.logInfoResource("AMXInfoBundle",adf.mf.log.level.SEVERE,"markNodeForUpdate","MSG_DEPRECATED",
"adf.mf.internal.amx.markNodeForUpdate","adf.mf.api.amx.markNodeForUpdate");return adf.mf.api.amx.markNodeForUpdate.apply(this,arguments)};adf.mf.api.amx.markNodeForUpdate=function(a){if(!(a instanceof adf.mf.internal.amx.AmxNodeUpdateArguments)){adf.mf.log.logInfoResource("AMXInfoBundle",adf.mf.log.level.SEVERE,"adf.mf.api.amx.markNodeForUpdate","MSG_DEPRECATED","Passing nodes and objects as arguments","Pass one adf.mf.api.amx.AmxNodeUpdateArguments object");for(var b=new adf.mf.internal.amx.AmxNodeUpdateArguments,
c=0,d=arguments.length;c<d;c+=2){amxNode=arguments[c];affectedAttributes=arguments[c+1];for(var e in affectedAttributes)b.setAffectedAttribute(amxNode,e)}a=b}adf.mf.internal.amx._queueCriticalSectionFunction(adf.mf.internal.amx._markNodeForUpdateImpl,this,!0,a)};adf.mf.internal.amx._markNodeForUpdateImpl=function(b){if(b.isCanceled())adf.mf.log.AMX.isLoggable(adf.mf.log.level.FINEST)&&adf.mf.log.AMX.logp(adf.mf.log.level.FINEST,"adf.mf.internal.amx._markNodeForUpdateImpl","Canceled","The node update has been canceled");
else{adf.mf.environment.profile.mockData||adf.mf.el.startGetValueBatchRequest();var g=adf.mf.internal.perf.startMonitorOperation("Mark node for update",adf.mf.log.level.FINE,"adf.mf.api.amx.markNodeForUpdate"),h=adf.mf.api.amx.getPageRootNode();try{var k=b.getAffectedNodes();1<k.length&&adf.mf.api.amx.AmxNode.__sortNodesByDepth(k);var v=c(h,b);0<v.getAmxNodesToRecreate().length&&(a(h,v),k=v.getAffectedNodes(),1<k.length&&adf.mf.api.amx.AmxNode.__sortNodesByDepth(k));e(h,v);var w=adf.mf.internal.amx._pageBuildPromiseResolve;
null==w?d(h,v):v.hasChanges()&&(adf.mf.internal.amx._pageBuildPromiseResolve=null,w(h))}catch(x){adf.mf.internal.amx.errorHandlerImpl(null,x)}finally{try{adf.mf.environment.profile.mockData||adf.mf.el.flushGetValueBatchRequest()}catch(z){adf.mf.internal.amx.errorHandlerImpl(null,z)}g.stop();adf.mf.internal.amx._pageBusyTracker.checkComplete()}}};adf.mf.internal.amx._buildVisitCallback=function(a,b){var c=b.getState(),d=a.data;if(null!=d&&d.targetNode!=b&&0<=d.affectedAmxNodes.indexOf(b)||c==adf.mf.api.amx.AmxNodeStates.UNRENDERED)return adf.mf.api.amx.VisitResult.REJECT;
if(c!=adf.mf.api.amx.AmxNodeStates.INITIAL)return adf.mf.api.amx.VisitResult.ACCEPT;b.init();switch(b.getState()){case adf.mf.api.amx.AmxNodeStates.INITIAL:return a._allNodesReadyToRender=!1,adf.mf.api.amx.VisitResult.REJECT;case adf.mf.api.amx.AmxNodeStates.UNRENDERED:return adf.mf.api.amx.VisitResult.REJECT;case adf.mf.api.amx.AmxNodeStates.WAITING_ON_EL_EVALUATION:return a._allNodesReadyToRender=!1,adf.mf.api.amx.VisitResult.ACCEPT;default:return adf.mf.api.amx.VisitResult.ACCEPT}};adf.mf.api.amx.AmxNodeStates=
{INITIAL:0,WAITING_ON_EL_EVALUATION:1,ABLE_TO_RENDER:2,PARTIALLY_RENDERED:3,RENDERED:4,UNRENDERED:5,getLabelForValue:function(a){for(var b in adf.mf.api.amx.AmxNodeStates)if(adf.mf.api.amx.AmxNodeStates[b]==a)return b;return null}};adf.mf.api.amx.AmxNodeChangeResult={NONE:0,REFRESH:1,RERENDER:2,REPLACE:3,getLabelForValue:function(a){for(var b in adf.mf.api.amx.AmxNodeChangeResult)if(adf.mf.api.amx.AmxNodeChangeResult[b]==a)return b;return null}};adf.mf.api.amx.AmxNodeCreateChildrenNodesResult={NONE:0,
HANDLED:1,DEFERRED:2,getLabelForValue:function(a){for(var b in adf.mf.api.amx.AmxNodeCreateChildrenNodesResult)if(adf.mf.api.amx.AmxNodeCreateChildrenNodesResult[b]==a)return b;return null}};adf.mf.api.amx.AmxNodeNotifications={PRE_REMOVAL:0,UNRENDERED:1};adf.mf.api.amx.VisitResult={ACCEPT:0,REJECT:1,COMPLETE:2};adf.mf.api.amx.VisitContext=function(a){this._visit=this._walk=null;if(null!=a){if(this.data=a.data,a=a.amxNodes,null!=a){this._visit=a;this._walk=[];for(var b=0,c=a.length;b<c;++b)for(var d=
a[b];null!=d&&!(0<=this._walk.indexOf(d));d=d.getParent())this._walk.push(d)}}else this.data=null};adf.mf.api.amx.VisitContext.prototype={isVisitAll:function(){return null==this._visit},getNodesToWalk:function(){return this._walk},getNodesToVisit:function(){return this._visit},getChildrenToWalk:function(a){return null==this._walk?null:this._walk.filter(function(b,c,d){return b.getParent()==a})}};adf.mf.api.amx.AmxCollectionChange=g;g.prototype={hasMoreKeysChanged:function(){return this._hasMoreKeysChanged},
isItemized:function(){return this._itemized},getCreatedKeys:function(){return this._itemized?this._created:null},getDeletedKeys:function(){return this._itemized?this._deleted:null},getUpdatedKeys:function(){return this._itemized?this._updated:null},getDirtiedKeys:function(){return this._itemized?this._dirtied:null}};adf.mf.api.amx.AmxAttributeChange=h;h.prototype={getCustomValue:function(a){return this._custom[a]},setCustomValue:function(a,b){return this._custom[a]=b},getChangedAttributeNames:function(){return Object.keys(this._changedAttributes)},
isCollectionChange:function(a){return null!=this._collectionChanges[a]},getCollectionChange:function(a){a=this._collectionChanges[a];return null==a?null:a},getOldValue:function(a){return this._oldValues[a]},hasChanged:function(a){return 1==this._changedAttributes[a]},getSize:function(){return this._length},__addChangedAttribute:function(a,b,c){0==this.hasChanged(a)&&(++this._length,this._changedAttributes[a]=!0);this._oldValues[a]=b;null!=c&&(this._collectionChanges[a]=c)}};adf.mf.api.amx.AmxDescendentChanges=
k;k.prototype={getAffectedNodes:function(){return this._amxNodes},getChanges:function(a){a=a.getId();return this._amxNodeChanges[a]},getPreviousNodeState:function(a){a=a.getId();return this._previousStates[a]},__addAmxNode:function(a,b,c){var d=a.getId();this._amxNodes.push(a);this._previousStates[d]=b;this._amxNodeChanges[d]=c}}})();