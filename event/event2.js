var a = _.extend({}, Backbone.Events);
var b = _.extend({}, Backbone.Events);

//_.extend(ourObject, Backbone.Events);

// add listeners to A for events on B and C
a.listenTo(b, 'showContent', function(event)
					{ 
						console.log("show content");
					});


// trigger an event
b.trigger('showContent');

// stop listening
a.stopListening();

// A does not receive these events
b.trigger('showContent');