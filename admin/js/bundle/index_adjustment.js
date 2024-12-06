(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1144:function(t,e,s){"use strict";s.r(e);var a=s(4),n=s(0),i=s.n(n),r=s(7);s(16);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={metaInfo:{title:"Adjustment"},data:function(){return{isLoading:!0,serverParams:{sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],search:"",totalRows:"",limit:"10",Filter_date:"",Filter_Ref:"",Filter_warehouse:"",warehouses:[],adjustments:[],details:[],adjustment:{}}},computed:l(l({},Object(a.c)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("date"),field:"date",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Reference"),field:"Ref",tdClass:"text-left",thClass:"text-left"},{label:this.$t("warehouse"),field:"warehouse_name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("TotalProducts"),field:"items",type:"decimal",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Adjustment_PDF:function(){var t=new r.default("p","pt");t.autoTable([{title:"Date",dataKey:"date"},{title:"Reference",dataKey:"Ref"},{title:"Warehouse",dataKey:"warehouse_name"},{title:"Total Products",dataKey:"items"}],this.adjustments),t.text("Adjustment List",40,25),t.save("Adjustment_List.pdf")},Adjustment_Excel:function(){i.a.start(),i.a.set(.1),axios.get("adjustments/export/Excel",{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),s=document.createElement("a");s.href=e,s.setAttribute("download","List_Adjustments.xlsx"),document.body.appendChild(s),s.click(),setTimeout((function(){return i.a.done()}),500)})).catch((function(){setTimeout((function(){return i.a.done()}),500)}))},showDetails:function(t){var e=this;i.a.start(),i.a.set(.1),axios.get("adjustments/detail/"+t).then((function(t){e.adjustment=t.data.adjustment,e.details=t.data.details,Fire.$emit("Get_Details_Adjust")})).catch((function(t){Fire.$emit("Get_Details_Adjust")}))},formatNumber:function(t,e){var s=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return s[0];var a=s[1]||"";if(a.length>e)return"".concat(s[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(s[0],".").concat(a)},updateParams:function(t){this.serverParams=Object.assign({},this.serverParams,t)},onPageChange:function(t){var e=t.currentPage;this.serverParams.page!==e&&(this.updateParams({page:e}),this.Get_Adjustments(e))},onPerPageChange:function(t){var e=t.currentPerPage;this.limit!==e&&(this.limit=e,this.updateParams({page:1,perPage:e}),this.Get_Adjustments(1))},selectionChanged:function(t){var e=this,s=t.selectedRows;this.selectedIds=[],s.forEach((function(t,s){e.selectedIds.push(t.id)}))},onSortChange:function(t){var e="";e="warehouse_name"==t[0].field?"warehouse_id":t[0].field,this.updateParams({sort:{type:t[0].type,field:e}}),this.Get_Adjustments(this.serverParams.page)},onSearch:function(t){this.search=t.searchTerm,this.Get_Adjustments(this.serverParams.page)},Reset_Filter:function(){this.search="",this.Filter_date="",this.Filter_Ref="",this.Filter_warehouse="",this.Get_Adjustments(this.serverParams.page)},setToStrings:function(){null===this.Filter_warehouse&&(this.Filter_warehouse="")},Get_Adjustments:function(t){var e=this;i.a.start(),i.a.set(.1),this.setToStrings(),axios.get("adjustments?page="+t+"&Ref="+this.Filter_Ref+"&warehouse_id="+this.Filter_warehouse+"&date="+this.Filter_date+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(t){e.adjustments=t.data.adjustments,e.warehouses=t.data.warehouses,e.totalRows=t.data.totalRows,i.a.done(),e.isLoading=!1})).catch((function(t){i.a.done(),setTimeout((function(){e.isLoading=!1}),500)}))},Remove_Adjustment:function(t){var e=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&(i.a.start(),i.a.set(.1),axios.delete("adjustments/"+t).then((function(){e.$swal(e.$t("Delete.Deleted"),e.$t("Delete.AdjustDeleted"),"success"),Fire.$emit("Delete_Adjustment")})).catch((function(){setTimeout((function(){return i.a.done()}),500),e.$swal(e.$t("Delete.Failed"),e.$t("Delete.Therewassomethingwronge"),"warning")})))}))},delete_by_selected:function(){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&(i.a.start(),i.a.set(.1),axios.post("adjustments/delete/by_selection",{selectedIds:t.selectedIds}).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.AdjustDeleted"),"success"),Fire.$emit("Delete_Adjustment")})).catch((function(){setTimeout((function(){return i.a.done()}),500),t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")})))}))}},created:function(){var t=this;this.Get_Adjustments(1),Fire.$on("Get_Details_Adjust",(function(){setTimeout((function(){return i.a.done()}),500),t.$bvModal.show("showDetails")})),Fire.$on("Delete_Adjustment",(function(){setTimeout((function(){i.a.done(),t.Get_Adjustments(t.serverParams.page)}),500)}))}},u=s(2),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("ListAdjustments"),folder:t.$t("Adjustment")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):s("div",[s("vue-good-table",{attrs:{mode:"remote",columns:t.columns,totalRows:t.totalRows,rows:t.adjustments,"search-options":{enabled:!0,placeholder:t.$t("Search_this_table")},"select-options":{enabled:!0,clearSelectionText:""},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"table-hover tableOne vgt-table"},on:{"on-page-change":t.onPageChange,"on-per-page-change":t.onPerPageChange,"on-sort-change":t.onSortChange,"on-search":t.onSearch,"on-selected-rows-change":t.selectionChanged},scopedSlots:t._u([{key:"table-row",fn:function(e){return["actions"==e.column.field?s("span",[s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"View"},on:{click:function(s){return t.showDetails(e.row.id)}}},[s("i",{staticClass:"i-Eye text-25 text-info"})]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("adjustment_edit")?s("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Edit",to:"/app/adjustments/edit/"+e.row.id}},[s("i",{staticClass:"i-Edit text-25 text-success"})]):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("adjustment_delete")?s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:function(s){return t.Remove_Adjustment(e.row.id)}}},[s("i",{staticClass:"i-Close-Window text-25 text-danger"})]):t._e()],1):t._e()]}}])},[s("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.delete_by_selected()}}},[t._v(t._s(t.$t("Del")))])]),t._v(" "),s("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-info m-1",size:"sm"}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n          "+t._s(t.$t("Filter"))+"\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-success m-1"},on:{click:function(e){return t.Adjustment_PDF()}}},[s("i",{staticClass:"i-File-Copy"}),t._v(" PDF\n        ")]),t._v(" "),s("b-button",{attrs:{size:"sm",variant:"outline-danger m-1"},on:{click:function(e){return t.Adjustment_Excel()}}},[s("i",{staticClass:"i-File-Excel"}),t._v(" EXCEL\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("adjustment_add")?s("router-link",{staticClass:"btn-sm btn btn-primary btn-icon m-1",attrs:{to:"/app/adjustments/store"}},[s("span",{staticClass:"ul-btn__icon"},[s("i",{staticClass:"i-Add"})]),t._v(" "),s("span",{staticClass:"ul-btn__text ml-1"},[t._v(t._s(t.$t("Add")))])]):t._e()],1)])],1),t._v(" "),s("b-sidebar",{attrs:{id:"sidebar-right",title:t.$t("Filter"),"bg-variant":"white",right:"",shadow:""}},[s("div",{staticClass:"px-3 py-2"},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("date")}},[s("b-form-input",{attrs:{type:"date"},model:{value:t.Filter_date,callback:function(e){t.Filter_date=e},expression:"Filter_date"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("Reference")}},[s("b-form-input",{attrs:{label:"Reference",placeholder:t.$t("Reference")},model:{value:t.Filter_Ref,callback:function(e){t.Filter_Ref=e},expression:"Filter_Ref"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"12"}},[s("b-form-group",{attrs:{label:t.$t("warehouse")}},[s("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.Filter_warehouse,callback:function(e){t.Filter_warehouse=e},expression:"Filter_warehouse"}})],1)],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"primary m-1",size:"sm",block:""},on:{click:function(e){return t.Get_Adjustments(t.serverParams.page)}}},[s("i",{staticClass:"i-Filter-2"}),t._v("\n            "+t._s(t.$t("Filter"))+"\n          ")])],1),t._v(" "),s("b-col",{attrs:{md:"6",sm:"12"}},[s("b-button",{attrs:{variant:"danger m-1",size:"sm",block:""},on:{click:function(e){return t.Reset_Filter()}}},[s("i",{staticClass:"i-Power-2"}),t._v("\n            "+t._s(t.$t("Reset"))+"\n          ")])],1)],1)],1)]),t._v(" "),s("b-modal",{attrs:{"ok-only":"",size:"lg",id:"showDetails",title:t.$t("AdjustmentDetail")}},[s("b-row",[s("b-col",{staticClass:"mt-3",attrs:{lg:"5",md:"12",sm:"12"}},[s("table",{staticClass:"table table-hover table-bordered table-sm"},[s("tbody",[s("tr",[s("td",[t._v(t._s(t.$t("date")))]),t._v(" "),s("th",[t._v(t._s(t.adjustment.date))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("Reference")))]),t._v(" "),s("th",[t._v(t._s(t.adjustment.Ref))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.$t("warehouse")))]),t._v(" "),s("th",[t._v(t._s(t.adjustment.warehouse))])])])])]),t._v(" "),s("b-col",{staticClass:"mt-3",attrs:{lg:"7",md:"12",sm:"12"}},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-bordered table-sm"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CodeProduct")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Quantity")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("type")))])])]),t._v(" "),s("tbody",t._l(t.details,(function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.code))]),t._v(" "),s("td",[t._v(t._s(t.formatNumber(e.quantity,2))+" "+t._s(e.unit))]),t._v(" "),"add"==e.type?s("td",[t._v(t._s(t.$t("Addition")))]):"sub"==e.type?s("td",[t._v(t._s(t.$t("Subtraction")))]):t._e()])})),0)])])])],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);