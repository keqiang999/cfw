Ext.define('cfw.sys.store.AccountStore',{
	extend:'Ext.data.Store',
	model:'cfw.sys.model.Account',
	proxy:{
		type:'ajax', 
		url : 'sys/accounts_query.action',
		reader:'json'
	}
});