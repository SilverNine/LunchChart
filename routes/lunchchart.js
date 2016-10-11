module.exports = function(app) {
    app.get('/gameone', function(req, res){

        var mapkey = "";

        console.log(process.env.NODE_ENV);

        if( process.env.NODE_ENV == 'production' ) {
            mapkey = "ZsJ3ILQMDIbSGASTvqJI";
        } else {
            mapkey = "Z343bXpadHrn2C7KXBUp";
        }

        /*
         운영 : ZsJ3ILQMDIbSGASTvqJI
         개발 : Z343bXpadHrn2C7KXBUp
         */

        res.render('lunchchart/index', {mapkey : "Z343bXpadHrn2C7KXBUp"});
    });

    app.get('/sample', function(req, res){
        res.render('lunchchart/sample', {});
    });
}
