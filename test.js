var global = false;

var VARIAVLE = (function(val) {
    var alist = [1, 2, 3, 4];
    var blist = ["yeah", "foo", "haa"];
    var ablist = [];
    var pushlist = function(list) {
        for (var i = 0; i < list.length; i++) {
            ablist.push(list[i]);
        }
    }
    pushlist(alist);
    pushlist(blist);
    return {
        getList: function() {
          if(val === true){
          console.log(ablist);
        }else{
          global = "hahahahaha";
        };
        },
        getReverseList:function(){
          ablist.reverse();
          console.log(ablist)
        }
    }
})(global);

VARIAVLE.getList();

var foo = function(){
  console.log("foo");
};
