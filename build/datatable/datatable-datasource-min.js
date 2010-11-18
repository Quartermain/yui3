YUI.add("datatable-datasource",function(C){var B=C.ClassNameManager.getClassName;function A(){A.superclass.constructor.apply(this,arguments);}C.mix(A,{NS:"datasource",NAME:"dataTableDataSource",ATTRS:{datasource:{setter:"_setDataSource"},initialRequest:{setter:"_setInitialRequest"}}});C.extend(A,C.Plugin.Base,{_setDataSource:function(E){var D=this.get("host");return E||new C.DataSource.Local(E);},_setInitialRequest:function(D){},initializer:function(D){if(D.initialRequest){this.load();}},load:function(D){D=D||{};D.request=D.request||this.get("initialRequest");D.callback=D.callback||{success:C.bind(this.onDataReturnInitializeTable,this),failure:C.bind(this.onDataReturnInitializeTable,this),argument:this.get("host").get("state")};var E=(D.datasource||this.get("datasource"));if(E){E.sendRequest(D);}},onDataReturnInitializeTable:function(D){this.get("host").set("recordset",new C.Recordset({records:D.response.results}));}});C.namespace("Plugin").DataTableDataSource=A;},"@VERSION@",{requires:["plugin","datatable-base","datasource-local"]});