// Compiled using marko@4.13.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/personalBudgetUI$1.0.0/src/components/site-layout/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    asset_var_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/asset-var/renderer")),
    marko_attr = marko_helpers.a,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"fr-FR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\"><link rel=\"stylesheet\" href=\"https://unpkg.com/purecss@1.0.0/build/pure-min.css\" integrity=\"sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w\" crossorigin=\"anonymous\"><title>");

  marko_dynamicTag(input.title, {}, out, __component, "6");

  out.w("</title>");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<header><div class=\"site-container\">");

  asset_var_tag({
      values: [
          require.resolve("./logo.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          " alt=\"logo\" class=\"logo\">");
      }
    }, out, __component, "28");

  out.w("<h3>");

  marko_dynamicTag(input.title, {}, out, __component, "13");

  out.w("</h3></div><div class=\"menu-container\"><div class=\"pure-menu pure-menu-horizontal\"><ul class=\"pure-menu-list\"><li class=\"pure-menu-item\"><a href=\"/\" class=\"pure-menu-link\">home</a></li><li class=\"pure-menu-item\"><a href=\"/hello/routing\" class=\"pure-menu-link\">routes</a></li><li class=\"pure-menu-item\"><a href=\"/layouts\" class=\"pure-menu-link\">layouts</a></li></ul></div></div></header><div class=\"content\">");

  marko_dynamicTag(input.content, {}, out, __component, "24");

  out.w("</div><footer></footer>");

  lasso_body_tag({}, out, __component, "26");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/personalBudgetUI$1.0.0/src/components/site-layout/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "@lasso/marko-taglib/taglib/asset-var/renderer",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
