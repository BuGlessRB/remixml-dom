/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(() =>
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
  const W = window;

  var /** TrustedTypePolicy */ policy;

  const /** !Object */ g =
  { "abstract2dom": 
      function /** !Node */(/** !Array */ tpl, /** !Node= */ node)
      { var /** !Node */ newnodes = abstract2dom(tpl);
        if (node)
          node.appendChild(newnodes), newnodes = node;
        return newnodes;
      }
  };

  function /** !Node */ newel(/** string */ n)
  { return D.createElement(n);
  }

  function /** !Node */ newcm(/** string */ n)
  { return D.createComment(n);
  }

  const /** !Node */ txta = newel("textarea");

  function /** !Node */ abstract2dom(/** !Array */ vdom)
  { var /** !Node */ parent;
    var /** string|number */ name = /** @type{Object} */(vdom)[""];
    switch (name)
    { case "!":
        return newcm(vdom[0]);
      case "<":
      case "?":
        return newcm(name + vdom[0]);
      case 1:
        parent = D.createDocumentFragment();
        break;
      default:
        parent = newel(/** @type{string} */(name));
	let /** boolean|null */ policyparam
	 = policy && parent.tagName === "SCRIPT";
        for (name of O.keys(vdom).splice(vdom.length))
          switch (name[0])
          { default:
              let /** string|TrustedScriptURL */ val
	       = /** @type{Object} */(vdom)[name];
              if (val != null)
	      { if (val[""])
		  val = val.join("");
                if (policyparam && name === "src")
		  val = policy.createScriptURL(val);
                parent.setAttribute(name, val);
	      }
            case "_":case undefined:;
          }
    }
    var /** !Array|string|number */ child;
    var /** number */ i = 0;
    while ((child = vdom[i++]) !== undefined)
    { let /** Node */ node;
      if (child[""])
	node = abstract2dom(child);
      else
      { var /** !Array|string */ nextchild;
	child = /** @type {number} */(child) + "";	// Cast to string
	// Concatenate strings first
	while((nextchild = vdom[i]) !== undefined && !nextchild[""])
          i++, child += nextchild;
	node = child.indexOf("&") < 0
	       ? D.createTextNode(child)
               : (txta.innerHTML = policy ? policy.createHTML(child) : child,
	          txta.firstChild);
      }
      parent.appendChild(node);
    }
    return parent;
  }

  const /** string */ rxs = "remixml";

  function /** string */ retit(/** string */ s) { return s; }

  function /** !Object */ factory(/** !Object */ rxml)
  { O.assign(rxml, g);
    var ttypes = W.trustedTypes;
    if (ttypes)
      policy = ttypes.createPolicy(rxs,
        { createHTML: retit, createScriptURL: retit });
    return g;
  }

  if (typeof define == "function" && define["amd"])
    define("remixml-dom", [rxs], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require(rxs)));
  else
    W["RemixmlDOM"] = factory(W["Remixml"]);

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
