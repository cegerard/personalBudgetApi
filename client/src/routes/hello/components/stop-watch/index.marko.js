// Compiled using marko@4.13.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
    onCreate: function () {
        this.state = {
            running: false,
            elapsedTime: 0
        };
        this.intervalId = null;
    },
    onDestroy: function () {
        if (this.state.running) {
            clearInterval(this.intervalId);
        }
    },
    handleStartClick: function () {
        this.state.running = true;
        this.intervalId = setInterval(() => {
            this.state.elapsedTime += 0.1;
        }, 100);
    },
    handlePauseClick: function () {
        clearInterval(this.intervalId);
        this.state.running = false;
    },
    handleStopClick: function () {
        clearInterval(this.intervalId);
        this.state.running = false;
        this.state.elapsedTime = 0;
    }
},
    marko_componentType = "/personalBudgetUI$1.0.0/src/routes/hello/components/stop-watch/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><p>Elapsed time: " +
    marko_escapeXml(state.elapsedTime.toFixed(1)) +
    "s</p><button type=\"button\"" +
    marko_attr("disabled", state.running === true) +
    marko_attr("data-marko", {
      onclick: __component.d("click", "handleStartClick", false)
    }, false) +
    ">Start</button><button type=\"button\"" +
    marko_attr("disabled", state.running !== true) +
    marko_attr("data-marko", {
      onclick: __component.d("click", "handlePauseClick", false)
    }, false) +
    ">Pause</button><button type=\"button\"" +
    marko_attr("disabled", (state.elapsedTime === 0) && (state.running === false)) +
    marko_attr("data-marko", {
      onclick: __component.d("click", "handleStopClick", false)
    }, false) +
    ">Stop/Clear</button></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/personalBudgetUI$1.0.0/src/routes/hello/components/stop-watch/index.marko",
    component: "./"
  };
