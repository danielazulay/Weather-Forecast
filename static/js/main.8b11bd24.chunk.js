(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(24),r=c.n(a),n=(c(29),c(6)),l=c(2),h=c(7),o=c.n(h),j=c(14),d=c(10),w=c(5),b=c(0);var m=function(e){return Object(b.jsx)("div",{className:"wind",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"date",children:e.date(e.applicable_date)}),Object(b.jsxs)("div",{className:"weatherblock",children:[Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:e.iconRender(e.weather_state_abbr),alt:"temp"})}),Object(b.jsx)("li",{class:"weatherlegend",children:e.weather_state_name})]}),Object(b.jsxs)("div",{className:"tempblock",children:[Object(b.jsxs)("li",{children:["Max : ",Math.floor(e.max_temp),"C"]}),Object(b.jsxs)("li",{children:["Min : ",Math.floor(e.min_temp),"C"]})]}),Object(b.jsxs)("li",{className:"windSpeed",children:[Math.floor(e.wind_speed)," mph"]}),Object(b.jsx)("b",{children:"Humidity"}),Object(b.jsxs)("li",{children:[Math.floor(e.humidity),"%"]}),Object(b.jsx)("b",{children:"Visibility"}),Object(b.jsxs)("li",{children:[Number(e.visibility).toFixed(1),"miles"]}),Object(b.jsx)("b",{children:"Pressure"}),Object(b.jsxs)("li",{children:[Math.floor(e.air_pressure),"mb"]}),Object(b.jsxs)("div",{className:"units",children:[Object(b.jsx)("b",{children:"Confidence"}),Object(b.jsxs)("li",{children:[e.predictability,"%"]})]})]})})},p=c(11),u=c.n(p);c(23);var O=function(){var e=Object(i.useState)({applicable_date:"",weather_state_name:"",weather_state_abbr:"",wind_speed:"",wind_direction:"",min_temp:"",max_temp:"",the_temp:"",air_pressure:"",humidity:"",visibility:"",timezone_name:"",predictability:"",sun_rise:"",sun_set:""}),t=Object(w.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)({id:""}),r=Object(w.a)(a,2),l=r[0],h=r[1];return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://www.metaweather.com/api/location/".concat(l.id,"/2021/1/1/"));case 3:t=e.sent,c=JSON.parse(JSON.stringify(t.data)),s(Object(j.a)(Object(j.a)({},c[0]),{},{title:c.title})),console.log(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l.id]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"title",children:"Info Weather"}),Object(b.jsx)("form",{type:"select",children:Object(b.jsxs)("select",{value:l.id,onChange:function(e){h({id:e.target.value})},children:[Object(b.jsx)("option",{selected:"selected",children:"Select a Country"}),Object(b.jsx)("option",{value:"2459115",children:"New York"}),Object(b.jsx)("option",{value:"2442047",children:"Los Angeles"}),Object(b.jsx)("option",{value:"610264",children:"Marseille"}),Object(b.jsx)("option",{value:"753692",children:"Barcelona "}),Object(b.jsx)("option",{value:"721943",children:"Rome "})]})}),Object(b.jsx)(n.b,{to:"/",children:Object(b.jsx)("img",{className:"seta",src:"https://prints.ultracoloringpages.com/e5584bc02039df88f778a97c6f9ddf15.png",alt:"sign"})}),""===l.id?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{class:"city",children:c.title}),Object(b.jsx)(m,{applicable_date:c.applicable_date,weather_state_abbr:c.weather_state_abbr,weather_state_name:c.weather_state_name,max_temp:c.max_temp,min_temp:c.min_temp,wind_speed:c.wind_speed,humidity:c.humidity,visibility:c.visibility,air_pressure:c.air_pressure,predictability:c.predictability,date:function(e){var t=new Date(e),c=new Date;return c.toString().slice(0,10)===t.toString().slice(0,10)?"Today":c.getDate()+1===t.getDate()?"Tomorow":t.toString().slice(0,10)},iconRender:function(e){var t={sn:"https://www.metaweather.com/static/img/weather/sn.svg",sl:"https://www.metaweather.com/static/img/weather/sl.svg",h:"https://www.metaweather.com/static/img/weather/h.svg",t:"https://www.metaweather.com/static/img/weather/t.svg",hr:"https://www.metaweather.com/static/img/weather/hr.svg",lr:"https://www.metaweather.com/static/img/weather/lr.svg",s:"https://www.metaweather.com/static/img/weather/s.svg",hc:"https://www.metaweather.com/static/img/weather/hc.svg",lc:"https://www.metaweather.com/static/img/weather/lc.svg",c:"https://www.metaweather.com/static/img/weather/c.svg"};if(t.hasOwnProperty(e))return t[e]}})]}),Object(b.jsxs)("aside",{children:[Object(b.jsx)("h2",{children:"Sources"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://www.bbc.co.uk/weather/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://img2.gratispng.com/20180629/gg/kisspng-computer-icons-logo-of-the-bbc-bbc-world-news-uc-browser-5b35c1518b81c0.0586131015302495535714.jpg",alt:"bbc"})," BBC"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://forecast.io/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://img.utdstc.com/icon/c15/d52/c15d5292b6a52850c2bcb455eb882187629553e4113f2685c322e144ad9aa96c:200",alt:"forecast.io"})," Forecast.io"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://www.hamweather.com/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://www.internetmatters.org/wp-content/uploads/2019/04/BBC_logo.png",alt:"hamweather"})," HAMweather"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://www.metoffice.gov.uk/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGvrKSNxua0fsy8kMCuoHEvub8fY3X3sgw&usqp=CAU",alt:"metoffice"})," Met Office"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://openweathermap.org/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg",alt:"openweather"})," OpenWeatherMap"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.wunderground.com/?apiref=fc30dc3cd224e19b",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"https://www.pinclipart.com/picdir/middle/495-4958488_the-weather-channel-logo-png-wunderground-weather-clipart.png",alt:"weatheruserground"})," Weather Underground"]})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"http://www.worldweatheronline.com/",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("img",{src:"http://www.chainlinkecosystem.com/wp-content/uploads/2021/02/worldweatheronline.png",alt:"worldweatheronline"})," World Weather Online"]})})})]})]}),Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"\xa9 Weather,Inc. 2021. we love weather"})})]})};var g=function(){var e,t=Object(i.useState)({applicable_date:"",weather_state_name:"",weather_state_abbr:"",wind_speed:"",wind_direction:"",min_temp:"",max_temp:"",time:"",air_pressure:"",humidity:"",visibility:"",predictability:"",sun_rise:"",sun_set:"",week:[]}),c=Object(w.a)(t,2),s=c[0],a=c[1],r=Object(i.useState)({id:""}),l=Object(w.a)(r,2),h=l[0],j=l[1];function p(e){var t=new Date(e),c=new Date;return c.toString().slice(0,10)===t.toString().slice(0,10)?"Today":c.getDate()+1===t.getDate()?"Tomorow":t.toString().slice(0,10)}function O(e){var t={sn:"https://www.metaweather.com/static/img/weather/sn.svg",sl:"https://www.metaweather.com/static/img/weather/sl.svg",h:"https://www.metaweather.com/static/img/weather/h.svg",t:"https://www.metaweather.com/static/img/weather/t.svg",hr:"https://www.metaweather.com/static/img/weather/hr.svg",lr:"https://www.metaweather.com/static/img/weather/lr.svg",s:"https://www.metaweather.com/static/img/weather/s.svg",hc:"https://www.metaweather.com/static/img/weather/hc.svg",lc:"https://www.metaweather.com/static/img/weather/lc.svg",c:"https://www.metaweather.com/static/img/weather/c.svg"};if(t.hasOwnProperty(e))return t[e]}return Object(i.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("https://www.metaweather.com/api/location/".concat(h.id,"/"));case 3:t=e.sent,c=JSON.parse(JSON.stringify(t.data)),a({week:c.consolidated_weather,title:c.title,sun_rise:c.sun_rise,sun_set:c.sun_rise,time:c.time}),console.log(c.time),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h.id]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"title",children:"Info Weather"}),Object(b.jsx)(n.b,{to:"/oneday",children:Object(b.jsx)("img",{className:"seta",src:"https://prints.ultracoloringpages.com/e5584bc02039df88f778a97c6f9ddf15.png",alt:"sign"})}),Object(b.jsx)("form",{type:"select",children:Object(b.jsxs)("select",{value:h.id,onChange:function(e){j({id:e.target.value})},children:[Object(b.jsx)("option",{selected:"selected",children:"Select a Country"}),Object(b.jsx)("option",{value:"2459115",children:"New York"}),Object(b.jsx)("option",{value:"2442047",children:"Los Angeles"}),Object(b.jsx)("option",{value:"610264",children:"Marseille"}),Object(b.jsx)("option",{value:"753692",children:"Barcelona "}),Object(b.jsx)("option",{value:"721943",children:"Rome "})]})}),""===s.time?null:Object(b.jsxs)("div",{className:"sunTime",children:[(e=s.time,e.toString().slice(11,13)<7?Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Time "})," ",s.time.toString().slice(11,16),"a.m. "]}):Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Time"})," ",s.time.toString().slice(11,16),"p.m. "]})),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Sunrise "}),s.sun_rise.toString().slice(11,16),"a.m. "]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Sunset "}),s.sun_set.toString().slice(11,16),"p.m. "]})]}),Object(b.jsx)("p",{class:"city",children:s.title}),s.week.map((function(e){return Object(b.jsx)(m,{applicable_date:e.applicable_date,weather_state_abbr:e.weather_state_abbr,weather_state_name:e.weather_state_name,max_temp:e.max_temp,min_temp:e.min_temp,wind_speed:e.wind_speed,humidity:e.humidity,visibility:e.visibility,air_pressure:e.air_pressure,location_type:e.location_type,predictability:e.predictability,date:p,iconRender:O})})),Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"\xa9 Weather,Inc. 2021. we love weather"})})]})};var x=function(){return Object(b.jsx)(n.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/oneday",element:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{exact:!0,path:"/",element:Object(b.jsx)(g,{})})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),s(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),_()}},[[50,1,2]]]);
//# sourceMappingURL=main.8b11bd24.chunk.js.map