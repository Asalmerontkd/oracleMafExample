(function(){var b=adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager,c=adf.mf.internal.dvt.AttributeProcessor,a=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(a,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.AreaDataLayerRenderer");a.prototype.ProcessAttributes=function(a,d,g){var h=g.amxNode;if(!d.isAttributeDefined("rendered")||!adf.mf.api.amx.isValueFalse(d.getAttribute("rendered"))){var k={},m=d.getParent();k.associatedLayer=m.getAttribute("layer");
for(var n=null,t=0;t<a.areaLayers.length;t++)if(a.areaLayers[t].layer===k.associatedLayer){n=a.areaLayers[t];break}if(null===n)throw new adf.mf.internal.dvt.exception.DvtmException('Area layer "'+m.getAttribute("layer")+'" was not found!');void 0!==d.getId()&&(k.id=d.getId());d.isAttributeDefined("animationDuration")&&(k.animationDuration=d.getAttribute("animationDuration"));d.isAttributeDefined("animationOnDataChange")&&(k.animationOnDataChange=d.getAttribute("animationOnDataChange"));d.isAttributeDefined("disclosedItems")&&
(k.disclosedItems=d.getAttribute("disclosedItems"));d.isAttributeDefined("isolatedRowKey")&&(k.isolatedItem=d.getAttribute("isolatedRowKey"));(a=h.getAttribute("__userselection")?h.getAttribute("__userselection")[d.getId()]:null)?k.selection=a:d.isAttributeDefined("selectedRowKeys")&&(k.selection=c.ROWKEYARRAY(d.getAttribute("selectedRowKeys")),a=h.getAttribute("__userselection")||{},a[d.getId()]=k.selection,h.setAttributeResolvedValue("__userselection",a));d.isAttributeDefined("dataSelection")&&
(k.selectionMode=d.getAttribute("dataSelection"));d.isAttributeDefined("emptyText")&&(k.emptyText=d.getAttribute("emptyText"));b.init(g);k.areas=[];k.markers=[];if(a=d.getAttribute("value"))for(a=adf.mf.api.amx.createIterator(a);a.hasNext();)for(a.next(),m=d.getChildren(null,a.getRowKey()),m=adf.mf.api.amx.createIterator(m);m.hasNext();){var t=m.next(),u=a.getRowKey();adf.mf.internal.dvt.processAreaLocation.call(this,h,k,t,u,g)}else for(d=d.getChildren(),d=adf.mf.api.amx.createIterator(d);d.hasNext();)a=
d.next(),m=""+(d.getRowKey()+1),adf.mf.internal.dvt.processAreaLocation.call(this,h,k,a,m,g);n.areaDataLayer=k;b.applyAttributeGroups(h,null,g);return!1}};a.prototype.ProcessChildren=function(b,c,g){if(!c.isAttributeDefined("rendered")||!adf.mf.api.amx.isValueFalse(c.getAttribute("rendered")))return a.superclass.ProcessChildren.call(this,b,c,g)};adf.mf.internal.dvt.processAreaLocation=function(a,b,c,h,k){if("areaLocation"===c.getTag().getName()&&(!c.isAttributeDefined("rendered")||adf.mf.api.amx.isValueTrue(c.getAttribute("rendered"))))for(var m=
c.getChildren(),n=0;n<m.length;n++){var t={};t.location=c.getAttribute("name");t.id=h;adf.mf.internal.dvt.processThematicMapDataItem.call(this,a,t,m[n],k);"area"===m[n].getTag().getName()?b.areas.push(t):b.markers.push(t)}}})();
(function(){var b=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(b,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.AreaLayerRenderer");b.prototype.GetChildRenderers=function(b){void 0===this._renderers&&(this._renderers={areaDataLayer:{renderer:new adf.mf.internal.dvt.common.layer.AreaDataLayerRenderer},pointDataLayer:{renderer:new adf.mf.internal.dvt.common.layer.PointDataLayerRenderer}});return this._renderers};b.prototype.ProcessAttributes=function(b,a,e){b=e.amxNode;
if(!a.isAttributeDefined("rendered")||!adf.mf.api.amx.isValueFalse(a.getAttribute("rendered")))return adf.mf.internal.dvt.setThematicMapLayerProperties.call(this,"area",b,a),!0};b.prototype.ProcessChildren=function(c,a,e){if(!a.isAttributeDefined("rendered")||!adf.mf.api.amx.isValueFalse(a.getAttribute("rendered")))return b.superclass.ProcessChildren.call(this,c,a,e)};adf.mf.internal.dvt.setThematicMapLayerProperties=function(b,a,e){b=this.GetDataObject(a);b.areaLayers||(b.areaLayers=[]);a={labelDisplay:"auto",
labelType:"short"};e.isAttributeDefined("layer")?(a.layer=e.getAttribute("layer"),e.isAttributeDefined("areaLabelDisplay")&&(a.labelDisplay=e.getAttribute("areaLabelDisplay")),e.isAttributeDefined("labelStyle")&&(a.labelStyle=e.getAttribute("labelStyle")),e.isAttributeDefined("labelType")&&(a.labelType=e.getAttribute("labelType")),e.isAttributeDefined("animationOnLayerChange")&&(a.animationOnLayerChange=e.getAttribute("animationOnLayerChange")),e.isAttributeDefined("areaStyle")&&(a.areaStyle=e.getAttribute("areaStyle")),
b.areaLayers.push(a)):(a.layer="cities",a.type="point")}})();
(function(){var b=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(b,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.AreaLayerRendererDT");b.prototype.ProcessAttributes=function(b,a,e){e={type:"area",layer:"continents"};a&&(e.layer=this._nullIfEl(a.getAttribute("layer")));e.layer||(e.layer=this._getDTModeTopLayer(b.basemap));b.areaLayers||(b.areaLayers=[]);adf.mf.internal.dvt.loadMapLayerAndResource.call(this,null,b.basemap,e.layer);b.areaLayers.push(e);return!1};b.prototype._nullIfEl=
function(b){return!b||null==b||-1<b.indexOf("#{")?null:b};b.prototype._getDTModeTopLayer=function(b){return(b=adf.mf.internal.dvt.thematicmap.THEMATICMAP_DEFAULT_TOP_LAYER_MAPPING[b])?b:null}})();(function(){var b=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(b,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.AreaLocationRenderer");b.prototype.ProcessAttributes=function(b,a,e){return!1}})();
(function(){var b=adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager,c=adf.mf.internal.dvt.AttributeProcessor,a=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(a,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.PointDataLayerRenderer");a.prototype.ProcessAttributes=function(a,d,g){var h=g.amxNode;if(d.isAttributeDefined("rendered")&&adf.mf.api.amx.isValueFalse(d.getAttribute("rendered")))return!1;var k=!1,m={},n=d.getParent(),t=null;if("areaLayer"===n.getTag().getName()){m.associatedWith=
n.getAttribute("layer");for(n=0;n<a.areaLayers.length;n++)if(a.areaLayers[n].layer===m.associatedWith){t=a.areaLayers[n];break}if(null===t)throw new adf.mf.internal.dvt.exception.DvtmException('Area layer "'+areaLayerNode.getAttribute("layer")+'" was not found!');}else t=a,adf.mf.internal.dvt.setThematicMapLayerProperties.call(this,"point",h,d);m.associatedLayer="cities";void 0!==d.getId()&&(m.id=d.getId());d.isAttributeDefined("animationDuration")&&(m.animationDuration=d.getAttribute("animationDuration"));
d.isAttributeDefined("animationOnDataChange")&&(m.animationOnDataChange=d.getAttribute("animationOnDataChange"));(a=h.getAttribute("__userselection")?h.getAttribute("__userselection")[d.getId()]:null)?m.selection=a:d.isAttributeDefined("selectedRowKeys")&&(m.selection=c.ROWKEYARRAY(d.getAttribute("selectedRowKeys")),a=h.getAttribute("__userselection")||{},a[d.getId()]=m.selection,h.setAttributeResolvedValue("__userselection",a));d.isAttributeDefined("dataSelection")&&(m.selectionMode=d.getAttribute("dataSelection"));
d.isAttributeDefined("emptyText")&&(m.emptyText=d.getAttribute("emptyText"));b.init(g);d.getAttribute("var");m.markers=[];if(a=d.getAttribute("value"))for(a=adf.mf.api.amx.createIterator(a);a.hasNext();)for(a.next(),n=d.getChildren(null,a.getRowKey()),n=adf.mf.api.amx.createIterator(n);n.hasNext();)var u=n.next(),v=a.getRowKey(),k=k|adf.mf.internal.dvt._processPointLocationNode.call(this,h,m,u,v,g);else for(d=d.getChildren(),d=adf.mf.api.amx.createIterator(d);d.hasNext();)a=d.next(),n=""+(d.getRowKey()+
1),k|=adf.mf.internal.dvt._processPointLocationNode.call(this,h,m,a,n,g);t.pointDataLayers||(t.pointDataLayers=[]);t.pointDataLayers.push(m);b.applyAttributeGroups(h,null,g);return!0};a.prototype.ProcessChildren=function(b,c,g){if(!c.isAttributeDefined("rendered")||!adf.mf.api.amx.isValueFalse(c.getAttribute("rendered")))return a.superclass.ProcessChildren.call(this,b,c,g)};adf.mf.internal.dvt._processPointLocationNode=function(a,b,c,h,k){var m=!1;if("pointLocation"!==c.getTag().getName())return m;
if(!c.isAttributeDefined("rendered")||adf.mf.api.amx.isValueTrue(c.getAttribute("rendered"))){var n=c.getChildren();if(0<n.length){var t={};c.isAttributeDefined("pointName")?(m=!0,t.location=c.getAttribute("pointName")):c.isAttributeDefined("pointX")&&c.isAttributeDefined("pointY")&&(t.x=c.getAttribute("pointX"),t.y=c.getAttribute("pointY"));t.type="marker";t.id=h;adf.mf.internal.dvt.processThematicMapDataItem.call(this,a,t,n[0],k);b.markers.push(t)}}return m}})();
(function(){var b=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(b,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.PointLocationRenderer");b.prototype.ProcessAttributes=function(b,a,e){}})();
(function(){var b=adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager,c=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(c,"adf.mf.internal.dvt.BaseRenderer","adf.mf.internal.dvt.common.layer.ThematicMapDataItemRenderer");c.prototype.ProcessAttributes=function(a,b,c){return!1};adf.mf.internal.dvt.processThematicMapDataItem=function(a,c,d,g){var h=this.GetDataObject(a);if(d.isAttributeDefined("rendered")&&adf.mf.api.amx.isValueFalse(d.getAttribute("rendered")))return null;c.attrGroups=
[];for(var k=d.getChildren(),k=adf.mf.api.amx.createIterator(k);k.hasNext();){var m=k.next();b.processAttributeGroup(m,a,g)}d.isAttributeDefined("source")&&(c.source=adf.mf.api.amx.buildRelativePath(d.getAttribute("source")));d.isAttributeDefined("sourceHover")&&(c.sourceHover=adf.mf.api.amx.buildRelativePath(d.getAttribute("sourceHover")));d.isAttributeDefined("sourceSelected")&&(c.sourceSelected=adf.mf.api.amx.buildRelativePath(d.getAttribute("sourceSelected")));d.isAttributeDefined("sourceHoverSelected")&&
(c.sourceHoverSelected=adf.mf.api.amx.buildRelativePath(d.getAttribute("sourceHoverSelected")));d.isAttributeDefined("gradientEffect")&&(c.gradientEffect=d.getAttribute("gradientEffect"));d.isAttributeDefined("opacity")&&(c.opacity=+d.getAttribute("opacity"));d.isAttributeDefined("borderStyle")&&(c.borderStyle=d.getAttribute("borderStyle"));d.isAttributeDefined("borderColor")&&(c.borderColor=d.getAttribute("borderColor"));d.isAttributeDefined("borderWidth")&&(c.borderWidth=d.getAttribute("borderWidth"),
isNaN(c.borderWidth)||0<c.borderWidth&&!d.isAttributeDefined("borderStyle")&&(c.borderStyle="solid"));d.isAttributeDefined("shortDesc")&&(c.shortDesc=d.getAttribute("shortDesc"));"on"===d.getAttribute("labelDisplay")&&(d.isAttributeDefined("value")&&(c.label=d.getAttribute("value")),d.isAttributeDefined("labelPosition")&&(c.labelPosition=d.getAttribute("labelPosition")),d.isAttributeDefined("labelStyle")&&(c.labelStyle=d.getAttribute("labelStyle")));d.isAttributeDefined("rotation")&&(c.rotation=d.getAttribute("rotation"));
d.isAttributeDefined("width")&&(c.width=d.getAttribute("width"));d.isAttributeDefined("height")&&(c.height=d.getAttribute("height"));d.isAttributeDefined("scaleX")&&(c.scaleX=+d.getAttribute("scaleX"));d.isAttributeDefined("scaleY")&&(c.scaleY=+d.getAttribute("scaleY"));d.isAttributeDefined("fillColor")&&d.getAttribute("fillColor")&&(c.color=d.getAttribute("fillColor"));d.isAttributeDefined("fillPattern")&&(c.pattern=d.getAttribute("fillPattern"));d.isAttributeDefined("shape")&&(c.shape=d.getAttribute("shape"));
c.clientId=d.getId();d.isAttributeDefined("action")?c.action=c.id:(a=!1,k=d.getTag().findTags(adf.mf.internal.dvt.AMX_NAMESPACE,"setPropertyListener"),0<k.length?a=!0:(k=d.getTag().findTags(adf.mf.internal.dvt.AMX_NAMESPACE,"showPopupBehavior"),0<k.length&&(a=!0)),a&&(c.action=c.id));a=new adf.mf.internal.dvt.common.attributeGroup.DataItemConfig;k=adf.mf.internal.dvt.common.attributeGroup.DefaultPalettesValueResolver.SHAPE;"marker"!==c.type||d.isAttributeDefined(k)||a.addTypeDefaultValue(k,h.styleDefaults.dataMarkerDefaults.shape);
b.registerDataItem(g,c,a)}})();
(function(){adf.mf.internal.dvt.DvtmObject.createPackage("adf.mf.internal.dvt.thematicmap");adf.mf.internal.dvt.thematicmap.DefaultThematicMapStyle={marker:{scaleX:1,scaleY:1,type:"circle"},legend:{position:"auto",rendered:!0},styleDefaults:{colors:"#003366 #CC3300 #666699 #006666 #FF9900 #993366 #99CC33 #624390 #669933 #FFCC33 #006699 #EBEA79".split(" "),shapes:"circle square plus diamond triangleUp triangleDown human".split(" ")}};adf.mf.internal.dvt.thematicmap.DefaultThematicMapStyleAlta={marker:{scaleX:1,
scaleY:1,type:"circle"},legend:{position:"auto",rendered:!0},styleDefaults:{colors:"#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" "),shapes:"circle square plus diamond triangleUp triangleDown human".split(" ")}};adf.mf.internal.dvt.thematicmap.THEMATICMAP_DEFAULT_TOP_LAYER_MAPPING={world:"continents",worldRegions:"regions",usa:"country",africa:"continent",asia:"continent",australia:"continent",europe:"continent",northAmerica:"continent",southAmerica:"continent",
apac:"region",emea:"region",latinAmerica:"region",usaAndCanada:"region"}})();
(function(){var b=adf.mf.internal.dvt.AttributeProcessor,c=adf.mf.internal.dvt.StyleProcessor,a=adf.mf.internal.dvt.common.legend.LegendRenderer,e=adf.mf.internal.dvt.common.attributeGroup.AttributeGroupManager,d=adf.mf.internal.dvt.DOMUtils,g={},h=function(){};adf.mf.internal.dvt.DvtmObject.createSubclass(h,"adf.mf.internal.dvt.BaseComponentRenderer","adf.mf.internal.dvt.thematicmap.ThematicMapRenderer");h.prototype.PreventsSwipe=function(a){return a.isAttributeDefined("zooming")&&"none"!==a.isAttributeDefined("zooming")||
a.isAttributeDefined("panning")&&"none"!==a.isAttributeDefined("panning")?!0:!1};h.prototype.loadResources=function(a){h.superclass.loadResources.call(this,a);if(!a.getAttribute("source")&&"undefined"!==typeof DvtBaseMapManager){var b=a.getAttribute("basemap"),c={};a.visitChildren(new adf.mf.api.amx.VisitContext,function(a,b){if(b.isAttributeDefined("rendered")&&adf.mf.api.amx.isValueFalse(b.getAttribute("rendered"))||!b.isReadyToRender())return adf.mf.api.amx.VisitResult.REJECT;var d=b.getTag();
switch(d.getName()){case "areaLayer":c[b.getAttribute("layer")]=!0;break;case "pointDataLayer":if(!c.cities)for(var d=d.getChildren()||[],e=0,g=d.length;e<g;e++)if(d[e].getAttribute("pointName")){c.cities=!0;break}return adf.mf.api.amx.VisitResult.REJECT;case "legend":case "areaDataLayer":return adf.mf.api.amx.VisitResult.REJECT}return adf.mf.api.amx.VisitResult.ACCEPT});var d=this;Object.keys(c).forEach(function(c){adf.mf.internal.dvt.loadMapLayerAndResource.call(d,a,b,c)})}};h.prototype.isReadyToRender=
function(a){return"loading"===a.getAttribute("_baseMap")?!1:h.superclass.isReadyToRender.call(this,a)};h.prototype.GetChildRenderers=function(b){void 0===this._renderers&&(this._renderers=adf.mf.environment.profile.dtMode?{areaLayer:{renderer:new adf.mf.internal.dvt.common.layer.AreaLayerRendererDT}}:{areaLayer:{renderer:new adf.mf.internal.dvt.common.layer.AreaLayerRenderer,order:1},pointDataLayer:{renderer:new adf.mf.internal.dvt.common.layer.PointDataLayerRenderer,order:2},legend:{renderer:new a,
order:3,maxOccurrences:1}});return this._renderers};h.prototype.GetAttributesDefinition=function(){var a=h.superclass.GetAttributesDefinition.call(this);a.animationDuration={path:"animationDuration",type:b.INTEGER,"default":1E3};a.animationOnDisplay={path:"animationOnDisplay",type:b.TEXT,"default":"none"};a.animationOnMapChange={path:"animationOnMapChange",type:b.TEXT,"default":"none"};a.initialZooming={path:"initialZooming",type:b.TEXT,"default":"none"};a.markerZoomBehavior={path:"markerZoomBehavior",
type:b.TEXT,"default":"fixed"};a.zooming={path:"zooming",type:b.TEXT,"default":"none"};a.panning={path:"panning",type:b.TEXT,"default":"none"};a.basemap={path:"basemap",type:b.TEXT,"default":"world"};a.tooltipDisplay={path:"tooltipDisplay",type:b.TEXT,"default":"auto"};return a};h.prototype.GetStyleClassesDefinition=function(){var a=h.superclass.GetStyleClassesDefinition.call(this);a["dvtm-area"]={path:"styleDefaults/areaStyle",type:[c.CSS_TEXT,c.CSS_BACK]};a._self={path:"styleDefaults/background-color",
type:c.BACKGROUND};a["dvtm-areaLayer"]={path:"styleDefaults/dataAreaDefaults/borderColor",type:c.BORDER_COLOR};a["dvtm-areaHover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",type:c.BORDER_COLOR};a["dvtm-areaSelected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",type:c.BORDER_COLOR_TOP},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",type:c.BORDER_COLOR}];a["dvtm-legend"]=[{path:"legend/textStyle",type:c.CSS_TEXT},{path:"legend/backgroundColor",type:c.BACKGROUND},{path:"legend/borderColor",
type:c.TOP_BORDER_WHEN_WIDTH_GT_0PX}];a["dvtm-legendTitle"]={path:"legend/titleStyle",type:c.CSS_TEXT};a["dvtm-legendSectionTitle"]={path:"legend/sectionTitleStyle",type:c.CSS_TEXT};a["dvtm-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",type:c.CSS_TEXT},{path:"styleDefaults/dataMarkerDefaults/color",type:c.BACKGROUND},{path:"styleDefaults/dataMarkerDefaults/opacity",type:c.OPACITY},{path:"styleDefaults/dataMarkerDefaults/borderStyle",type:c.BORDER_STYLE},{path:"styleDefaults/dataMarkerDefaults/borderColor",
type:c.BORDER_COLOR},{path:"styleDefaults/dataMarkerDefaults/borderWidth",type:c.BOTTOM_BORDER_WIDTH}];return a};h.prototype.InitComponentOptions=function(a,b){h.superclass.InitComponentOptions.call(this,a,b);e.reset(a);a._stylesResolved=!1;a.setAttributeResolvedValue("__userselection",null);b.animationDuration=1E3;b.animationOnDisplay="none";b.animationOnMapChange="none";b.areaLayers=[];b.basemap={};b.initialZooming="none";b.markerZoomBehavior="fixed";b.panning="none";b.pointDataLayers=[];b.styleDefaults=
{dataAreaDefaults:{},dataMarkerDefaults:{}};b.tooltipDisplay="auto";b.zooming="none";b.legend={}};h.prototype.GetCustomStyleProperty=function(a){return"CustomThematicMapStyle"};h.prototype.GetDefaultStyles=function(a){return this.IsSkyros()?adf.mf.internal.dvt.thematicmap.DefaultThematicMapStyle:adf.mf.internal.dvt.thematicmap.DefaultThematicMapStyleAlta};h.prototype.MergeComponentOptions=function(a,b){b=h.superclass.MergeComponentOptions.call(this,a,b);b.marker&&(void 0===b.styleDefaults&&(b.styleDefaults=
{}),void 0===b.styleDefaults.dataMarkerDefaults&&(b.styleDefaults.dataMarkerDefaults={}),b.marker.type&&(b.styleDefaults.dataMarkerDefaults.shape=b.marker.type));var c=b.styleDefaults;c&&(c.colors&&(a._defaultColors=c.colors),c.shapes&&(a._defaultShapes=c.shapes),delete b.styleDefaults.colors,delete b.styleDefaults.shapes,delete b.marker);return b};h.prototype.ProcessAttributes=function(a,b,c){var d=c._descendentChanges;b.getAttribute("__userselection")&&d&&d.getAffectedNodes().forEach(function(a){var c=
d.getChanges(a);c&&c.hasChanged("selectedRowKeys")&&(c=b.getAttribute("__userselection"),c[a.getId()]=null,b.setAttributeResolvedValue("__userselection",c))});h.superclass.ProcessAttributes.call(this,a,b,c);!adf.mf.environment.profile.dtMode&&b.isAttributeDefined("source")&&(a.source=adf.mf.api.amx.buildRelativePath(b.getAttribute("source")),a.sourceXml=this._getCustomBaseMapMetadata(b,a.source))};h.prototype.ProcessChildren=function(a,b,c){return adf.mf.environment.profile.dtMode&&0===b.getChildren().length?
(this.GetChildRenderers().areaLayer.renderer.ProcessAttributes(a,null,c),!0):h.superclass.ProcessChildren.call(this,a,b,c)};h.prototype.ProcessEvent=function(a,b,c){h.superclass.ProcessEvent.call(this,a,b,c);var e=this;c=b.type;var g=null;if("selection"===c){var k;c=a.getAttribute("__userselection")||{};var m=b.clientId;if(m){var g=e.findAmxNode(a,m),n=b.selection,t=e.filterArray(c[m],function(a){return-1===n.indexOf(a)});k=new adf.mf.api.amx.SelectionEvent(t,n);c[m]=b.selection;a.setAttributeResolvedValue("__userselection",
c);adf.mf.api.amx.processAmxEvent(g,"selection",void 0,void 0,k,null)}else{var u=c;c={};a.setAttributeResolvedValue("__userselection",c);Object.keys(u).forEach(function(b){g=e.findAmxNode(a,b);k=new adf.mf.api.amx.SelectionEvent(u[b],[]);adf.mf.api.amx.processAmxEvent(g,"selection",void 0,void 0,k,null)})}}else if("action"===c&&(g=e.findAmxNode(a,b.item))){if(b=b.pointXY)c=document.getElementById(g.getId()),c||(c=a.getId(),m=document.getElementById(c),c=d.createDIV(),d.writeIDAttribute(c,g.getId()),
d.writeStyleAttribute(c,"visibility: hidden; position: absolute; width:1px; height:1px;"),m.appendChild(c)),c.style.cssText+="top:"+(b.y-2)+"px;left:"+(b.x+1)+"px;";b=new adf.mf.api.amx.ActionEvent;adf.mf.api.amx.processAmxEvent(g,"action",void 0,void 0,b,function(){var a=g.getAttributeExpression("action",!0);null!=a&&adf.mf.api.amx.doNavigation(a)})}};h.prototype.GetToolkitClass=function(){return adf.mf.internal.dvt.util.JSONPath("adf.mf.internal.dvt.toolkit.AmxThematicMap")};h.prototype.RenderComponent=
function(a,b,c,d){a.render(this.GetDataObject(d),b,c)};h.prototype.getElementLocator=function(a,b){var c=this.GetComponentInstance(null,a);return c?c.getSubIdForDomElement(b):null};h.prototype.getElementForLocator=function(a,b){var c=this.GetComponentInstance(null,a);return c?c.getDomElementForSubId(b):null};h.prototype._getCustomBaseMapMetadata=function(a,b){if(g[b])return g[b];a.setAttributeResolvedValue("_baseMap","loading");adf.mf.api.resourceFile._loadFileWithAjax(b,!0,function(c){c=(new DOMParser).parseFromString(c,
"text/xml");for(var d=c.getElementsByTagName("layer"),e=0;e<d.length;e++)for(var h=d[e].getElementsByTagName("image"),k=0;k<h.length;k++){var m=h[k].getAttribute("source"),m=adf.mf.api.amx.buildRelativePath(m);h[k].setAttribute("source",m)}c=(new XMLSerializer).serializeToString(c);g[b]=c;a.setAttributeResolvedValue("_baseMap","ok");c=new adf.mf.api.amx.AmxNodeUpdateArguments;c.setAffectedAttribute(a,"_baseMap");adf.mf.api.amx.markNodeForUpdate(c)},function(b){a.setAttributeResolvedValue("_baseMap",
"failed");args.setAffectedAttribute(a,"_baseMap");adf.mf.log.Framework.logp(adf.mf.log.level.SEVERE,"adf.mf.internal.dvt.thematicmap.ThematicMapRenderer","_getCustomBaseMapMetadata","Error: Failed to load custom base map.");adf.mf.log.Framework.logp(adf.mf.log.level.FINE,"adf.mf.internal.dvt.thematicmap.ThematicMapRenderer","_getCustomBaseMapMetadata","Error: "+b)});return null};var k={},m={},n=null,t=null,u=function(a,b){var c=t||new adf.mf.api.amx.AmxNodeUpdateArguments;a.forEach(function(a){var d=
a.getAttribute("_loadCounts")||0;d--;a.setAttributeResolvedValue("_loadCounts",d);0===d&&(a.setAttributeResolvedValue("_baseMap",b||"ok"),c.setAffectedAttribute(a,"_baseMap"))});null!=n&&(clearTimeout(n),n=null);t=c;n=setTimeout(function(a){t=n=null;adf.mf.api.amx.markNodeForUpdate(a)},40,c)};adf.mf.internal.dvt.loadMapLayerAndResource=function(a,b,c){var d=b.charAt(0).toUpperCase()+b.slice(1),e=c.charAt(0).toUpperCase()+c.slice(1),g="DvtBaseMap"+d+e+".js";b=a.getAttribute("_loadCounts")||0;m[g]?
0===b&&a.setAttributeResolvedValue("_baseMap","ok"):(a.setAttributeResolvedValue("_baseMap","loading"),a.setAttributeResolvedValue("_loadCounts",b+1),k[g]?k[g].push(a):(k[g]=[a],adf.mf.api.resourceFile.loadJsFile("js/thematicMap/basemaps/"+g,!0,function(){if(-1===adf.mf.locale.getUserLanguage().indexOf("en")){var a=d+e+"Bundle";adf.mf.internal.dvt.util.ResourceBundleLoader.getInstance().loadDvtResources("js/thematicMap/resource/"+a,null,function(){m[g]=!0;u(k[g]);delete k[g]})}else m[g]=!0,u(k[g]),
delete k[g]},function(){u(k[g],"failed");delete k[g]},function(a){return a})))};adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_DVTM,"thematicMap",h)})();