re('"userVipInfo"\\s*:\\s*{\\s*"isValid"\\s*:\\s*false,\\s*"originalTransactionId"\\s*:\\s*null,\\s*"level"\\s*:\\s*0,\\s*"productId"\\s*:\\s*null\\s*}','"userVipInfo": {"isValid": true, "originalTransactionId": "510001408663730", "vipExpireTime": 1702511666000, "level": 1, "productId": "vip_monthly_trial", "vipCountStartTime": 1701302073000}');

function re(){
    var body = $response.body;
    if(arguments[0].includes("@")){
        var n = arguments[0].split("@"), r = arguments[1].split("@");
        for(i = 0; i < n.length; i++){
            var l = new RegExp(n[i], "g"), body = body.replace(l, r[i]);
        }
    } else {
        var l = new RegExp(arguments[0], "g");
        body = body.replace(l, arguments[1]);
    }
    $done(body);
}
