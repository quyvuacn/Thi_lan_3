var app = angular.module('myCoffee', []);

app.controller('headerController', ['$scope', function($scope) {
    $scope.renderBill = function(){
        console.log('bill')
        let btn_menu = document.querySelector('.item_menu')
        let btn_bill = document.querySelector('.item_bill')
        let content_bill = document.querySelector('.content_bill')
        let content_menu = document.querySelector('.content_menu')
        content_menu.classList.add('d-none')
        content_bill.classList.remove('d-none')
        btn_bill.classList.add('active')
        btn_menu.classList.remove('active')
    }
    $scope.renderMenu = function(){
        console.log('menu')
        let btn_menu = document.querySelector('.item_menu')
        let btn_bill = document.querySelector('.item_bill')
        let content_bill = document.querySelector('.content_bill')
        let content_menu = document.querySelector('.content_menu')
        content_bill.classList.add('d-none')
        content_menu.classList.remove('d-none')
        btn_menu.classList.add('active')
        btn_bill.classList.remove('active')
    }
}]);

const model = {
    calc:0,
    bill:[],
    coffee: [
        {
            coffee_name:'Cà phê 1',
            option:[
               {
                    size:1,
                    price:20000,
                    quantily:0,
                },
                {
                 size:2,
                 price:25000,
                 quantily:0,
             },
             {
                 size:3,
                 price:30000,
                 quantily:0,
             },
             {
                 size:4,
                 price:35000,
                 quantily:0,
             },
            ]
        },
        {
            coffee_name:'Cà phê 2',
            option:[
                {
                    size:1,
                    price:25000,
                    quantily:0,
                },
                {
                 size:2,
                 price:30000,
                 quantily:0,
             },
             {
                 size:3,
                 price:35000,
                 quantily:0,
             },
             {
                 size:4,
                 price:40000,
                 quantily:0,
             },
            ]
        }
    ]
 
}

app.controller('menuController', ['$scope', function($scope) {
    console.log($scope)
 $scope.coffee = model.coffee
 $scope.check = function(index){
     model.bill.push(model.coffee[index])
     console.log(model.bill)
    _alert = document.querySelector('.alert')
    _alert.classList.remove('d-none')
    setTimeout(function(){
        _alert.classList.add('d-none')
    },2000)
}

}]);

app.controller('billController', ['$scope', function($scope) {
    $scope.bill = model.bill
    $scope.quantily=[]
    $scope.price=[]
    $scope.size=[]
   $scope.calc=[]


   


}]);