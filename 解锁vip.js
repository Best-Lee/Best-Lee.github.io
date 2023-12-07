let jsonString = `{
  "userVipInfo" : {
      "isValid" : true,
      "originalTransactionId" : "510001408663730",
      "vipExpireTime" : 1702511666000,
      "level" : 1,
      "productId" : "vip_monthly_trial",
      "vipCountStartTime" : 1701302073000
    }
}`;

// 将字符串解析为 JSON 对象
let jsonObj = JSON.parse(jsonString);

// 直接修改 JSON 对象
jsonObj.userVipInfo.isValid = true;
jsonObj.userVipInfo.originalTransactionId = "510001408663730";
jsonObj.userVipInfo.vipExpireTime = 1732924473000;
jsonObj.userVipInfo.level = 1;
jsonObj.userVipInfo.productId = "vip_yearly_trial";
jsonObj.userVipInfo.vipCountStartTime = 1701302073000;

// 将修改后的对象转换回字符串
let modifiedJsonString = JSON.stringify(jsonObj, null, 2); // 第二个和第三个参数用于格式化输出

console.log(modifiedJsonString);
