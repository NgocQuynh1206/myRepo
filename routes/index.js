var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
  var x = parseFloat(req.query.txtX);
  var y = parseFloat(req.query.txtY);
  var operation = req.query.operation;
  var result;

  switch(operation) {
  	case "cong":
  		result = x+y;
  		break;
  	case "tru":
  		result = x-y;
  		break;
  	case "nhan":
  		result = x*y;
  		break;
  	case "chia":
  		result = x/y;
  		break;
  }

  if(!isNaN(x) && !isNaN(y) && operation) {
	  res.render('index', { valueX: x,
	  						valueY: y,
	  						result: result });
	}
  else
  {
  	if(operation!=='cong' && operation!=='tru' && operation!=='nhan' && operation!=='chia' && x && y) {
  		res.render('index', { notice: "Chưa chọn phép tính",
  							  valueY: y,
  							  valueX: x});
  	}
  	else {
	  	if(!x && y) {
	  		res.render('index', { notice: "Chưa nhập số thứ nhất",
	  							  valueY: y});
	  	}
	  	else
	  	{
	  		if(!y && x) {
	  			res.render('index', { notice: "Chưa nhập số thứ hai",
	  								  valueX: x});
	  		}
	  		else {
	  			if(!y && !x)
	  				res.render('index', { notice: "Chưa nhập số thứ nhất"});
	  			else{
	  				res.render('index');
	  			}
	  		}
	  	}
	  }
  }
});

module.exports = router;
