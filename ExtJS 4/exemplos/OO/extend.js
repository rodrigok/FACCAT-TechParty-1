Ext.onReady(function(){
	
	Ext.define('MyApp.abstract.BasicWindow', {
		extend: 'Ext.window.Window',
		alias : 'widget.basicwindow',
		
		height: 200,
		width : 400,
		
		onShow: function(){
			this.callParent(arguments);
			this.setTitle('Hello');
		}
	});
	
	var win = Ext.create('MyApp.abstract.BasicWindow', {
		html: 'Extend'
	});

	win.show();
	
});