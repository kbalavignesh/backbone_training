    var AppRouter = Backbone.Router.extend({
        routes: {
            "student/:id": "getStudent",
            "*actions": "defaultRoute"
        }
    });
    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:defaultRoute', function(actions) {
        console.log(actions);
    })
    
    app_router.on('route:getStudent', function(stuId) {
        console.log("student id "+stuId);
    })

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
