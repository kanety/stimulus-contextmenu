import{Controller as t}from"@hotwired/stimulus";import"@kanety/stimulus-static-actions";class e extends t{show(t){this.hasContextTarget&&!this.contextTarget.contains(t.target)||(this.menuTarget.style.top=t.pageY+1+"px",this.menuTarget.style.left=t.pageX+1+"px",this.toggleClass(!0),t.preventDefault())}hide(t){this.toggleClass(!1)}toggleClass(t){this.menuTarget.classList.toggle("st-contextmenu--visible",t)}}e.targets=["menu","context"],e.actions=[["element","contextmenu->show"],["element","click@window->hide"]];export{e as default};
//# sourceMappingURL=index.module.js.map
