CLOCKWORKRT.components.register([
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
                        button.style.color="white";
                        button.style.margin="20px 10% 20px 10%";
                        button.style.padding="20px 10% 20px 10%";
                        button.addEventListener('click', function () {
                            that.do[event]();
                        })
                        document.body.appendChild(button);
                    }
                    document.body.style.textAlign="center";
                    document.body.style.overflowY="auto";
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