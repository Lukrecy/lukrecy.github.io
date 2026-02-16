self.addEventListener('install', (event) => {
    console.log('Сервис-воркер установлен');
});

self.addEventListener('activate', (event) => {
    console.log('Сервис-воркер активирован');
});
