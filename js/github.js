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
  (function () {
    // https://stackoverflow.com/a/13017382
  
    log.c = function () {
      var a = Array.prototype.slice.call(arguments);
  
      a[a.length - 1] += " ";
  
      a = a.concat(["background: #3B4045; color: white"]);
  
      a[0] = "%c " + a[0];
  
      log.apply(log, a);
    };
  
    function define(color) {
      return function define() {
        var a = Array.prototype.slice.call(arguments);
  
        var l = a.length;
  
        var tmp = "";
  
        var buff = [];
  
        for (var i = 0; i < l; i += 1) {
          if (i === 0) {
            tmp += "%c " + a[i] + " ";
  
            buff.push(color);
          } else {
            buff.push(a[i]);
          }
        }
  
        tmp && buff.unshift(tmp);
  
        log.apply(log, buff);
      };
    }
  
    Object.entries({
      red: "background: #C90000; color: white",
      green: "background: #00B700; color: white",
      blue: "background: #2CA5E0; color: white",
      gray: "background: #3B4045; color: white",
      yellow: "background: #ffe686; color: black",
    }).map(function (entry) {
      log[entry[0]] = define(entry[1]);
    });
  
    /* now use
      log.red('abc')
      log.green('abc')
      log.blue('abc')
      log.gray('abc')
       */
  
    log.green("defined", "log & log[red|green|blue|gray]");
  })();
  
  // load common css and js
  
  (function () {
    // <link rel="stylesheet" href="../../css/normalize.css">
  
    ["/css/normalize.css", "/css/main.css", "//fonts.googleapis.com/css?family=Open+Sans:300,400"].forEach(function (u) {
      // https://stackoverflow.com/a/524721
      var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("link");
  
      // style.type = 'text/css';
  
      style.setAttribute("rel", "stylesheet");
  
      style.setAttribute("href", u);
  
      head.appendChild(style);
    });
  
    log.blue("executed", "adding extra styles");
  })();

  (function () {
    // <link rel="stylesheet" href="../../css/normalize.css">
  
    ["/css/normalize.css", "/css/main.css", "//fonts.googleapis.com/css?family=Open+Sans:300,400"].forEach(function (u) {
      // https://stackoverflow.com/a/524721
      var head = document.head || document.getElementsByTagName("head")[0],
        style = document.createElement("link");
  
      // style.type = 'text/css';
  
      style.setAttribute("rel", "stylesheet");
  
      style.setAttribute("href", u);
  
      head.appendChild(style);
    });
  
    log.blue("executed", "adding extra styles");
  })();
  
  // Manipulationg DOM nodes by some methods
  var moddingTool = (function moddingTool() {
    function isObjectLike(value) {
      // checking if val is an object like
      return value != null && typeof value == "object";
    }
    function isPlainObject(value) {
      // https://stackoverflow.com/a/52453407
        return Object.prototype.toString.call(value).slice(8, -1) === "Object";
    }
    function isNode(value) {
      //read about DOM nodes
      return isObjectLike(value) && isPlainObject(value);
    }
    //parentNode and newNode mannipulation
    return {
      isNode: isNode,
      append: (parentNode, node) => {
        parentNode.appendChild(node);
        return this;
      },
      remove: (node) => {
        node.parentNode.removeChild(node);
      },
      children: (node) => {
        try {
          Object.prototype.toString.call(node.childNodes)
        } catch (e) {
          throw new Error("ModdingTool error: children(): " + String(e))
        }
      }
    }    

  })();