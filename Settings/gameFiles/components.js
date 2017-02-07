CLOCKWORKRT.components.push([
    {
        name: "menu",
        events: [
            {
                name: "#setup", code: function (event) {
                    var that = this;
                    createButton("Back", "back");
                    createButton("Sideload app", "install");
                    createButton("Reset Clockwork and erase all data", "reset");
                    
                    function createButton(name, event) {
                        var button = document.createElement('div');
                        button.innerHTML = name;
                        button.style.display="block";
                        button.style.width="60%";
                        button.style.backgroundColor="#555";
                        button.style.textAlign="center";
                        button.style.margin="10%";
                        button.style.padding="10%";
                        button.addEventListener('click', function () {
                            that.do(event);
                        })
                        that.engine.getEngineVar("#DOM").appendChild(button);
                    }
                    that.engine.getEngineVar("#DOM").style.textAlign="center";
                    that.engine.getEngineVar("#DOM").style.overflowY="auto";
                }
            },
            {
                name: "back", code: function (event) {
                    CLOCKWORKRT.API.loadMenu();
                }
            },
            {
                name: "install", code: function (event) {
                    CLOCKWORKRT.apps.installAppFromLocalFile(function () { 
                        CLOCKWORKRT.API.loadMenu();
                    }); 
                }
            },
            {
                name: "reset", code: function (event) {
                    CLOCKWORKRT.apps.reset();
                }
            }
        ]
    }]);