$(document).ready(function(){
	$('input').bind('click keypress', function(){
		setTimeout(function(){
            var ids = ['m00','m01','m02','m03','m10','m11','m12','m13','m20','m21','m22','m23','m30','m31','m31','m33'];
            //console.log(ids);
            var vals = _.map(ids,function(id){
                return $('#'+id).val();
            });
            //console.log(vals);
            var matrix3d = 'matrix3d('+vals.join(', ')+')';
            //console.log(matrix3d);
            
            $('#box').css('-webkit-transform', matrix3d);
            $('#css').text('-webkit-transform: '+matrix3d);
		}, 0);
	});
});