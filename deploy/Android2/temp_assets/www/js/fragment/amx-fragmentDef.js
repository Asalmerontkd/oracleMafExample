(function(){function b(a,b,c,g){return c.getNamespace()!=adf.mf.internal.amx.fragment.FRAGMENT_XML_NS}var c=adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"fragmentDef");c.prototype.isFlattenable=function(a){return!0};c.prototype.createChildrenNodes=function(a){this._loadBundles(a)?(this._parseDefinition(a),a.createStampedChildren(null,null,b)):a.setState(adf.mf.api.amx.AmxNodeStates.INITIAL);return!0};c.prototype.visitChildren=function(a,b,c){var g=a.getParent(),h=adf.mf.internal.amx.fragment.FragmentMetaData.getMetaData(g),
g=h.setupContext(g);try{return a.visitStampedChildren(null,null,null,b,c)}finally{h.tearDownContext(g)}};c.prototype.findPopup=function(a,b,c){if(null==b||0<=b.indexOf(":"))return null;var g=adf.mf.internal.amx.fragment.FragmentMetaData.getMetaData(a.getParent());if(!c&&!g.hasExportedPopup(b))return null;c=g.getExportedPopupReference(b);if(null==c){a=a.getChildren();c=0;for(g=a.length;c<g;++c){var h=a[c];if(h.getTag().getAttribute("id")==b)return h}return null}return a.__findPopup(c)};c.prototype._loadBundles=
function(a){var b=a.getAttribute("_bundlesLoaded"),c=a.getAttribute("_bundlesLoading");if(b)return!0;if(c)return!1;b=a.__getTagInstances(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,"loadBundle");c=b.length;if(0==c)return a.setAttributeResolvedValue("_bundlesLoaded",!0),!0;a.setAttributeResolvedValue("_bundlesLoading",!0);for(var g=[],h=0;h<c;++h){var k=b[h],m=k.getAttribute("basename"),k=k.getAttribute("var"),m=amx.loadBundle(m,k);g.push(m)}a.setState(adf.mf.api.amx.AmxNodeStates.INITIAL);adf.mf.internal.BasePromise.all(g).then(function(){a.setAttributeResolvedValue("_bundlesLoading",
!1);a.setAttributeResolvedValue("_bundlesLoaded",!0);var b=new adf.mf.api.amx.AmxNodeUpdateArguments;b.setAffectedAttribute(a,"_bundlesLoaded");adf.mf.api.amx.markNodeForUpdate(b)});return!1};c.prototype._parseDefinition=function(a){var b=a.getTag().getChildren("http://xmlns.oracle.com/adf/mf/amx/fragment","fragment");if(1!=b.length)throw Error(adf.mf.resource.getInfoString("AMXErrorBundle","ERROR_FRAGMENT_DEF_NO_META_DATA"));var b=new adf.mf.internal.amx.fragment.FragmentMetaData(b[0]),c=a.getParent();
b.validateFacets(c);b.storeMetaData(c);a.setState(adf.mf.api.amx.AmxNodeStates.ABLE_TO_RENDER)}})();