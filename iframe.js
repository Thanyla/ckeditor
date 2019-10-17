function resizeFrames() 
{
    var x;
    var y;
    //--- all except Explorer ---
    if(self.innerHeight)
    {
            x = self.innerWidth;
            y = self.innerHeight;
    }

          //--- Explorer 6 Strict Mode ---
    else if(document.documentElement && document.documentElement.clientHeight)
    {
            x = document.documentElement.clientWidth;
            y = document.documentElement.clientHeight;
    }

    //--- other Explorers ---
    else if(document.body)
    {
            x = document.body.clientWidth;
            y = document.body.clientHeight;
    }
    
    var	obj = document.getElementById("principalIFrame");
    obj.style.width = x;
    obj.style.height=Math.max(0, y-obj.offsetTop+1);
}