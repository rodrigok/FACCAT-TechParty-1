Ext.onReady(function(){
	
	win = Ext.create('Ext.window.Window',{
		title : 'Hello',
		height: 200,
		width : 400,
		layout: 'fit',
		items : [{
			xtype: 'grid',
			border: false,
			columns: [
				{header: 'World', dataIndex: 'description'}
			],
			store: Ext.create('Ext.data.JsonStore', {
				fields: [
					{name: 'description'}
				]
			})
		}]
	});
	
	win.down('gridpanel').store.loadData([
		{description:'Rec 1'},
		{description:'Rec 2'}
	])
	
	win.show();
	
});