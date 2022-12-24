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

window.log = log;

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
    replace: function (oldNode, newNode) {
      oldNode.parentNode.replaceChild(newNode, oldNode);
    },
    empty: function (node) {
      node.innerHTML = "";
      return this;
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

  await window.ft();
})();

(function () {
  document.querySelector("body > header") ||
    (function () {
      var body = document.body;

      var header = document.createElement("header");

      header.innerHTML = `
            <a class="HeaderLink" href='https://github.com/dirmane'>
           <img class="HeaderImG" width="25" height="25" src = "../github-mark-white.svg" alt="Profile" />
           </a>
           <a href="/index.html">dirmane.github.io</a>
           <a onclick="phoneMenuCH()" href='#' class="menucodion">
           <img width="25" height="25"  src = "../menu.svg" class="menucodion" alt="Menu"/>
           </a>
           <a href='https://github.dev/dirmane/dirmane.github.io/' class="vscodion">
           <img width="25" height="25" class='vscodion' src = "../vscode-alt.svg" class="vscodion" alt="Edit"/>
           </a>
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
      });
  };
})();

(function () {
  window.ft = function () {
    if (0 == 0) {
      var ft = document.querySelector("div.cards.toc");

      if (!ft) {
        ft = document.createElement("div");

        ft.classList.add("cards");

        ft.classList.add("ft");
      }

      // Table of content
      (function () {
        var head = ft.querySelector("h1");

        if (!head) {
          head = document.createElement("h1");

          moddingTool.append(ft, head);
        }

        if (!ft.innerText) {
          head.innerText =
            document.querySelector("#title").textContent || "Fast Travel";
        }
      })();

      (function () {
        var ul = ft.querySelector("ul");

        var found = true;

        if (!ul) {
          found = false;

          ul = document.createElement("ul");
        }

        Array.prototype.slice
          .call(document.querySelector(".article").querySelectorAll("h2[id]"))
          .forEach(function (el) {
            var a = document.createElement("a");

            a.setAttribute("href", "#" + el.getAttribute("id"));

            a.innerText = el.innerText;

            var li = document.createElement("li");

            moddingTool.append(li, a);

            moddingTool.append(ul, li);
          });

        if (!found) {
          moddingTool.append(ft, ul);
        }
      })();

      log.blue(
        "TOC",
        "[toc] found",
        "[triggered in domcontentloaded.js, delayed async due to DOMContentLoaded and window.async.permalink.then]"
      );
    } else {
      log.blue(
        "TOC",
        "[toc] not found",
        "[triggered in domcontentloaded.js, delayed async due to window.async.permalink.then]"
      );
    }
  };

  log.green("defined", "window.toc");
})();
