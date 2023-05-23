"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[3713],{3713:(se,b,o)=>{o.r(b),o.d(b,{FileManagerModule:()=>_});var s=o(1390),p=o(4859),y=o(7392),h=o(3267),M=o(266),U=o(4466),e=o(4650);class l{canDeactivate(n,t,r,a){let x=a.root;for(;x.firstChild;)x=x.firstChild;return!(a.url.includes("/file-manager")&&!a.url.includes("/details"))||n.closeDrawer().then(()=>!0)}}l.\u0275fac=function(n){return new(n||l)},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"});class v{constructor(){}}v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=e.Xpm({type:v,selectors:[["file-manager"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[s.lC],encapsulation:2,changeDetection:0});var C=o(7579),Z=o(2722),A=o(1135),w=o(8505),q=o(5698),D=o(4004),J=o(3900),F=o(2843),L=o(9646),B=o(529);class c{constructor(n){this._httpClient=n,this._item=new A.X(null),this._items=new A.X(null)}get items$(){return this._items.asObservable()}get item$(){return this._item.asObservable()}getItems(n=null){return this._httpClient.get("api/apps/file-manager",{params:{folderId:n}}).pipe((0,w.b)(t=>{this._items.next(t)}))}getItemById(n){return this._items.pipe((0,q.q)(1),(0,D.U)(t=>{const r=[...t.folders,...t.files].find(a=>a.id===n)||null;return this._item.next(r),r}),(0,J.w)(t=>t?(0,L.of)(t):(0,F._)("Could not found the item with id of "+n+"!")))}}c.\u0275fac=function(n){return new(n||c)(e.LFG(B.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var Y=o(4880),T=o(6895);const O=["matDrawer"];function R(i,n){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.AsE(" ",t.items.folders.length," folders, ",t.items.files.length," files ")}}const k=function(i){return["/apps/file-manager/folders/",i]};function N(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"a",17),e._uU(2),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,k,t.id)),e.xp6(1),e.Oqu(t.name)}}function S(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.name)}}function j(i,n){1&i&&(e.ynx(0),e.TgZ(1,"div",18),e._uU(2,"/"),e.qZA(),e.BQk())}function z(i,n){if(1&i&&(e.ynx(0),e.YNc(1,N,3,4,"ng-container",9),e.YNc(2,S,3,1,"ng-container",9),e.YNc(3,j,3,0,"ng-container",9),e.BQk()),2&i){const t=n.last;e.xp6(1),e.Q6J("ngIf",!t),e.xp6(1),e.Q6J("ngIf",t),e.xp6(1),e.Q6J("ngIf",!t)}}const $=function(){return["/apps/file-manager"]};function G(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",16)(2,"a",17),e._uU(3,"Home "),e.qZA(),e.TgZ(4,"div",18),e._uU(5,"/"),e.qZA(),e.YNc(6,z,4,3,"ng-container",19),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("routerLink",e.DdM(3,$)),e.xp6(4),e.Q6J("ngForOf",t.items.path)("ngForTrackBy",t.trackByFn)}}function X(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",32),e._uU(2),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.contents)}}const I=function(i){return["./details/",i]};function K(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",23)(2,"a",24),e.NdJ("click",function(r){return r.preventDefault()}),e._UZ(3,"mat-icon",25),e.qZA(),e.TgZ(4,"a",26)(5,"div",27)(6,"div",28),e._UZ(7,"mat-icon",29),e.qZA()(),e.TgZ(8,"div",30)(9,"div",31),e._uU(10),e.qZA(),e.YNc(11,X,3,1,"ng-container",9),e.qZA()()(),e.BQk()),2&i){const t=n.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(7,I,t.id)),e.xp6(1),e.Q6J("svgIcon","heroicons_solid:information-circle"),e.xp6(1),e.Q6J("routerLink",e.VKq(9,k,t.id)),e.xp6(3),e.Q6J("svgIcon","heroicons_solid:folder"),e.xp6(2),e.Q6J("matTooltip",t.name),e.xp6(1),e.Oqu(t.name),e.xp6(1),e.Q6J("ngIf",t.contents)}}function H(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div")(2,"div",21),e._uU(3,"Folders"),e.qZA(),e.TgZ(4,"div",22),e.YNc(5,K,12,11,"ng-container",19),e.qZA()(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(5),e.Q6J("ngForOf",t.items.folders)("ngForTrackBy",t.trackByFn)}}function W(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",32),e._uU(2),e.qZA(),e.BQk()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.contents)}}function E(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"a",33)(2,"div",27)(3,"div",28)(4,"div",34),e._UZ(5,"mat-icon",29),e.TgZ(6,"div",35),e._uU(7),e.qZA()()()(),e.TgZ(8,"div",30)(9,"div",31),e._uU(10),e.qZA(),e.YNc(11,W,3,1,"ng-container",9),e.qZA()(),e.BQk()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(16,I,t.id)),e.xp6(4),e.Q6J("svgIcon","heroicons_solid:document"),e.xp6(1),e.ekj("bg-red-600","PDF"===t.type)("bg-blue-600","DOC"===t.type)("bg-green-600","XLS"===t.type)("bg-gray-600","TXT"===t.type)("bg-amber-600","JPG"===t.type),e.xp6(1),e.hij(" ",t.type.toUpperCase()," "),e.xp6(2),e.Q6J("matTooltip",t.name),e.xp6(1),e.Oqu(t.name),e.xp6(1),e.Q6J("ngIf",t.contents)}}function P(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div")(2,"div",21),e._uU(3,"Files"),e.qZA(),e.TgZ(4,"div",22),e.YNc(5,E,12,18,"ng-container",19),e.qZA()(),e.BQk()),2&i){const t=e.oxw(2);e.xp6(5),e.Q6J("ngForOf",t.items.files)("ngForTrackBy",t.trackByFn)}}function V(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",20),e.YNc(2,H,6,2,"ng-container",9),e.YNc(3,P,6,2,"ng-container",9),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.items.folders.length>0),e.xp6(1),e.Q6J("ngIf",t.items.files.length>0)}}function ee(i,n){1&i&&(e.TgZ(0,"div",36),e._UZ(1,"mat-icon",37),e.TgZ(2,"div",38),e._uU(3,"There are no items!"),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:folder-open"))}class g{constructor(n,t,r,a,x){this._activatedRoute=n,this._changeDetectorRef=t,this._router=r,this._fileManagerService=a,this._fuseMediaWatcherService=x,this._unsubscribeAll=new C.x}ngOnInit(){this._fileManagerService.items$.pipe((0,Z.R)(this._unsubscribeAll)).subscribe(n=>{this.items=n,this._changeDetectorRef.markForCheck()}),this._fileManagerService.item$.pipe((0,Z.R)(this._unsubscribeAll)).subscribe(n=>{this.selectedItem=n,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe((0,Z.R)(this._unsubscribeAll)).subscribe(n=>{this.drawerMode=n.matches?"side":"over",this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}trackByFn(n,t){return t.id||n}}function te(i,n){1&i&&(e.ynx(0),e._UZ(1,"mat-icon",23),e.BQk()),2&i&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:folder"))}function ne(i,n){1&i&&(e.ynx(0),e._UZ(1,"mat-icon",23),e.BQk()),2&i&&(e.xp6(1),e.Q6J("svgIcon","heroicons_outline:document"))}function ie(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div",12)(2,"div",13),e._uU(3,"Contents"),e.qZA(),e.TgZ(4,"div"),e._uU(5),e.qZA()(),e.BQk()),2&i){const t=e.oxw();e.xp6(5),e.Oqu(t.item.contents)}}function oe(i,n){if(1&i&&(e.ynx(0),e.TgZ(1,"div"),e._uU(2),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.item.description)}}function re(i,n){1&i&&(e.ynx(0),e.TgZ(1,"div",24),e._uU(2,"Click here to add a description"),e.qZA(),e.BQk())}g.\u0275fac=function(n){return new(n||g)(e.Y36(s.gz),e.Y36(e.sBO),e.Y36(s.F0),e.Y36(c),e.Y36(Y.T))},g.\u0275cmp=e.Xpm({type:g,selectors:[["file-manager-list"]],viewQuery:function(n,t){if(1&n&&e.Gf(O,7),2&n){let r;e.iGM(r=e.CRH())&&(t.matDrawer=r.first)}},decls:22,vars:10,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-100","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","p-6","sm:py-12","md:px-8","border-b","bg-card","dark:bg-transparent"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-0.5","font-medium","text-secondary"],[4,"ngIf"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"flex","items-center","space-x-2"],[1,"text-primary","cursor-pointer",3,"routerLink"],[1,""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-6","md:p-8","space-y-8"],[1,"font-medium"],[1,"flex","flex-wrap","-m-2","mt-2"],[1,"relative","w-40","h-40","m-2","p-4","shadow","rounded-2xl","bg-card"],["mat-icon-button","",1,"absolute","z-20","top-1.5","right-1.5","w-8","h-8","min-h-8",3,"routerLink","click"],[1,"icon-size-5",3,"svgIcon"],[1,"z-10","absolute","inset-0","flex","flex-col","p-4","cursor-pointer",3,"routerLink"],[1,"aspect-[9/6]"],[1,"flex","items-center","justify-center","h-full"],[1,"icon-size-14","text-hint","opacity-50",3,"svgIcon"],[1,"flex","flex-col","flex-auto","justify-center","text-center","text-sm","font-medium"],[1,"truncate",3,"matTooltip"],[1,"text-secondary","truncate"],[1,"flex","flex-col","w-40","h-40","m-2","p-4","shadow","rounded-2xl","cursor-pointer","bg-card",3,"routerLink"],[1,"relative"],[1,"absolute","left-0","bottom-0","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"mat-drawer-container",1),e.NdJ("backdropClick",function(){return t.onBackdropClicked()}),e.TgZ(2,"mat-drawer",2,3),e._UZ(4,"router-outlet"),e.qZA(),e.TgZ(5,"mat-drawer-content",4)(6,"div",5)(7,"div",6)(8,"div")(9,"div",7),e._uU(10,"File Manager"),e.qZA(),e.TgZ(11,"div",8),e.YNc(12,R,2,2,"ng-container",9),e.YNc(13,G,7,4,"ng-container",9),e.qZA()(),e.TgZ(14,"div",10)(15,"button",11),e._UZ(16,"mat-icon",12),e.TgZ(17,"span",13),e._uU(18,"Upload file"),e.qZA()()()(),e.YNc(19,V,4,2,"ng-container",14),e.YNc(20,ee,4,1,"ng-template",null,15,e.W1O),e.qZA()()()()),2&n){const r=e.MAs(21);e.xp6(2),e.Q6J("mode",t.drawerMode)("opened",!1)("position","end")("disableClose",!0),e.xp6(10),e.Q6J("ngIf",!t.items.path.length),e.xp6(1),e.Q6J("ngIf",t.items.path.length),e.xp6(2),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:plus"),e.xp6(3),e.Q6J("ngIf",t.items&&(t.items.folders.length>0||t.items.files.length>0))("ngIfElse",r)}},dependencies:[s.lC,s.rH,p.lW,p.o6,y.Hw,h.jA,h.kh,h.LW,M.gM,T.sg,T.O5],encapsulation:2,changeDetection:0});const ae=function(){return["../../"]};class d{constructor(n,t,r){this._changeDetectorRef=n,this._fileManagerListComponent=t,this._fileManagerService=r,this._unsubscribeAll=new C.x}ngOnInit(){this._fileManagerListComponent.matDrawer.open(),this._fileManagerService.item$.pipe((0,Z.R)(this._unsubscribeAll)).subscribe(n=>{this._fileManagerListComponent.matDrawer.open(),this.item=n,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDrawer(){return this._fileManagerListComponent.matDrawer.close()}trackByFn(n,t){return t.id||n}}d.\u0275fac=function(n){return new(n||d)(e.Y36(e.sBO),e.Y36(g),e.Y36(c))},d.\u0275cmp=e.Xpm({type:d,selectors:[["file-manager-details"]],decls:51,vars:28,consts:[[1,"flex","flex-col","flex-auto","p-6","md:p-8"],[1,"flex","items-center","justify-end"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"mt-8","aspect-[9/6]"],[1,"flex","items-center","justify-center","h-full","border","rounded-lg","bg-gray-50","dark:bg-card"],[4,"ngIf"],[1,"flex","flex-col","items-start","mt-8"],[1,"text-xl","font-medium"],[1,"mt-1","px-1.5","rounded","text-sm","font-semibold","leading-5","text-white"],[1,"text-lg","font-medium","mt-8"],[1,"flex","flex-col","mt-4","border-t","border-b","divide-y","font-medium"],[1,"flex","items-center","justify-between","py-3"],[1,"text-secondary"],[1,"flex","items-center","justify-between","mt-8"],[1,"text-lg","font-medium"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"flex","mt-2","border-t"],[1,"py-3"],[1,"grid","grid-cols-2","gap-4","w-full","mt-8"],["mat-flat-button","",1,"flex-auto",3,"color"],["mat-stroked-button","",1,"flex-auto"],[1,"icon-size-24","text-hint",3,"svgIcon"],[1,"italic","text-secondary"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"mat-icon",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",5),e.YNc(6,te,2,1,"ng-container",6),e.YNc(7,ne,2,1,"ng-container",6),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e._uU(10),e.qZA(),e.TgZ(11,"div",9),e._uU(12),e.qZA()(),e.TgZ(13,"div",10),e._uU(14,"Information"),e.qZA(),e.TgZ(15,"div",11)(16,"div",12)(17,"div",13),e._uU(18,"Created By"),e.qZA(),e.TgZ(19,"div"),e._uU(20),e.qZA()(),e.TgZ(21,"div",12)(22,"div",13),e._uU(23,"Created At"),e.qZA(),e.TgZ(24,"div"),e._uU(25),e.qZA()(),e.TgZ(26,"div",12)(27,"div",13),e._uU(28,"Modified At"),e.qZA(),e.TgZ(29,"div"),e._uU(30),e.qZA()(),e.TgZ(31,"div",12)(32,"div",13),e._uU(33,"Size"),e.qZA(),e.TgZ(34,"div"),e._uU(35),e.qZA()(),e.YNc(36,ie,6,1,"ng-container",6),e.qZA(),e.TgZ(37,"div",14)(38,"div",15),e._uU(39,"Description"),e.qZA(),e.TgZ(40,"button",16),e._UZ(41,"mat-icon",17),e.qZA()(),e.TgZ(42,"div",18)(43,"div",19),e.YNc(44,oe,3,1,"ng-container",6),e.YNc(45,re,3,0,"ng-container",6),e.qZA()(),e.TgZ(46,"div",20)(47,"button",21),e._uU(48," Download "),e.qZA(),e.TgZ(49,"button",22),e._uU(50," Delete "),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("routerLink",e.DdM(27,ae)),e.xp6(1),e.Q6J("svgIcon","heroicons_outline:x"),e.xp6(3),e.Q6J("ngIf","folder"===t.item.type),e.xp6(1),e.Q6J("ngIf","folder"!==t.item.type),e.xp6(3),e.Oqu(t.item.name),e.xp6(1),e.ekj("bg-indigo-600","folder"===t.item.type)("bg-red-600","PDF"===t.item.type)("bg-blue-600","DOC"===t.item.type)("bg-green-600","XLS"===t.item.type)("bg-gray-600","TXT"===t.item.type)("bg-amber-600","JPG"===t.item.type),e.xp6(1),e.hij(" ",t.item.type.toUpperCase()," "),e.xp6(8),e.Oqu(t.item.createdBy),e.xp6(5),e.Oqu(t.item.createdAt),e.xp6(5),e.Oqu(t.item.modifiedAt),e.xp6(5),e.Oqu(t.item.size),e.xp6(1),e.Q6J("ngIf",t.item.contents),e.xp6(5),e.Q6J("svgIcon","heroicons_solid:pencil"),e.xp6(3),e.Q6J("ngIf",t.item.description),e.xp6(1),e.Q6J("ngIf",!t.item.description),e.xp6(2),e.Q6J("color","primary"))},dependencies:[s.rH,p.lW,p.o6,p.RK,y.Hw,T.O5],encapsulation:2,changeDetection:0});var Q=o(262);class u{constructor(n){this._fileManagerService=n}resolve(n,t){return this._fileManagerService.getItems()}}u.\u0275fac=function(n){return new(n||u)(e.LFG(c))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});class f{constructor(n,t){this._router=n,this._fileManagerService=t}resolve(n,t){return this._fileManagerService.getItems(n.paramMap.get("folderId")).pipe((0,Q.K)(r=>{console.error(r);const a=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,F._)(r)}))}}f.\u0275fac=function(n){return new(n||f)(e.LFG(s.F0),e.LFG(c))},f.\u0275prov=e.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"});class m{constructor(n,t){this._router=n,this._fileManagerService=t}resolve(n,t){return this._fileManagerService.getItemById(n.paramMap.get("id")).pipe((0,Q.K)(r=>{console.error(r);const a=t.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,F._)(r)}))}}m.\u0275fac=function(n){return new(n||m)(e.LFG(s.F0),e.LFG(c))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});const ce=[{path:"",component:v,children:[{path:"folders/:folderId",component:g,resolve:{item:f},children:[{path:"details/:id",component:d,resolve:{item:m},canDeactivate:[l]}]},{path:"",component:g,resolve:{items:u},children:[{path:"details/:id",component:d,resolve:{item:m},canDeactivate:[l]}]}]}];class _{}_.\u0275fac=function(n){return new(n||_)},_.\u0275mod=e.oAB({type:_}),_.\u0275inj=e.cJS({imports:[s.Bz.forChild(ce),p.ot,y.Ps,h.SJ,M.AV,U.m]})}}]);