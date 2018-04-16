// myApp.controller('MinutestipsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
//     $scope.template = TemplateService.getHTML("content/minutestips.html");
//     TemplateService.title = "Minutestips"; //This is the Title of the Website
//     $scope.navigation = NavigationService.getNavigation();
//     $scope.formSubmitted = false;
//     $scope.changeURL = function (id) {
//         console.log(id);
//         $location.path("" + id);
//     };
//     $scope.submitForm = function (data) {
//         console.log(data);
//         $scope.formSubmitted = true;
//     };
//     $scope.minuteEpisode = [{
//         imageUrl: "B8wukySPY-Q",
//         videoUrl: "B8wukySPY-Q",
//         episodeno: "Tip No. 1",
//         searchName: "SIP",
//     },{
//         imageUrl: "W9zF8Ao0u2s",
//         videoUrl: "W9zF8Ao0u2s",
//         episodeno: "Tip No. 2",
//         searchName: "MUTUAL FUNDS",
//     },{
//         imageUrl: "zODaZ82garY",
//         videoUrl: "zODaZ82garY",
//         episodeno: "Tip No. 3",
//         searchName: "BALANCE FUNDS",
//     },{
//         imageUrl: "hQk7jnUjFew",
//         videoUrl: "hQk7jnUjFew",
//         episodeno: "Tip No. 4",
//         searchName: "DEBT FUNDS",
//     },{
//         imageUrl: "4t7z7Myz1Yw",
//         videoUrl: "4t7z7Myz1Yw",
//         episodeno: "Tip No. 5",
//         searchName: "IPO",
//     },{
//         imageUrl: "7B5ne737cs8",
//         videoUrl: "7B5ne737cs8",
//         episodeno: "Tip No. 6",
//         searchName: "OPEN ENDED FUNDS",
//     },{
//         imageUrl: "zEJ1yVY3AnI",
//         videoUrl: "zEJ1yVY3AnI",
//         episodeno: "Tip No. 7",
//         searchName: "CLOSED ENDED FUNDS",
//     },{
//         imageUrl: "eGRhXggT7OA",
//         videoUrl: "eGRhXggT7OA",
//         episodeno: "Tip No. 8",
//         searchName: "EQUITY FUNDS",
//     },{
//         imageUrl: "znhMhP9tvNQ",
//         videoUrl: "znhMhP9tvNQ",
//         episodeno: "Tip No. 9",
//         searchName: "MONEY BACK POLICY",
//     },{
//         imageUrl: "Gc72iMcbjiE",
//         videoUrl: "Gc72iMcbjiE",
//         episodeno: "Tip No. 10",
//         searchName: "DEMAT ACCOUNT",
//     },{
//         imageUrl: "ZwpKhVwXupg",
//         videoUrl: "ZwpKhVwXupg",
//         episodeno: "Tip No. 11",
//         searchName: "PPF ACCOUNT",
//     },{
//         imageUrl: "32H9ZArJwZo",
//         videoUrl: "32H9ZArJwZo",
//         episodeno: "Tip No. 12",
//         searchName: "LIQUID FUNDS",
//     },{
//         imageUrl: "WP87c8ahvNQ",
//         videoUrl: "WP87c8ahvNQ",
//         episodeno: "Tip No. 13",
//         searchName: "DIVERSIFIED MUTUAL FUNDS",
//     },{
//         imageUrl: "h3f8DkPnWfs",
//         videoUrl: "h3f8DkPnWfs",
//         episodeno: "Tip No. 14",
//         searchName: "what is general insurance?",
//     },{
//         imageUrl: "lSvkesxpuKo",
//         videoUrl: "lSvkesxpuKo",
//         episodeno: "Tip No. 15",
//         searchName: "BROKERAGE",
//     },{
//         imageUrl: "4JK6oxNKU1w",
//         videoUrl: "4JK6oxNKU1w",
//         episodeno: "Tip No. 16",
//         searchName: "Understand Term Insurance",
//     },{
//         imageUrl: "qnKZEVfh4kw",
//         videoUrl: "qnKZEVfh4kw",
//         episodeno: "Tip No. 17",
//         searchName: "Diversified Equity Funds",
//     },{
//         imageUrl: "SIfPjrP_9DE",
//         videoUrl: "SIfPjrP_9DE",
//         episodeno: "Tip No. 18",
//         searchName: "SECTOR SPECIFIC FUND",
//     },{
//         imageUrl: "pw-g3hgwZb0",
//         videoUrl: "pw-g3hgwZb0",
//         episodeno: "Tip No. 19",
//         searchName: "STOCK EXCHANGE",
//     },{
//         imageUrl: "u33KBPsu5jI",
//         videoUrl: "u33KBPsu5jI",
//         episodeno: "Tip No. 20",
//         searchName: "WHOLE LIFE POLICIES",
//     }];
// })