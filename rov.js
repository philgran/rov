/*
	Relational Object Viewer
*/
(function(global){

	// Fabric
	var FabricRender = function() {
		var canvas = new fabric.Canvas('rojv-f');
		
		var c = new fabric.Circle({
			radius: 50,
			left: 400,
			top: 300,
			fill: '#ff1133'
		});
		
		// var l = new fabric.Text();
		// l.setColor('#000');
		// l.setText('hello');
		// l.render(canvas.contextTop);
		
		this.getCircleCenter = function() {
			return c.getCenter();
		}
		
		canvas.add(c);
	}
	
	// Raphael
	var RaphaelRender = function() {
 		this.paper = Raphael('r-cont', 800, 600);
		var c = this.paper.circle(400, 300, 50);
		c.attr({ fill: '#ff1133' });
		
		this.paper.text(400, 300, 'Node Name');
	}
	
	
	$(function(){
		var F = new FabricRender();
		var $title = $('<h3>Node Name</h3>');
		$title.appendTo($('#f-cont'));
		$title.css({
			position: 'absolute',
			left: F.getCircleCenter().x - 80,
			top: F.getCircleCenter().y - 55
		});
		
		var R = new RaphaelRender();
		raphaelChildRender(R.paper);
	});
	
})(this);