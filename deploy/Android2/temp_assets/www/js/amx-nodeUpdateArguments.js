(function(){function b(){this.Init()}adf.mf.internal.amx.AmxNodeUpdateArguments=b;adf.mf.api.amx.AmxNodeUpdateArguments=b;adf.mf.api.AdfObject.createSubclass(adf.mf.api.amx.AmxNodeUpdateArguments,adf.mf.api.AdfObject,"adf.mf.api.amx.AmxNodeUpdateArguments");adf.mf.api.amx.AmxNodeUpdateArguments.prototype.Init=function(){b.superclass.Init.call(this);this._amxNodes=[];this._affectedAttributes={};this._collectionChanges={};this._affectedTagInstances={};this._affectedTagInstanceAttributes={};this._canceled=
!1};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.isCanceled=function(){return this._canceled};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.cancel=function(){this._canceled=!0};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getAffectedNodes=function(){return this._amxNodes};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getAffectedAttributes=function(b){b=this._affectedAttributes[b];return null==b?{}:b};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.getCollectionChanges=function(b){return this._collectionChanges[b]};
adf.mf.api.amx.AmxNodeUpdateArguments.prototype.setAffectedAttribute=function(b,a){var e=b.getId(),d=this._affectedAttributes[e];null==d&&(d={},this._affectedAttributes[e]=d,null==this._affectedTagInstances[b]&&this._amxNodes.push(b));d[a]=!0};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.setCollectionChanges=function(b,a,e){var d=this._collectionChanges[b];null==d&&(d={},this._collectionChanges[b]=d);d[a]=e};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__getAffectedTagInstanceIds=function(b){b=
this._affectedTagInstances[b];return null==b?[]:b};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__getAffectedAttributesForTagInstance=function(b,a){var e=this._affectedTagInstanceAttributes[b+"/"+a];return null==e?[]:e};adf.mf.api.amx.AmxNodeUpdateArguments.prototype.__setAffectedAttributeForTagInstance=function(b,a){var e=b.getParentAmxNode(),d=b.getTag().getAttribute("id"),g=e.getId(),h=this._affectedTagInstances[g];null==h?(h=[d],this._affectedTagInstances[g]=h,null==this._affectedAttributes[g]&&
this._amxNodes.push(e)):-1==h.indexOf(d)&&h.push(d);e=g+"/"+d;d=this._affectedTagInstanceAttributes[e];null==d?this._affectedTagInstanceAttributes[e]=[a]:-1==d.indexOf(a)&&d.push(a)}})();