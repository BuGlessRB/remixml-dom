/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;
  const D = document;

  var g =
  { "abstract2dom": 
      function /** !Node */(/** !Array */ tpl, /** !Node= */ node)
      { var /** !Node */ newnodes = abstract2dom(tpl);
        if (node)
          node.appendChild(newnodes), newnodes = node;
        return newnodes;
      }
  };

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

  function /** !Node */ newel(/** string */ n)
  { return D.createElement(n);
  }

  const /** !Node */ txta = newel("textarea");

  function /** !Node */ abstract2dom(/** !Array */ vdom)
  { var /** !Node */ parent;
    var /** string|number */ name = /** @type{Object} */(vdom)[""];
    switch (name)
    { case "!":
        return D.createComment(vdom[0]);
      case 1:
        parent = D.createDocumentFragment();
        break;
      default:
        parent = newel(/** @type{string} */(name));
        for (name of O.keys(vdom).splice(vdom.length))
          switch (name[0])
          { default:
              let /** string */ val = /** @type{Object} */(vdom)[name];
              if (val != null && typeof val !== "object")
                parent.setAttribute(name, val);
            case "_":case undefined:;
          }
    }
    var /** !Array|string */ child;
    var /** number */ i = 0;
    while ((child = vdom[i++]) !== undefined)
      parent.appendChild(child[""] ? abstract2dom(child)
       : child.indexOf("&") < 0 ? D.createTextNode(child)
       : (txta.innerHTML = child, txta.firstChild));
    return parent;
  }

  if (typeof define == "function" && define["amd"])
    define("remixml-dom", g);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports), g);
  else
    window["RemixmlDOM"] = g;

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
