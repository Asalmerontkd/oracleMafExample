(function(){var b=!1;if(!adf.mf.environment.profile.dtMode&&("dev"==adf._bootstrapMode||"hosted"==adf._bootstrapMode)){var c=adf.mf.api.getQueryString(),a=adf.mf.api.getQueryStringParamValue(c,"amx_skin_folder_override"),c=adf.mf.api.getQueryStringParamValue(c,"amx_skin_override"),e=adf.mf.internal.amx.agent.type;if(null!=a&&-1!=a.indexOf("android"))b=!0;else if(null!=c&&-1!=c.indexOf("android"))b=!0;else if("gecko"==e||"trident"==e||"webkit"==e)b=!0}var d=adf.mf.api.amx.TypeHandler.register(adf.mf.api.amx.AmxTag.NAMESPACE_AMX,
"inputDate");d.prototype.getInputValueAttribute=function(){return"value"};d.prototype.render=function(a,c){d._oneTimeSetup();a.setConverter(null);var e=amx.createField(a,c+"_trigger");e.fieldLabel.setAttribute("id",c+"__fieldLabel");var m=e.fieldRoot,n=null,t=a.getAttribute("value");if(null==t)n={".null":!0},t="";else{var u=adf.mf.internal.converters.dateParser.parse(t);isNaN(u)||(n=new Date(u))}null!=n||adf.mf.environment.profile.dtMode||(n={".null":!0},t="");var v=a.getAttribute("inputType");0==
adf.mf.environment.profile.dtMode?"time"===v?null!=a.getAttribute("value")&&null!=n.getHours&&(t=adf.mf.internal.amx.extractTimeFromDateObject(n)):"datetime"===v?t=a.getAttribute("value"):(v="date",null!=a.getAttribute("value")&&null!=n.getFullYear&&(t=adf.mf.internal.amx.extractDateFromDateObject(n))):"Android"==adf.mf.internal.amx.agent.type||"UWP"==adf.mf.internal.amx.agent.type||b?"time"!==v&&"datetime"!==v&&(v="date"):v="text";var w=adf.mf.api.amx.isValueTrue(a.getAttribute("readOnly")),x=!1;
d._loadDateTimePatterns().then(function(){if(!x)if(x=!0,1==w){var m=document.createElement("span");m.setAttribute("id",c+"_triggerText");e.fieldValue.appendChild(m);var u=d._getRawValueFromDateObject(n);m.textContent=d._getTriggerText(v,u);m.setAttribute("readOnly",w);m.setAttribute("aria-readonly",w);adf.mf.internal.amx._setNonPrimitiveElementData(m,"value",n)}else{m=!0;if("UWP"==adf.mf.internal.amx.agent.type)"datetime"==v&&12.10565>adf.mf.internal.amx.agent.version?m=!1:"time"==v&&12.10532>adf.mf.internal.amx.agent.version&&
(m=!1);else if("Android"==adf.mf.internal.amx.agent.type||b)m=!1;m?d._createHtml5InputDate(a,e,t,v,n):d._createCustomInputDate(a,e,t,v,c)}},function(a){console.log("inputDate promise-then problem: "+a)})["catch"](function(a){console.log("inputDate promise-catch error: "+a)});adf.mf.api.amx.applyRequiredMarker(a,e);return m};d.prototype.destroy=function(a,b){var c=b.getId(),d=document.getElementById(c+"_picker"),c=document.getElementById(c+"_overlay");adf.mf.api.amx.removeDomNode(d);adf.mf.api.amx.removeDomNode(c)};
d.prototype.__getTestJavaScriptURI=function(a){return"js/testing/amx-inputDate.js"};d._getTriggerText=function(a,b){return"time"==a?d._getLocalizedTimeTextFromRawValue(b):"datetime"==a?d._getLocalizedDateTimeTextFromRawValue(b):d._getLocalizedDateTextFromRawValue(b)};d._oneTimeSetup=function(){if(null==d._LOCALIZED_MONTH_ARRAY){var a=Array(12);0==adf.mf.environment.profile.dtMode?(a[0]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_JANUARY_ABBREVIATION"),a[1]=adf.mf.resource.getInfoString("AMXInfoBundle",
"amx_inputDate_LABEL_FEBRUARY_ABBREVIATION"),a[2]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_MARCH_ABBREVIATION"),a[3]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_APRIL_ABBREVIATION"),a[4]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_MAY_ABBREVIATION"),a[5]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_JUNE_ABBREVIATION"),a[6]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_JULY_ABBREVIATION"),
a[7]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_AUGUST_ABBREVIATION"),a[8]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_SEPTEMBER_ABBREVIATION"),a[9]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_OCTOBER_ABBREVIATION"),a[10]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_NOVEMBER_ABBREVIATION"),a[11]=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_DECEMBER_ABBREVIATION"),d._LOCALIZED_TIME_AM=
adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_TIME_AM_ABBREVIATION"),d._LOCALIZED_TIME_PM=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_TIME_PM_ABBREVIATION"),d._LOCALIZED_BUDDHIST_ERA=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_DATE_BUDDHIST_ERA_ABBREVIATION")):(a[0]="JAN",a[1]="FEB",a[2]="MAR",a[3]="APR",a[4]="MAY",a[5]="JUN",a[6]="JUL",a[7]="AUG",a[8]="SEP",a[9]="OCT",a[10]="NOV",a[11]="DEC",d._LOCALIZED_TIME_AM="AM",d._LOCALIZED_TIME_PM=
"PM",d._LOCALIZED_BUDDHIST_ERA="BE");d._LOCALIZED_MONTH_ARRAY=a;d._tapEvents=amx.hasTouch()?{start:"touchstart",end:"touchend"}:{start:"mousedown",end:"mouseup"}}};d._capitalizeFirstLetter=function(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()};d._getLocalizedDateTimeTextFromRawValue=function(a){return null==a.monthIndex?"":d._getLocalizedDateTextFromRawValue(a)+" "+d._getLocalizedTimeTextFromRawValue(a)};d._loadDateTimePatterns=function(){return new adf.mf.internal.BasePromise(function(a,
b){d._datePatternFetched&&d._timePatternFetched?a():navigator.globalization&&navigator.globalization.getDatePattern?(navigator.globalization.getDatePattern(function(b){b=b.pattern;var c=d._removePatternLiterals(b);null!=c&&-1!=c.indexOf("y")&&-1==c.indexOf("m")&&(d._datePattern=b,d._datePatternFetched=!0,d._dateFormatOrder=null,d._timePatternFetched&&a())},function(a){console.log("inputDate date pattern fetch error: "+a)},{formatLength:"short",selector:"date"}),navigator.globalization.getDatePattern(function(b){b=
b.pattern;var c=d._removePatternLiterals(b);null!=c&&-1==c.indexOf("y")&&-1!=c.indexOf("m")&&(d._timePattern=b,d._timePatternFetched=!0,d._datePatternFetched&&a())},function(a){console.log("inputDate time pattern fetch error: "+a)},{formatLength:"short",selector:"time"})):(d._datePattern="MMM d, yyyy",d._timePattern="h:mm a",d._datePatternFetched=!0,d._timePatternFetched=!0,a())})};d._formatComparator=function(a,b){var c=a[1],d=b[1];return c>d?1:c<d?-1:0};d._getDateFormatOrderObject=function(){if(null==
d._dateFormatOrder){var a=d._removePatternLiterals(d._datePattern),b=a.indexOf("y"),c=a.indexOf("M"),a=a.indexOf("d"),b=[["month",c],["day",a],["year",b]];"rtl"==document.documentElement.dir&&(b[0][1]=1,b[1][1]=0,b[2][1]=2);b=b.sort(d._formatComparator);d._dateFormatOrder=[b[0][0],b[1][0],b[2][0]]}return d._dateFormatOrder};d._getLocalizedDateTextFromRawValue=function(a){if(null==a.monthIndex)return"";var b=d._getLocalizedYearFromRawValue(a),c=adf.mf.locale.getUserLocale(),c=getLocaleSymbols(c),e,
n;c?(e=c.getCalendarTypeString(),"buddhist"==e?(b+=543,n=d._LOCALIZED_BUDDHIST_ERA):"gregory"==e&&(n=c.getEras()[1])):(e="gregory",n="AD");var t=d._capitalizeFirstLetter(d._getLocalizedMonthFromRawValue(a)),u=d._getLocalizedDayFromRawValue(a),c=d._datePattern,v=d._removePatternLiterals(c);e=v.indexOf("y");var w=v.indexOf("M"),v=v.indexOf("d");if(-1==e||-1==w||-1==v)a=t+" "+u+", "+b;else{var x=10>u?"0"+u:u,z=1+a.monthIndex,y=10>z?"0"+z:z;a=d._applyReplacementsToUnquotedParts(c,function(a){a=a.replace(/[A-FH-LN-Za-ce-xz]/g,
"?");a=a.replace(/y+/g,b);a=a.replace(/d{2,2}/g,x);a=a.replace(/d{1,1}/g,u);a=a.replace(/G{1,5}/g,"oooo");a=a.replace(/M{5,5}/g,"ooo");a=a.replace(/M{4,}/g,"oo");a=a.replace(/M{3,3}/g,"o");a=a.replace(/M{2,2}/g,y);a=a.replace(/M{1,1}/g,z);return a=d._replacePartsConcurrently(a,[["oooo",n],["ooo",t.charAt(0)],["oo",t],["o",t]])})}return a};d._getTimeFormatOrderObject=function(){if(null==d._timeFormatOrder){var a=d._removePatternLiterals(d._timePattern),b=a.indexOf("h"),c=a.indexOf("H"),e=a.indexOf("k"),
n=a.indexOf("K");-1==b&&(b=c);-1==b&&(b=e);-1==b&&(b=n);e=a.indexOf("m");c=a.indexOf("a");-1==c&&(c=a.indexOf("t"));a=[["hours",b],["min",e],["amPm",-1==c?Number.MAX_VALUE:c]];"rtl"==document.documentElement.dir&&(a[0][1]=1,a[1][1]=0,a[2][1]=-1==c?Number.MAX_VALUE:2);a=a.sort(d._formatComparator);d._timeFormatOrder=[a[0][0],a[1][0],a[2][0]]}return d._timeFormatOrder};d._getLocalizedTimeTextFromRawValue=function(a){if(null==a.hour1to12)return"";var b=parseInt(d._getLocalizedHourFromRawValue(a),10),
c=d._getLocalizedMinutesFromRawValue(a),e=d._getLocalizedAmPmFromRawValue(a),n=a.isPm;a=d._timePattern;var t=d._removePatternLiterals(a),u=t.indexOf("h"),v=t.indexOf("H"),w=t.indexOf("k"),x=t.indexOf("K"),z=u;-1==z&&(z=v);-1==z&&(z=w);-1==z&&(z=x);var y=t.indexOf("m"),A=t.indexOf("a");-1==A&&(A=t.indexOf("t"));if(-1==z||-1==y)a=b+":"+c+" "+e;else{var D,C;a=d._applyReplacementsToUnquotedParts(a,function(a){a=a.replace(/[A-GIJL-Zb-gijln-su-z]/g,"?");-1!=u&&(C=b,10>C&&(C="0"+C),a=a.replace(/h{2,2}/g,
C),a=a.replace(/h{1,1}/g,b));-1!=v&&(D=b,n?12!=D&&(D+=12):12==b&&(D=0),C=D,10>C&&(C="0"+C),a=a.replace(/H{2,2}/g,C),a=a.replace(/H{1,1}/g,D));-1!=w&&(D=b,n?D+=12:12==b&&(D=24),C=D,10>C&&(C="0"+C),a=a.replace(/k{2,2}/g,C),a=a.replace(/k{1,1}/g,D));-1!=x&&(D=b,12==b&&(D=0),C=D,10>C&&(C="0"+C),a=a.replace(/K{2,2}/g,C),a=a.replace(/K{1,1}/g,D));a=a.replace(/m{2,}/g,c);a=a.replace(/m{1,1}/g,parseInt(c,10));return a=a.replace(/[at]+/g,e)})}return a};d._replacePartsConcurrently=function(a,b,c){if(void 0==
c)c=-1;else if(c==b.length-1)return a;++c;if(null==a||0==a.length)return d._replacePartsConcurrently(u,b,c);var e=b[c][1];a=a.split(b[c][0]);for(var n=0,t=a.length;n<t;++n){var u=a[n];a[n]=d._replacePartsConcurrently(u,b,c)}return a.join(e)};d._applyReplacementsToUnquotedParts=function(a,b){var c=a;if(null!=c){for(var c=c.replace(/''/g,"$_*!"),c=c.split("'"),d=[],e=0,t=c.length;e<t;++e){var u=c[e],u=u.replace(/\$_\*\!/g,"'");0==e%2?d.push(b(u)):d.push(u)}c=d.join("")}return c};d._removePatternLiterals=
function(a){if(null!=a){a=a.replace(/''/g,"");a=a.split("'");for(var b=[],c=0,d=a.length;c<d;c+=2)b.push(a[c]);a=b.join("")}return a};d._getLocalizedMonthFromRawValue=function(a){return null==a.monthIndex?"":d._LOCALIZED_MONTH_ARRAY[a.monthIndex]};d._getLocalizedDayFromRawValue=function(a){return null==a.dayNumber?"":a.dayNumber};d._getLocalizedYearFromRawValue=function(a){return null==a.year?"":a.year};d._getLocalizedHourFromRawValue=function(a){return null==a.hour1to12?"":a.hour1to12};d._getLocalizedMinutesFromRawValue=
function(a){if(null==a.min)return"";a=a.min;10>a&&(a="0"+a);return a};d._getLocalizedAmPmFromRawValue=function(a){return null==a.isPm?"":a.isPm?d._LOCALIZED_TIME_PM:d._LOCALIZED_TIME_AM};d._isValidDate=function(a){return"function"===typeof a.toISOString&&!isNaN(a.getTime())};d._fillDateText=function(a){var b=a.indexOf("T");if(-1<b&&b+1<a.length){var c=a.substring(b+1);6==c.length?c=c.substring(0,5)+":00.000Z":9==c.length&&(c=c.substring(0,8)+".000Z");a=a.substring(0,b+1)+c}return a};d._daysInMonth=
function(a){var b=a.year;a=a.monthIndex;dateObject=new Date(0,1,1);dateObject.setFullYear(b);dateObject.setMonth(a+1);dateObject.setDate(0);return dateObject.getDate()};d._populateTime=function(a,b,c){var e=b.chosen,n=b.last;b=b.present;var t=document.getElementById(a+"_txt1"),u=document.getElementById(a+"_txt2"),v=document.getElementById(a+"_txt3"),w=document.getElementById(a+"_timeTxt"),x=parseInt(d._getLocalizedHourFromRawValue(e),10),z=d._getLocalizedMinutesFromRawValue(e),y=d._getLocalizedAmPmFromRawValue(e),
A=d._getTimeFormatOrderObject(),D=d._removePatternLiterals(d._timePattern),C=D.indexOf("h"),B=D.indexOf("H"),I=D.indexOf("k"),K=D.indexOf("K"),L=D.indexOf("a");-1==L&&(L=D.indexOf("t"));-1==L&&(y=document.getElementById(a+"_inner-container"),y.classList.remove("amx-3-col"),y.classList.add("amx-2-col"),document.getElementById(a+"_inc3").style.display="none",v.style.display="none",document.getElementById(a+"_dec3").style.display="none",y="");isNaN(x)&&(x="");null!=e.hour1to12&&""!=x&&(-1==C&&(-1!=B?
e.isPm?12!=x&&(x+=12):12==x&&(x=0):-1!=I?e.isPm&&12!=x?x+=12:e.isPm||12!=x||(x=24):-1!=K&&12==x&&(x=0)),10>x&&(-1!=D.indexOf("hh")||-1!=D.indexOf("HH")||-1!=D.indexOf("kk")||-1!=D.indexOf("KK"))&&(x="0"+x));""!=z&&-1==D.indexOf("mm")&&(z=parseInt(z,10));t.textContent="hours"==A[0]?x:"min"==A[0]?z:y;u.textContent="hours"==A[1]?x:"min"==A[1]?z:y;v.textContent="hours"==A[2]?x:"min"==A[2]?z:y;c&&(d._isRawValueEmpty(e)?d._isRawValueEmpty(n)?w.textContent=d._getLocalizedTimeTextFromRawValue(b):w.textContent=
d._getLocalizedTimeTextFromRawValue(n):w.textContent=d._getLocalizedTimeTextFromRawValue(e))};d._populateDate=function(a,b,c){var e=b.chosen,n=b.last;b=b.present;var t=document.getElementById(a+"_txt1"),u=document.getElementById(a+"_txt2"),v=document.getElementById(a+"_txt3"),w=document.getElementById(a+"_dateTxt"),x=document.getElementById(a+"_inner-container");x.classList.remove("amx-2-col");x.classList.add("amx-3-col");document.getElementById(a+"_inc3").style.display="";v.style.display="";document.getElementById(a+
"_dec3").style.display="";a=d._daysInMonth(e);e.dayNumber>a&&(e.dayNumber=a);a=d._getLocalizedMonthFromRawValue(e).toUpperCase();var x=d._getLocalizedDayFromRawValue(e),z=d._getLocalizedYearFromRawValue(e),y=d._getDateFormatOrderObject();t.textContent="year"==y[0]?z:"month"==y[0]?a:x;u.textContent="year"==y[1]?z:"month"==y[1]?a:x;v.textContent="year"==y[2]?z:"month"==y[2]?a:x;c&&(d._isRawValueEmpty(e)?d._isRawValueEmpty(n)?w.textContent=d._getLocalizedDateTextFromRawValue(b):w.textContent=d._getLocalizedDateTextFromRawValue(n):
w.textContent=d._getLocalizedDateTextFromRawValue(e))};d._initialPickerPopulation=function(a,b,c,e){var n=document.getElementById(a+"_picker"),t=document.getElementById(a+"_title"),u=document.getElementById(a+"_dateTab"),v=document.getElementById(a+"_timeTab");"time"==b?(n.setAttribute("class","amx-inputDate-picker-wrapper amx-purge-on-nav amx-inputDate-picker-timeOnly"),v.className="amx-inputDate-picker-time-header",u.className="amx-inputDate-picker-time-header",u.style.display="none",t.textContent=
adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_SET_TIME"),d._populateTime(a,c,!0)):"datetime"==b?(n.setAttribute("class","amx-inputDate-picker-wrapper amx-purge-on-nav"),d._populateTime(a,c,!0),d._populateDate(a,c,!0),v.style.display="block",n.setAttribute("class","amx-inputDate-picker-wrapper amx-purge-on-nav"),v.className="amx-inputDate-picker-timeTab",u.className="amx-inputDate-picker-dateTab-selected",adf.mf.api.amx.addBubbleEventListener(v,"tap",d._customTimeTabTapHandler,
e),adf.mf.api.amx.addBubbleEventListener(u,"tap",d._customDateTabTapHandler,e),t.textContent=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_SET_DATE_TIME")):(n.setAttribute("class","amx-inputDate-picker-wrapper amx-purge-on-nav amx-inputDate-picker-dateOnly"),u.className="amx-inputDate-picker-date-header",v.className="amx-inputDate-picker-date-header",v.style.display="none",t.textContent=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_SET_DATE"),d._populateDate(a,
c,!0))};d._createCustomInputDate=function(a,b,c,e,n){var t=document.createElement("div");t.id=n+"_trigger";t.setAttribute("role","button");t.setAttribute("tabindex","0");t.setAttribute("class","amx-inputDate-trigger-dateTime");(adf.mf.api.amx.isValueTrue(a.getAttribute("showRequired"))||adf.mf.api.amx.isValueTrue(a.getAttribute("required")))&&t.setAttribute("aria-required","true");var u=document.createElement("span");u.setAttribute("class","amx-inputDate-text");u.setAttribute("id",n+"_triggerText");
var v=document.createElement("div");v.setAttribute("class","amx-inputDate-triggerIconStyleWrapper");var w=document.createElement("div");w.setAttribute("class","amx-inputDate-triggerIconStyle");t.appendChild(u);t.appendChild(v);t.appendChild(w);b.fieldValue.appendChild(t);var v=adf.mf.api.amx.isValueTrue(a.getAttribute("disabled")),x=null,z=a.getAttribute("value"),w=null,y=d._getRawValueFromDateObject(null);"undefined"!==typeof z?(w=adf.mf.internal.converters.dateParser.parse(z),isNaN(w)||(x=new Date(w)),
null==x&&(x=adf.mf.environment.profile.dtMode?new Date:{".null":!0}),y=d._getRawValueFromDateObject(x),w=null!=x.toISOString?x.toISOString():"",u.textContent=d._getTriggerText(e,y)):x={".null":!0};u=x;null==u.getDate&&(u=new Date);u=d._getRawValueFromDateObject(u);0==v&&adf.mf.api.amx.addBubbleEventListener(t,"tap",d._customTriggerTapHandler,{amxNode:a,id:n,inputType:e,rawValue:y,presentRawValue:u,oldAndroidDateValue:w});0!=adf.mf.environment.profile.dtMode&&(adf.mf.api.amx.removeDomNode(t),a=document.createElement("span"),
a.classList.add("amx-inputDate-readOnly"),a.textContent=c,b.fieldValue.appendChild(a))};d._isRawValueEmpty=function(a){return null==a.year&&null==a.hour1to12};d._assignRawValueMembers=function(a,b){null==b?(a.year=null,a.monthIndex=null,a.dayNumber=null,a.hour1to12=null,a.min=null,a.isPm=null):(a.year=b.year,a.monthIndex=b.monthIndex,a.dayNumber=b.dayNumber,a.hour1to12=b.hour1to12,a.min=b.min,a.isPm=b.isPm)};d._cloneRawValue=function(a){return{year:a.year,monthIndex:a.monthIndex,dayNumber:a.dayNumber,
hour1to12:a.hour1to12,min:a.min,isPm:a.isPm}};d._getDateObjectFromRawValue=function(a){if(d._isRawValueEmpty(a))a=null;else{var b=a.year,c=a.monthIndex,e=a.dayNumber,n=a.min,t=a.hour1to12;a.isPm?12!=t&&(t+=12):12==t&&(t=0);a=new Date(0,1,1);a.setFullYear(b);a.setMonth(c);a.setDate(e);a.setHours(t);a.setMinutes(n)}return a};d._getRawValueFromDateObject=function(a){var b={year:null,monthIndex:null,dayNumber:null,hour1to12:null,min:null,isPm:null};if(null==a||null==a.getFullYear)return b;var c=a.getHours(),
d=!1;0==c?c=12:12==c?d=!0:12<c&&(d=!0,c-=12);b.year=a.getFullYear();b.monthIndex=a.getMonth();b.dayNumber=a.getDate();b.hour1to12=c;b.min=a.getMinutes();b.isPm=d;return b};d._customTriggerTapHandler=function(a){if(adf.mf.api.amx.acceptEvent()){a.stopPropagation();a=a.data;var b=a.id,c=a.inputType,e=a.rawValue,n=a.presentRawValue,e=d._isRawValueEmpty(e)?d._cloneRawValue(n):d._cloneRawValue(e),t=d._cloneRawValue(e),n={chosen:e,last:t,present:n};a.rawValues=n;e=document.createElement("div");e.setAttribute("class",
"amx-inputDate-picker-wrapper amx-purge-on-nav");e.setAttribute("id",b+"_picker");t=document.createElement("div");t.id=b+"_dateTab";t.setAttribute("role","button");t.setAttribute("tabindex","0");t.setAttribute("class","amx-inputDate-picker-dateTab-selected");var u=document.createElement("span");u.setAttribute("class","amx-inputDate-picker-dateTab-text");u.setAttribute("id",b+"_dateTxt");t.appendChild(u);u=document.createElement("div");u.id=b+"_timeTab";u.setAttribute("role","button");u.setAttribute("tabindex",
"0");u.setAttribute("class","amx-inputDate-picker-timeTab");var v=document.createElement("span");v.setAttribute("class","amx-inputDate-picker-timeTab-text");v.setAttribute("id",b+"_timeTxt");var w=document.createElement("div");w.setAttribute("class","amx-inputDate-picker-titleBarText");w.setAttribute("id",b+"_title");e.appendChild(w);u.appendChild(v);e.appendChild(t);e.appendChild(u);w=document.createElement("div");w.id=b+"_inner-container";w.setAttribute("class","amx-inputDate-datePicker-inner-container");
var x=document.createElement("div");x.setAttribute("class","amx-inputDate-datePicker-row-increment");w.appendChild(x);t=document.createElement("div");x.appendChild(t);t.id=b+"_inc1";t.setAttribute("role","button");t.setAttribute("tabindex","0");t.setAttribute("aria-label","+");t.setAttribute("class","amx-inputDate-datePicker-firstColumn-increment amx-inputDate-incrementButton amx-inputDate-datePicker-col");u=document.createElement("div");x.appendChild(u);u.id=b+"_inc2";u.setAttribute("role","button");
u.setAttribute("tabindex","0");u.setAttribute("aria-label","+");u.setAttribute("class","amx-inputDate-datePicker-secondColumn-increment amx-inputDate-incrementButton amx-inputDate-datePicker-col");v=document.createElement("div");x.appendChild(v);v.id=b+"_inc3";v.setAttribute("role","button");v.setAttribute("tabindex","0");v.setAttribute("aria-label","+");v.setAttribute("class","amx-inputDate-datePicker-thirdColumn-increment amx-inputDate-incrementButton amx-inputDate-datePicker-col amx-inputDate-datePicker-lastCol");
x=document.createElement("div");x.setAttribute("class","amx-inputDate-datePicker-row-text");w.appendChild(x);var z=document.createElement("div");x.appendChild(z);z.id=b+"_txt1";z.setAttribute("class","amx-inputDate-datePicker-month-text amx-inputDate-datePicker-col");z=document.createElement("div");x.appendChild(z);z.id=b+"_txt2";z.setAttribute("class","amx-inputDate-datePicker-day-text amx-inputDate-datePicker-col");z=document.createElement("div");x.appendChild(z);z.id=b+"_txt3";z.setAttribute("class",
"amx-inputDate-datePicker-year-text amx-inputDate-datePicker-col amx-inputDate-datePicker-lastCol");z=document.createElement("div");z.setAttribute("class","amx-inputDate-datePicker-clear-col");x.appendChild(z);x=document.createElement("div");x.id=b+"_clear";x.setAttribute("role","button");x.setAttribute("tabindex","0");x.setAttribute("class","amx-inputDate-picker-clearButton");x.setAttribute("aria-label",adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_CLEAR_BUTTON"));var y=document.createElement("div");
y.className="amx-extendedTarget";x.appendChild(y);z.appendChild(x);var A=document.createElement("div");A.setAttribute("class","amx-inputDate-datePicker-row-decrement");w.appendChild(A);z=document.createElement("div");A.appendChild(z);z.id=b+"_dec1";z.setAttribute("role","button");z.setAttribute("tabindex","0");z.setAttribute("aria-label","-");z.setAttribute("class","amx-inputDate-datePicker-firstColumn-decrement amx-inputDate-decrementButton amx-inputDate-datePicker-col");y=document.createElement("div");
A.appendChild(y);y.id=b+"_dec2";y.setAttribute("role","button");y.setAttribute("tabindex","0");y.setAttribute("aria-label","-");y.setAttribute("class","amx-inputDate-datePicker-secondColumn-decrement amx-inputDate-decrementButton amx-inputDate-datePicker-col");var D=document.createElement("div");A.appendChild(D);D.id=b+"_dec3";D.setAttribute("role","button");D.setAttribute("tabindex","0");D.setAttribute("aria-label","-");D.setAttribute("class","amx-inputDate-datePicker-thirdColumn-decrement amx-inputDate-decrementButton amx-inputDate-datePicker-col amx-inputDate-datePicker-lastCol");
e.appendChild(w);w=document.createElement("div");w.id=b+"_set";w.setAttribute("role","button");w.setAttribute("tabindex","0");w.setAttribute("class","amx-inputDate-picker-setButton");A=document.createElement("span");A.setAttribute("class","amx-inputDate-picker-button-text");A.textContent=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_OK_BUTTON");w.appendChild(A);e.appendChild(w);A=document.createElement("div");A.id=b+"_cancel";A.setAttribute("role","button");A.setAttribute("tabindex",
"0");A.setAttribute("class","amx-inputDate-picker-cancelButton");var C=document.createElement("span");C.setAttribute("class","amx-inputDate-picker-button-text");C.textContent=adf.mf.resource.getInfoString("AMXInfoBundle","amx_inputDate_LABEL_CANCEL_BUTTON");A.appendChild(C);e.appendChild(A);C=document.createElement("div");C.id=b+"_overlay";C.setAttribute("class","amx-inputDate-picker-modalOverlay amx-purge-on-nav");adf.mf.api.amx.addBubbleEventListener(C,"tap",d._customCancelButtonTapHandler,a);document.body.appendChild(C);
document.body.appendChild(e);d._initialPickerPopulation(b,c,n,a);adf.mf.api.amx.addBubbleEventListener(w,"tap",d._customSetButtonTapHandler,a);adf.mf.api.amx.addBubbleEventListener(A,"tap",d._customCancelButtonTapHandler,a);adf.mf.api.amx.addBubbleEventListener(x,"tap",d._customClearButtonTapHandler,a);adf.mf.api.amx.addBubbleEventListener(t,d._tapEvents.start,d._customIncrement1stTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(t,d._tapEvents.end,d._customIncrementTouchEndHandler,t.id);
adf.mf.api.amx.addBubbleEventListener(u,d._tapEvents.start,d._customIncrement2ndTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(u,d._tapEvents.end,d._customIncrementTouchEndHandler,u.id);adf.mf.api.amx.addBubbleEventListener(v,d._tapEvents.start,d._customIncrement3rdTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(v,d._tapEvents.end,d._customIncrementTouchEndHandler,v.id);adf.mf.api.amx.addBubbleEventListener(z,d._tapEvents.start,d._customDecrement1stTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(z,
d._tapEvents.end,d._customDecrementTouchEndHandler,z.id);adf.mf.api.amx.addBubbleEventListener(y,d._tapEvents.start,d._customDecrement2ndTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(y,d._tapEvents.end,d._customDecrementTouchEndHandler,y.id);adf.mf.api.amx.addBubbleEventListener(D,d._tapEvents.start,d._customDecrement3rdTouchStartHandler,a);adf.mf.api.amx.addBubbleEventListener(D,d._tapEvents.end,d._customDecrementTouchEndHandler,D.id)}};d._customSetButtonTapHandler=function(a){a.preventDefault();
a.stopPropagation();var b=a.data,c=b.amxNode;a=b.id;var e=b.inputType,n=b.rawValues,t=b.oldAndroidDateValue,u=document.getElementById(a+"_triggerText"),n=n.chosen;d._isRawValueEmpty(n)?(e=androidDateObject={".null":!0},u.textContent=""):"datetime"==e?(androidDateObject=d._getDateObjectFromRawValue(n),e=androidDateObject.toISOString(),u.textContent=d._getLocalizedDateTimeTextFromRawValue(n)):"time"==e?(androidDateObject=d._getDateObjectFromRawValue(n),e=androidDateObject.toISOString(),u.textContent=
d._getLocalizedTimeTextFromRawValue(n)):(androidDateObject=d._getDateObjectFromRawValue(n),e=androidDateObject.toISOString(),u.textContent=d._getLocalizedDateTextFromRawValue(n));t=new amx.ValueChangeEvent(t,e);adf.mf.api.amx.processAmxEvent(c,"valueChange","value",e,t);b.oldAndroidDateValue=e;b.rawValue=n;b=document.getElementById(a+"_picker");a=document.getElementById(a+"_overlay");adf.mf.api.amx.removeDomNode(b);adf.mf.api.amx.removeDomNode(a)};d._customCancelButtonTapHandler=function(a){a.preventDefault();
a.stopPropagation();var b=a.data.id;a=document.getElementById(b+"_picker");b=document.getElementById(b+"_overlay");adf.mf.api.amx.removeDomNode(a);adf.mf.api.amx.removeDomNode(b)};d._customClearButtonTapHandler=function(a){var b=a.data;a=b.id;d._assignRawValueMembers(b.rawValues.chosen,null);var b=document.getElementById(a+"_txt1"),c=document.getElementById(a+"_txt2");a=document.getElementById(a+"_txt3");b.textContent="";c.textContent="";a.textContent=""};d._customTimeTabTapHandler=function(a){var b=
a.data;a=b.id;var b=b.rawValues,c=b.chosen,e=b.last,n=document.getElementById(a+"_dateTab"),t=document.getElementById(a+"_timeTab");t.classList.contains("amx-inputDate-picker-timeTab-selected")?d._assignRawValueMembers(c,e):d._assignRawValueMembers(e,c);d._populateDate(a,b,!0);d._populateTime(a,b,!0);n.className="amx-inputDate-picker-dateTab";t.className="amx-inputDate-picker-timeTab-selected"};d._customDateTabTapHandler=function(a){var b=a.data;a=b.id;var b=b.rawValues,c=b.chosen,e=b.last,n=document.getElementById(a+
"_dateTab"),t=document.getElementById(a+"_timeTab");n.classList.contains("amx-inputDate-picker-dateTab-selected")?d._assignRawValueMembers(c,e):d._assignRawValueMembers(e,c);d._populateTime(a,b,!0);d._populateDate(a,b,!0);n.className="amx-inputDate-picker-dateTab-selected";t.className="amx-inputDate-picker-timeTab"};d._customIncrement1stTouchStartHandler=function(a){d._handleSpinnerIncrement(a,1)};d._customIncrement2ndTouchStartHandler=function(a){d._handleSpinnerIncrement(a,2)};d._customIncrement3rdTouchStartHandler=
function(a){d._handleSpinnerIncrement(a,3)};d._handleSpinnerIncrement=function(a,b){var c=a.data,e=c.id,n=c.rawValues,t=n.chosen,c=d._isSpinningDateValues(e,c.inputType),u=document.getElementById(e+"_inc"+b);d._customIncrementTouchStartStyling(u);d._choosePresentValueIfEmpty(e,n,c);c?(c=d._getDateFormatOrderObject()[b-1],"month"==c?11>t.monthIndex?t.monthIndex++:t.monthIndex=0:"day"==c?(c=d._daysInMonth(t),t.dayNumber<c?t.dayNumber++:t.dayNumber=1):t.year++,d._populateDate(e,n,!1)):(c=d._getTimeFormatOrderObject()[b-
1],"hours"==c?(12>t.hour1to12?t.hour1to12++:t.hour1to12=1,12==t.hour1to12&&(t.isPm=!t.isPm)):"min"==c?59>t.min?t.min++:t.min=0:t.isPm=!t.isPm,d._populateTime(e,n,!1))};d._customDecrement1stTouchStartHandler=function(a){d._handleSpinnerDecrement(a,1)};d._customDecrement2ndTouchStartHandler=function(a){d._handleSpinnerDecrement(a,2)};d._customDecrement3rdTouchStartHandler=function(a){d._handleSpinnerDecrement(a,3)};d._handleSpinnerDecrement=function(a,b){var c=a.data,e=c.id,n=c.rawValues,t=n.chosen,
c=d._isSpinningDateValues(e,c.inputType),u=document.getElementById(e+"_dec"+b);d._customDecrementTouchStartStyling(u);d._choosePresentValueIfEmpty(e,n,c);c?(c=d._getDateFormatOrderObject()[b-1],"month"==c?0<t.monthIndex?t.monthIndex--:t.monthIndex=11:"day"==c?(c=d._daysInMonth(t),1<t.dayNumber&&t.dayNumber<=c?t.dayNumber--:t.dayNumber=c):t.year--,d._populateDate(e,n,!1)):(c=d._getTimeFormatOrderObject()[b-1],"hours"==c?(1<t.hour1to12?t.hour1to12--:t.hour1to12=12,11==t.hour1to12&&(t.isPm=!t.isPm)):
"min"==c?0<t.min?t.min--:t.min=59:t.isPm=!t.isPm,d._populateTime(e,n,!1))};d._customIncrementTouchEndHandler=function(a){a=document.getElementById(a.data);a.classList.remove("amx-inputDate-incrementButton-selected");a.classList.add("amx-inputDate-incrementButton")};d._customDecrementTouchEndHandler=function(a){a=document.getElementById(a.data);a.classList.remove("amx-inputDate-decrementButton-selected");a.classList.add("amx-inputDate-decrementButton")};d._customIncrementTouchStartStyling=function(a){a.classList.remove("amx-inputDate-incrementButton");
a.classList.add("amx-inputDate-incrementButton-selected")};d._customDecrementTouchStartStyling=function(a){a.classList.remove("amx-inputDate-decrementButton");a.classList.add("amx-inputDate-decrementButton-selected")};d._isSpinningDateValues=function(a,b){return document.getElementById(a+"_dateTab").classList.contains("amx-inputDate-picker-dateTab-selected")||"datetime"!=b&&"time"!=b};d._choosePresentValueIfEmpty=function(a,b,c){var e=b.chosen,n=b.present;d._isRawValueEmpty(e)&&(d._assignRawValueMembers(e,
n),c?(d._populateTime(a,b,!0),d._populateDate(a,b,!0)):(d._populateDate(a,b,!0),d._populateTime(a,b,!0)))};d._createHtml5InputDate=function(a,b,c,e,n){var t=document.createElement("input");t.setAttribute("id",a.getId()+"_trigger");t.setAttribute("class","amx-inputDate-content");t.setAttribute("type",e);b.fieldValue.appendChild(t);"datetime"==e?(t.setAttribute("type","datetime-local"),t.setAttribute("data-datetime-value",c),t.value=d._toDateTimeLocalString(c)):t.value=c;adf.mf.internal.amx._setNonPrimitiveElementData(t,
"value",n);adf.mf.internal.amx.registerFocus(t);adf.mf.internal.amx.registerBlur(t,function(b){var c=adf.mf.internal.amx._getNonPrimitiveElementData(t,"value");""===t.value?b={".null":!0}:"time"===e?(b=d._isValidDate(c)?new Date(c.getTime()):new Date,adf.mf.internal.amx.updateTime(b,t.value)):"date"===e?(b=d._isValidDate(c)?new Date(c.getTime()):new Date,adf.mf.internal.amx.updateDate(b,t.value)):(b=t.value,t.setAttribute("data-datetime-value",b),b=d._toDateTimeIsoString(d._fillDateText(b)),b=new Date(b),
d._isValidDate(c)&&b.setMilliseconds(c.getMilliseconds()));if(!(1==b[".null"]&&1==c[".null"]||d._isValidDate(b)&&d._isValidDate(c)&&b.getTime()==c.getTime())){var h;d._isValidDate(b)?(h=b.toISOString(),h=h.replace(/:\d\d.\d\d\d/,":00.000")):h=b;c=d._isValidDate(c)?c.toISOString():c;c=new amx.ValueChangeEvent(c,h);adf.mf.api.amx.processAmxEvent(a,"valueChange","value",h,c)}adf.mf.internal.amx._setNonPrimitiveElementData(t,"value",b)});adf.mf.api.amx.addBubbleEventListener(t,"tap",function(a){a.stopPropagation()});
c=a.getAttribute("disabled");1==c&&(t.setAttribute("disabled",c),t.setAttribute("aria-disabled",c));"UWP"==adf.mf.internal.amx.agent.type&&(n=adf.mf.api.amx.isValueTrue(a.getAttribute("readOnly")),1!=c&&1!=n&&(c=document.createElement("a"),c.className="amx-inputDate-clear",b.fieldValue.appendChild(c),adf.mf.api.amx.addBubbleEventListener(c,"tap",function(b){b.stopPropagation();b.preventDefault();t.value="";var c=adf.mf.internal.amx._getNonPrimitiveElementData(t,"value");b={".null":!0};1==b[".null"]&&
1!=c[".null"]&&(c=d._isValidDate(c)?c.toISOString():c,c=new amx.ValueChangeEvent(c,b),adf.mf.api.amx.processAmxEvent(a,"valueChange","value",b,c),adf.mf.internal.amx._setNonPrimitiveElementData(t,"value",b))})));(adf.mf.api.amx.isValueTrue(a.getAttribute("showRequired"))||adf.mf.api.amx.isValueTrue(a.getAttribute("required")))&&t.setAttribute("aria-required","true")};d.setUnitTestFormat=function(a,b){if(null!=document.querySelector(".amx-automation")||adf.mf.environment.profile.mockData)null==d._defaultDatePattern&&
(d._defaultDatePattern=d._datePattern),null!=a&&""!=a||null==d._defaultDatePattern||(a=d._defaultDatePattern),null==d._defaultTimePattern&&(d._defaultTimePattern=d._timePattern),null!=b&&""!=b||null==d._defaultTimePattern||(b=d._defaultTimePattern),null!=a&&(null==d._defaultDatePattern&&(d._defaultDatePattern=d._datePattern),d._datePattern=a,d._datePatternFetched=!0,d._dateFormatOrder=null),null!=b&&(null==d._defaultTimePattern&&(d._defaultTimePattern=d._timePattern),d._timePattern=b,d._timePatternFetched=
!0,d._timeFormatOrder=null),adf.mf.api.amx.AmxNode.getAmxNodeForElement(document.querySelector(".amx-view")).rerender()};d._toDateTimeLocalString=function(a){try{if(null==a||""==a)return"";var b=new Date(a),c=b.getTimezoneOffset();b.setMinutes(b.getMinutes()-c);var e=b.toISOString().replace("Z","");return d._fillDateText(e)}catch(n){return""}};d._toDateTimeIsoString=function(a){try{if(null==a||""==a)return"";var b=a.indexOf("T"),c=a.substring(b);-1==c.indexOf("-")&&-1==c.indexOf("+")&&(a+="+00:00");
var e=new Date(a),n=e.getTimezoneOffset();e.setMinutes(e.getMinutes()+n);var t=e.toISOString();return d._fillDateText(t)}catch(u){return""}}})();