/*
 * File: app/store/Contacts.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtMVC.store.Contacts', {
    extend: 'Ext.data.Store',

    requires: [
        'ExtMVC.model.Contact'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'contactsStore',
            model: 'ExtMVC.model.Contact',
            pageSize: 35,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'http://192.168.0.14/blog/sencha-cors-comp01/extjs4-crud-mvc/php/criaContato.php',
                    read: 'http://192.168.0.14/blog/sencha-cors-comp01/extjs4-crud-mvc/php/listaContatos.php',
                    update: 'http://192.168.0.14/blog/sencha-cors-comp01/extjs4-crud-mvc/php/atualizaContato.php',
                    destroy: 'http://192.168.0.14/blog/sencha-cors-comp01/extjs4-crud-mvc/php/deletaContato.php'
                },
                reader: {
                    type: 'json',
                    root: 'contacts'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'contacts'
                }
            }
        }, cfg)]);
    }
});