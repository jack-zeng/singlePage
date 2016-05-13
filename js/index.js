
    var myApp = angular.module("myApp", ['ngRoute','ngAnimate','controller']);
    myApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/indexPage",{templateUrl:"indexPage.html",controller:"indexPage"}).
        when("/project?:id",{templateUrl:"detailedInvestment/project.html",controller:"project"}).
        when("/creditorRights",{templateUrl:"detailedInvestment/creditorRights.html",controller:"creditorRights"}).
        when("/tradeContract",{templateUrl:"detailedInvestment/tradeContract.html"}).
        when("/myAccount",{templateUrl:"myAccount/myAccount.html"}).
        when("/transactionRecord",{templateUrl:"myAccount/transactionRecord.html",controller:"transactionRecord"}).
        when("/redBag",{templateUrl:"myAccount/redBag.html",controller:"redBag"}).
        when("/invitationCode",{templateUrl:"myAccount/invitationCode.html",controller:"invitationCode"}).
        when("/bankCard",{templateUrl:"myAccount/bankCard.html",controller:"bankCard"}).
        when("/replaceBankCard",{templateUrl:"myAccount/replaceBankCard.html",controller:"replaceBankCard"}).
        when("/supportCard",{templateUrl:"myAccount/supportCard.html",controller:"supportCard"}).
        when("/bankCardMsg",{templateUrl:"myAccount/bankCardMsg.html",controller:"bankCardMsg"}).
        when("/paymentMony",{templateUrl:"myAccount/paymentMony.html",controller:"paymentMony"}).
        when("/investmentSuccess",{templateUrl:"myAccount/investmentSuccess.html"}).
        when("/replaceBankSuccess",{templateUrl:"myAccount/replaceBankSuccess.html"}).
        when("/more",{templateUrl:"myAccount/more.html"}).
        when("/securityGuarantee",{templateUrl:"other/securityGuarantee.html",controller:"securityGuarantee"}).
        when("/garage",{templateUrl:"other/garage.html"}).
        when("/layersSecurity",{templateUrl:"other/layersSecurity.html"}).
        when("/transactionFlow",{templateUrl:"other/transactionFlow.html"}).
        when("/jinRongyun",{templateUrl:"other/jinRongyun.html"}).
        when("/aboutUs",{templateUrl:"other/aboutUs.html"}).
        when("/commonProblem",{templateUrl:"other/commonProblem.html",controller:"commonProblem"}).
        when("/signIn",{templateUrl:"signIn.html"}).
        when("/smsVerification",{templateUrl:"smsVerification.html"}).
        when("/passLogin",{templateUrl:"passLogin.html"}).
        when("/modifyPass",{templateUrl:"modifyPass.html"}).
        otherwise({redirectTo:"/indexPage"});
}]);

