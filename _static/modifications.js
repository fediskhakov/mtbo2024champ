document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a.external').forEach(function(link) {
      link.setAttribute('target', '_blank');
  });
});