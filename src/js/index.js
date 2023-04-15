import './_components';
window.addEventListener ('pageshow', function (event) {
    if (event.persisted) {
      console.log ('Эта страница восстановлена ​​из BFcache.');
    } else {
      console.log ('Эта страница загрузилась по запросу.');
    }
  });