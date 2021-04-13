payuApp.controller('mainController', function ($scope, $http) {

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $scope.message = 'Everyone come and see how good I look!';
    $scope.mkey = 'gtKFFx';
    $scope.productInfo = 'Verification order';
    $scope.txnid = makeid();
    $scope.amount = 234.99;
    $scope.id = '2222222';
    $scope.email = 'test@test.com';
    $scope.phone = 9999999999;
    $scope.lastName = 'test';
    $scope.firstName = 'fname';
    $scope.surl = "http://localhost:3000/PaymentStatus";
    $scope.hash = '';

    $scope.presubmit = function () {
        var data = { preHashString: $scope.mkey + '|' + $scope.txnid + '|' + $scope.amount + '|' + $scope.productInfo + '|' + $scope.firstName + '|' + $scope.email + '|' + $scope.id + '||||||||||' };
        var url = 'http://localhost:3000/createHash';
        $http.post(url, data).success(function (data, status) {
            console.log(status);
            if (status == 200) {
                document.getElementById('hash').value = data.hash;
                document.getElementById('paymentForm').submit();
            }
        });
    }
});



