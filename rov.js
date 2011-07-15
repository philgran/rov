/*
	Relational Object Viewer
*/
(function(global){
	// AppNexus Universe namespace
	
	// Returns the center of the object on which it is called.
	Raphael.el.getPosition = function() {
		var p = this.paper;
		var pos = {};
		switch(this.node.nodeName) {
			case 'circle':
				pos.x = this.attrs.cx;
				pos.y = this.attrs.cy;
				break;
			default:
				// Handle other objects too
				break;
		}
		return pos;
	}
	Raphael.fn.anu = {
		planet: function(obj) {
			console.log(this);
			var title = obj.name || obj.id || 'nameless';
			var radius = obj.radius || 50;
			var cent = {
				x: this.width / 2,
				y: this.height / 2
			}
			var c = this.circle(cent.x, cent.y, radius).attr({ fill: '#ff1133' });
			var t = this.text(cent.x, cent.y, title);
			return c;
		}
	}
	
	var angularPlacement = function(nodes, origin) {
		var angle = 360 / nodes.length;
		for (var i=0; i < nodes.length; i++) {
			
		};
	}
	
	var ROV = function() {
		var me = this;
		var R_paper = null;
		var current_nodes = [];
		
		var _getPaperCenter = function() {
			return {
				x: R_paper.width / 2,
				y: R_paper.height / 2
			}
		}
		
		var _makeNode = function(obj) {
			var cent = _getPaperCenter();
			var node = R_paper.circle(cent.x, cent.y, obj.rad);
			var R_title = null;
			node.attr({ fill: '#ff99aa' });
			if (obj.name) {
				R_title = R_paper.text(cent.x, cent.y, obj.name);
			}
		}
		
		// this.setNodes = function(nodes) {
		// 	var rad = 360;
		// 	for (var i=0; i < nodes.length; i++) {
		// 		rad = rad / (i+1);
		// 		
		// 	};
		// }
		this.makeNode = function(obj) {
			_makeNode(obj);
		}
		this.init = function(el, w, h) {
			R_paper = Raphael(el, w, h);
		}
	}
	
	var RaphaelRender = function() {
 		this.paper = Raphael('r-cont', 800, 600);
		var c = this.paper.circle(400, 300, 50);
		c.attr({ fill: '#ff1133' });
		
		this.paper.text(400, 300, 'Node Name');
	}
	
	$(function(){
		// var R = new RaphaelRender();
		var rov = new ROV();
		// rov.init('r-cont', 800, 600);
		// rov.makeNode({ name: 'Hello', rad: 50 });
		var paper = Raphael('r-cont', 800, 600);
		var planet = paper.anu.planet({
			name: 'member 310',
			radius: 50
		});
		angularPlacement(new Array(5), planet);
	});
	
})(this);