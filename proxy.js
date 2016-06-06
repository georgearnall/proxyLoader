document.body.scrollTop = document.documentElement.scrollTop = 0;

var proxyURL = "http://ec2-52-33-121-221.us-west-2.compute.amazonaws.com/browse.php?u=";

var curURL = document.URL;

var redirect = proxyURL + encodeURIComponent(curURL);

var html = document.getElementsByTagName("html")[0];
html.style.backgroundColor = "rgb(162, 175, 190);";
html.style.transition = "all 0.5s linear";
html.style.marginTop = "100vh";

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();
transitionEvent && html.addEventListener(transitionEvent, function() {
  // console.log('Transition complete!  This is the callback, no library needed!');
  html.style.transition = "";
  html.style.marginTop = 0;

  document.getElementsByTagName("link").remove

  document.body.innerHTML = "<div style='border: 15px solid rgb(229, 202, 218);background: rgb(162, 175, 190); color: black; text-align: center;padding-top: 200px; height: 100vh;'><img src='data:image/gif;base64,R0lGODlhyADIAMQfAE9PT+Pj48vLy/z8/PHx8dbW1vj4+M/Pz+rq6t3d3fX19e7u7tLS0uDg4NnZ2efn55mZmVdXV3FxccnJyV9fX7CwsISEhNXV1WhoaLy8vHp6eo+Pj6SkpPf398jIyP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEM0QzIxMURDRkRDMTFFMDg4QjRCNTRBNzc0OTVCOUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEM0QzIxMUVDRkRDMTFFMDg4QjRCNTRBNzc0OTVCOUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQzRDMjExQkNGREMxMUUwODhCNEI1NEE3NzQ5NUI5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQzRDMjExQ0NGREMxMUUwODhCNEI1NEE3NzQ5NUI5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0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' alt='' /></div>";
  document.body.style.backgroundColor = "rgb(162, 175, 190);";

    window.location.replace(redirect);
  
});
