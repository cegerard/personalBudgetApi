// Compiled using marko@4.13.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/personal-budget-ui$1.0.0/src/components/site-layout/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    asset_var_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/asset-var/renderer")),
    marko_attr = marko_helpers.a,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_dynamicTag = marko_helpers.d,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"fr-FR\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\">");

  asset_var_tag({
      values: [
          require.resolve("../../../node_modules/materialize-css/dist/css/materialize.min.css")
        ],
      renderBody: function renderBody(out, __href) {
        out.w("<link" +
          marko_attr("href", __href.url) +
          " rel=\"stylesheet\">");
      }
    }, out, __component, "38");

  out.w("<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><title>Personal Budget</title>");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav><div class=\"nav-wrapper\"><a href=\"#!\" class=\"brand-logo\">");

  asset_var_tag({
      values: [
          require.resolve("./logo.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          " class=\"logo\">");
      }
    }, out, __component, "39");

  out.w("Personal Budget</a><a href=\"#\" data-target=\"nav-mobile\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a><ul class=\"right hide-on-med-and-down\"><li><a href=\"/\">Home</a></li><li><a href=\"/budgets\">Budgets</a></li><li><a href=\"/expenses\">Expenses</a></li></ul></div></nav><ul class=\"sidenav\" id=\"nav-mobile\"><li><a href=\"/\">Home</a></li><li><a href=\"/budgets\">Budgets</a></li><li><a href=\"/expenses\">Expenses</a></li></ul></header><div class=\"content content\">");

  marko_dynamicTag(input.content, {}, out, __component, "31");

  out.w("</div><footer></footer>");

  lasso_body_tag({}, out, __component, "33");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "34");

  out.w("</body>");

  asset_var_tag({
      values: [
          require.resolve("../../../node_modules/materialize-css/dist/js/materialize.min.js")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<script" +
          marko_attr("src", __src.url) +
          "></script>");
      }
    }, out, __component, "40");

  asset_var_tag({
      values: [
          require.resolve("../../../node_modules/jquery/dist/jquery.slim.min.js")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<script" +
          marko_attr("src", __src.url) +
          "></script>");
      }
    }, out, __component, "41");

  asset_var_tag({
      values: [
          require.resolve("./outerScripts.js")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<script" +
          marko_attr("src", __src.url) +
          "></script>");
      }
    }, out, __component, "42");

  out.w("</html>");
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
    id: "/personal-budget-ui$1.0.0/src/components/site-layout/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/asset-var/renderer",
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
