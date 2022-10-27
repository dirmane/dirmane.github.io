var log = (() => {
    try {
      return console.log;
    } catch (e) {
      return function () {};
    }
  })();

  (function () {
    let bodyExist;
    try {
      bodyExist = Boolean(document.body);
    } catch (e) {
        throw e;
    }
  
    if (!bodyExist) {
      document.write(
        `<h1 style="color: red; position: fixed; top: 30%; background-color: white;">Can't find document.body - it probably means that /github.js is loaded in &lt;head> instead at the end of &lt;body></h1>`
      );
    }
  })();
    
