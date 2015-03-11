function Restaurant()
{
    var myPrivateVar;

    var private_stuff = function()   // Only visible inside Restaurant()
    {
        myPrivateVar = "I can set this here!";
    }

    this.buy_food = function()    // buy_food is visible to all
    {
        private_stuff();
    }
}