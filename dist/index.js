var t=require("@hotwired/stimulus");require("@kanety/stimulus-static-actions");class e extends t.Controller{show(t){this.hasContextTarget&&!this.contextTarget.contains(t.target)||(this.menuTarget.style.top=t.pageY+1+"px",this.menuTarget.style.left=t.pageX+1+"px",this.toggleClass(!0),t.preventDefault())}hide(t){this.toggleClass(!1)}toggleClass(t){t?this.menuTarget.classList.add("st-contextmenu--visible"):this.menuTarget.classList.remove("st-contextmenu--visible")}}e.targets=["menu","context"],e.actions=[["element","contextmenu->show"],["element","click@window->hide"]],module.exports=e;
//# sourceMappingURL=index.js.map
