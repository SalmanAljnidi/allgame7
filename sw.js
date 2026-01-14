self.addEventListener('fetch', function(event) {
  // هذا الكود البسيط يسمح للصفحة بالعمل وتخزين الملفات الأساسية
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
