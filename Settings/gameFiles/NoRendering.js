var NoRendering = (function () {

    //Here is where you should put all your rendering code, which will be private

    //And these are the public functions that the engine will use to talk to your library
    //You can leave the ones that aren't relevant for your implementation empty, and even send a warning via the debug handler
    return {
        setUp: function (canvas, nfps) {
            //This function receives a reference to a canvaselement and the number of fps requested
            document.body.removeChild(canvas); //We don't need no stinking default canvas!
        },
        pauseAll: function () {
            //This function prevents the animation from updating (e.g doesn't advance to the next frame on each animation)
        },
        restart: function () {
            //This function stars the 'animation logic' again, after pauseAll is called
        },
        setCamera: function (x, y, z) {
            //This function sets the camera position
        },
        getCamera: function () {
            //This function gets the camera position
        },
        moveCameraX: function (x) {
            //This function moves the camera the specified distance in the x axis
        },
        moveCameraY: function (y) {
            //This function moves the camera the specified distance in the y axis
        },
        moveCameraZ: function (z) {
            //This function moves the camera the specified distance in the z axis
        },
        loadSpritesheetJSONObject: function (newspritesheets) {
            //This function loads a list of spritesheets from an array of JSON objects
        },
        addObject: function (spritesheet, state, x, y, z, isstatic) {
            //This function creates an object rendered by the given spritesheet, at the given state, at the given positions and which might or not have an static position relative to the camera
            //This function returns the object id
        },
        deleteObject: function (id) {
            //This function deletes the object with the given id
        },
        clear: function () {
            //This function removes all the objects
        },
        pause: function (id) {
            //This function prevents the animation of an specific object from updating
        },
        unpause: function (id) {
            //This function restarts the animation of an specific object
        },
        setX: function (id, x) {
            //This function sets the x coordinate of an object
        },
        setY: function (id, y) {
            //This function sets the y coordinate of an object
        },
        setZ: function (id, z) {
            //This function sets the z coordinate of an object
        },
        setParameter: function (id, key, value) {
            //This function sets a parameter of an object
        },
        setState: function (id, state) {
            //This function sets the state of an object
        },
        setSpritesheet: function (id, s) {
            //This function sets the spritesheet of an object
        },
        sendCommand: function (command, commandArgs) {
            //This function sends a command to your library, you can use this an extension point to provide additional functionality
        },
        setObjectTimer: function (id, t) {
            //Sets the internal time of an object
        },
        getObjectTimer: function (id) {
            //Gets the internal time of an object
        },
        setEndedCallback: function (id, callback) {
            //Sets a callback that will activate when the current animation of an object stops
        },
        setRenderMode: function (mode) {
            //Sets a render mode, a function that will draw the buffer into the actual canvas
            //It can be used for scaling and applying effects
        },
        setBufferSize: function (w, h) {
            //Sets the size of the internal buffer frame
        },
        getContext: function () {
            //Returns the drawing context of the canvas
        },
        chainWith: function (renderingLibrary) {
            //Chains to an instance of another rendering library, used in 'proxy' libraries (for recording, networking, perspective...)
        },
        getSpriteBox: function (spritesheet, state) {
            //Gets the bounding box of an spritesheet (the one that encompasses all states, or just for one state if it is specified)
        },
        debug: function (handler) {
            //Turns the debug mode ON and sets a handler that will be used to log all the errors that happen.
            //The handler will be called like this: 'handler("Something happened");' to display warnings and errors
        },
        setWorkingFolder: function (folder) {
            //Sets the path from which assets should be loaded
        },
        getWorkingFolder: function () {
            //Returns the working folder
        }
    };
});

CLOCKWORKRT.rendering.register("NoRendering", NoRendering);
CLOCKWORKRT.rendering.setPipeline(["NoRendering"]);