let jsonString = `{
  "ret": 0,
  "msg": "success",
  "data": {
    "gender": 0,
    "uid": "84b9f9d66b3c4adea2cdd292d86251b2",
    "country": null,
    "id": "104643340",
    "nickname": "apple登录用户",
    "city": null,
    "headImage": "/user_head_images/default.png",
    "phoneNumber": null,
    "platform": 2,
    "userVipInfo" : {
      "isValid" : true,
      "originalTransactionId" : "510001408663730",
      "vipExpireTime" : 1702511666000,
      "level" : 1,
      "productId" : "vip_monthly_trial",
      "vipCountStartTime" : 1701302073000
    },
    "province": null
  }
}`;

// 将字符串解析为 JSON 对象
let jsonObj = JSON.parse(jsonString);

// 直接修改 JSON 对象中的 userVipInfo 部分
jsonObj.data.userVipInfo.isValid = true;
jsonObj.data.userVipInfo.originalTransactionId = "510001408663730";
jsonObj.data.userVipInfo.vipExpireTime = 1732924473000;
jsonObj.data.userVipInfo.level = 1;
jsonObj.data.userVipInfo.productId = "vip_monthly_trial";
jsonObj.data.userVipInfo.vipCountStartTime = 1701302073000;

// 将修改后的对象转换回字符串
let modifiedJsonString = JSON.stringify(jsonObj, null, 2); // 第二个和第三个参数用于格式化输出

console.log(modifiedJsonString);
