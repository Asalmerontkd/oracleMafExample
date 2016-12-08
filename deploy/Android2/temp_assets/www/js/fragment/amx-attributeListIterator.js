(function(){var b=adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"attributeListIterator");b.prototype.createChildrenNodes=function(b){if(adf.mf.environment.profile.dtMode)return this._createDtChildren(b);this._initialize(b);var a=b.getAttribute("_listTagInstance");if(null!=a)for(var a=a.getChildren(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"attributeSet"),e=this._setupVarStatus(b,a),a=e.step,d=e.begin,e=e.end;0>a&&d>=e||0<a&&d<=e;d+=a)b.createStampedChildren(d,[null]);return!0};
b.prototype.visitChildren=function(b,a,e){var d=b.getAttribute("_listTagInstance");if(null==d)return!1;for(var g=b.getAttribute("_listMetaData"),d=d.getChildren(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"attributeSet"),h=this._setupVarStatus(b,d),k=h.step,m=h.begin,n=h.end,t=1;0>k&&m>=n||0<k&&m<=n;m+=k){var u=d[m];h.index=m;h.count=t++;h.last=m==n;u=this._setupContext(b,g,u,h);try{if(b.visitStampedChildren(m,null,null,a,e))return!0}finally{this._tearDownContext(b,u)}h.first=!1}return!1};b.prototype.isFlattenable=
function(b){return!0};b.prototype._setupContext=function(b,a,e,d){var g=a.setupContext(e),h=b.getAttribute("varStatus");null!=h&&adf.mf.api.pushVariable(h,d);d=b.getAttribute("_currentSetTagInstance");b.setAttributeResolvedValue("_currentSetTagInstance",e);return{metaDataSetupResult:g,lastSetTagInstance:d,metaData:a,varStatusVariableName:h}};b.prototype._tearDownContext=function(b,a){a.metaData.tearDownContext(a.metaDataSetupResult);null!=a.varStatusVariableName&&adf.mf.api.popVariable(a.varStatusVariableName);
b.setAttributeResolvedValue("_currentSetTagInstance",a.lastSetTagInstance)};b.prototype._createDtChildren=function(b){for(var a=0;3>a;++a)b.createStampedChildren(a,[null]);b.setState(adf.mf.api.amx.AmxNodeStates.ABLE_TO_RENDER);return!0};b.prototype._initialize=function(b){if(void 0===b.getAttribute("_listTagInstance")){var a=b.getAttribute("name"),e=this._getParentAmxNode(b),d=this._findAttributeListTagInstance(e,a);b.setAttributeResolvedValue("_listTagInstance",d);if(null!=d){e=("attributeListIterator"==
e.getTag().getName()?e.getAttribute("_listMetaData"):adf.mf.internal.amx.fragment.FragmentMetaData.getMetaData(e)).getAttributeListMetaData(a);if(null==e)throw Error(adf.mf.resource.getInfoString("AMXErrorBundle","ERROR_NO_ATTRIBUTE_LIST_DEFINED",a));b.setAttributeResolvedValue("_listMetaData",e)}}};b.prototype._getParentAmxNode=function(b){for(b=b.getParent();null!=b;b=b.getParent()){var a=b.getTag();if(a.getNamespace()==adf.mf.api.amx.AmxTag.NAMESPACE_AMX){if("fragmentDef"==a.getName())return b.getParent();
if("attributeListIterator"==a.getName())return b}}return null};b.prototype._findAttributeListTagInstance=function(b,a){if(null==b)throw Error(adf.mf.resource.getInfoString("AMXErrorBundle","ERROR_ATTRIBUTE_LIST_NOT_IN_FRAGMENT",a));var e=null;if("attributeListIterator"==b.getTag().getName()){var d=b.getAttribute("_currentSetTagInstance");if(null==d)throw Error(adf.mf.resource.getInfoString("AMXErrorBundle","ERROR_PARENT_ATTRIBUTE_LIST_NOT_ACTIVE"));e=d.getChildren(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
"attributeList")}else e=b.__getTagInstances(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"attributeList");d=null;if(null!=e)for(var g=0,h=e.length;g<h;++g){var k=e[g];if(k.getAttribute("name")==a){d=k;break}}null!=d&&(e=d.getAttribute("ref"),null!=e&&(b=this._getParentAmxNode(d.getParentAmxNode()),d=this._findAttributeListTagInstance(b,e)));return d};b.prototype._setupVarStatus=function(b,a){var e=a.length,d=this._getIntAttributeWithDefault(b,"begin",0),g=this._getIntAttributeWithDefault(b,"end",e-1),h=this._getIntAttributeWithDefault(b,
"step",1);if(0==h)throw Error(adf.mf.resource.getInfoString("AMXErrorBundle","ERROR_ATTRIBUTE_LIST_STEP_0"));0<h&&g>e-1&&(g=e-1);0>d&&(d=0);1<h?g-=(g-d)%h:-1>h&&(d+=(g-d)%h);return{begin:d,end:g,first:!0,last:d==g,index:d,count:1,step:h}};b.prototype._getIntAttributeWithDefault=function(b,a,e){b=b.getAttribute(a);return void 0==b?e:parseInt(b,10)}})();