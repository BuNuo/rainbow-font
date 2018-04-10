var f = [
'arial','verdana','monospace',
'consolas','impact','helveltica'
];

var c = [
'1ABC9C','3498DB','34495E','E67E22',
'E74C3C','2ECC71','E74C3C','95A5A6','D35400'
];
$("demo1 h1").lettering();
$("demo1 h1").each(function(index,item){
	$(this).children("span").each(function(ind, itm){
	   var sh = c[Math.floor(Math.random() * c.length)]
	   $(this).css("color", "#" + sh);

	   var r = f[Math.floor(Math.random() * f.length)]
	   $(this).css("font-family", r);
	   	
	   $(this).css("text-shadow", '0px 1px 0px #'+sh+',0px 2px 0px #'+sh+',0px 3px 0px #'+sh+',0px 4px 0px #'+sh+', 0px 5px 0px  #'+sh+',0px 6px 0px #'+sh+', 0px 7px 0px #'+sh+',0px 8px 7px #'+sh);
	});
});

  