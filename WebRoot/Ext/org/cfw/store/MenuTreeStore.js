Ext.define('cfw.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    model:'cfw.model.TreeNode',
	root: {
        text: '菜单树',
        id: 'root',
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url : 'submenu.action',
        reader: {
            type: 'json',
            root: 'nodes',
            successProperty: 'success'
        }
    }
});