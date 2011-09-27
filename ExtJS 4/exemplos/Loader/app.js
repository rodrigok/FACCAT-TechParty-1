Ext.Loader.setPath('MyApp', 'src');

Ext.Loader.setConfig({
	enabled: true
});

Ext.onReady(function(){
	var win = Ext.create('MyApp.abstract.BasicWindow', {
		html: 'Extend'
	});
	
	win.show();
});