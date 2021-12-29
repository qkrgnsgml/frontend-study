var tv = new Object();
tv.color="white";
tv.info = function(){
    document.write("색"+this.color,"<br>");
}

var car = {
    color : "black",
    info2: function(){
        document.write("색"+this.color,"<br>");
    }
};

document.write("<h1>tv호출</h1>");
tv.info();
document.write("car호출");
car.info2();