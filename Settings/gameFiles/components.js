HYPERGAP.presets.push([
    {
        name: "menu",
        events: [
            {
                name: "#setup", code: function (event) {
                    this.engine.getEngineVar("#DOM").innerHTML = "Hello World form the menu";
                }
            }
        ]
    }]);