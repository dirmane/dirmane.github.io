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
})();

// load common css and js

(function () {
  // <link rel="stylesheet" href="../../css/normalize.css">

  [
    "/css/normalize.css",
    "/css/main.css",
    "//fonts.googleapis.com/css?family=Open+Sans:300,400",
  ].forEach(function (u) {
    // https://stackoverflow.com/a/524721
    var head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("link");

    // style.type = 'text/css';

    style.setAttribute("rel", "stylesheet");

    style.setAttribute("href", u);

    head.appendChild(style);
  });

  log.blue("DOMLoaded", "Styles loaded");
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
    isNodeList: (value) => {
      return Object.prototype.toString.call(value).slice(8, -1) === "NodeList";
    },
    prepend: function (parentNode, newNode) {
      parentNode.insertBefore(newNode, parentNode.firstChild);
      return this;
    },
    children: (node) => {
      try {
        return Array.prototype.slice.call(node.childNodes);
      } catch (e) {
        throw new Error("ModdingTool error: children(): " + String(e));
      }
    },
  };
})();

window.moddingTool = moddingTool;

log.green("defined", "window.moddingTool");

// editing head
(function () {
  var el = document.createElement("a");

  el.innerHTML = '<link rel="icon" type="image/x-icon" href="/favicon.png"> ';

  Array.prototype.slice.call(el.children).forEach((node) => {
    moddingTool.append(document.head, node);
  });
})();
log.blue("DOMLoaded", "Expanded document.head");

//sorting data-to-sort elements
(function () {
  window.sort_data = () => {
    Array.prototype.slice
      .call(document.querySelectorAll("[data-to-sort]"))
      .forEach((parent) => {
        var children = moddingTool.children(parent);

        const tmp = [];

        children.forEach((child) => {
          var text = (
            child.tagName
              ? child.innerText.toLocaleLowerCase()
              : String(child.textContent)
          ).trim();

          text &&
            tmp.push({
              tagName: child.tagName,
              text: text,
              node: child,
            });
        });

        tmp
          .sort(function (a, b) {
            if (a.text === b.text) {
              return 0;
            }
            return a.text > b.text ? 1 : -1;
          })
          .map(function (n) {
            moddingTool.append(parent, n.node);
          });
      });
    log.blue("Loaded", "Sorting [data-to-sort]");
  };
})();

(async function () {
  async function loadJs(name, url, test) {
    return new Promise((resolve, reject) => {
      if (typeof test !== "function") {
        throw new Error("loadJs error: test should be a function for " + name);
      }

      if (typeof url !== "string") {
        throw new Error("loadJs error: url should be a string for " + name);
      }

      // https://stackoverflow.com/a/524721
      var head = document.head || document.getElementsByTagName("head")[0],
        script = document.createElement("script");

      var handler = setInterval(function () {
        if (test()) {
          clearInterval(handler);

          log.yellow("loadJs", `${name} loaded`);

          resolve();
        }
      }, 100);

      script.setAttribute("src", url);

      head.appendChild(script);
    });
  }

  await loadJs("ace", "lib/ace-builds-1.5.0/src-min-noconflict/ace.js", () => {
    try {
      return typeof window.ace.edit === "function";
    } catch (e) {}
    return false;
  });

  await window.doace();

  await window.sort_data();
})();

(function () {
  document.querySelector("body > header") ||
    (function () {
      var body = document.body;

      var header = document.createElement("header");

      header.innerHTML = `
           <svg height="32" aria-hidden="true" viewBox="0 0 19 19" margin-right="10px" width="32" data-view-component="true" class="octicon">
           <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
           </svg>
           <a href="/index.html">dirmane.github.io</a>
           `;
      moddingTool.prepend(body, header);

      log.blue("DOMLoaded", "Header loading");
    })();
})();

(function () {
  window.doace = () => {
    Array.prototype.slice
      .call(document.querySelectorAll("[dlang]"))
      .forEach((el) => {
        const editor = ace.edit(el);

        editor.setTheme("ace/theme/nord_dark");

        editor.setOptions({
          maxLines: editor.session.getLength(),
        });

        editor.getSession().setMode("ace/mode/" + el.getAttribute("dlang"));

        log(el.getAttribute("dlang"));
        log("ace/mode" + el.getAttribute("dlang"));
      });
  };
})();
