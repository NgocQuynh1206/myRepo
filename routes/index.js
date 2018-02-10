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
	  	if(isNaN(x) && y) {
	  		res.render('index', { notice: "Số thứ nhất không phải là số",
	  							  valueY: y});
	  	}
	  	else
	  	{
	  		if(isNaN(y) && x) {
	  			res.render('index', { notice: "Số thứ hai không phải là số",
	  							  valueX: x});
	  		}
	  		else {
	  			if(isNaN(x) && isNaN(y))
	  				res.render('index', { notice: "Số thứ nhất không phải là số"});
	  			else{
	  				res.render('index');
	  			}
	  		}
	  	}
	  }
  }
});

module.exports = router;
