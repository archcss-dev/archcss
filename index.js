document.addEventListener('DOMContentLoaded', function () {
   // css
   var link = document.createElement('link');
   link.rel = 'stylesheet';
   link.type = 'text/css';
   link.href = 'https://cdn.jsdelivr.net/npm/archcss/ui/style.css';
   document.head.appendChild(link);

   // js
   var script = document.createElement('script');
   script.src = 'https://cdn.jsdelivr.net/npm/archcss/js/plugin.js';
   document.body.appendChild(script);

});

console.log("framework: archcss v3.0.0-beta.1\n\ngit\: https://github.com/archcss-dev/archcss.git")