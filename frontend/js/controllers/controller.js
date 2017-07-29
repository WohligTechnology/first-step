var mySwiper;
myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $document, $location, $state, apiService) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();


        $scope.changeURL = function (id) {
            console.log(id);
            $location.path("" + id);
        };
        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        $scope.homeSlide = [
            'img/small-season2/1.jpg',
            'img/small-season2/2.jpg',
            'img/small-season2/3.jpg',
            'img/small-season2/4.jpg',
            'img/small-season2/5.jpg',
            'img/small-season2/6.jpg',
            'img/small-season2/7.jpg',
            'img/small-season2/8.jpg',
            'img/small-season2/9.jpg',
            'img/small-season2/10.jpg',
            'img/small-season2/11.jpg',
            'img/small-season2/12.jpg',
            'img/small-season2/13.jpg',
            'img/small-season2/14.jpg',
            'img/small-season2/15.jpg',
            'img/small-season2/16.jpg',
            'img/small-season2/17.jpg',
            'img/small-season2/18.jpg',
            'img/small-season2/19.jpg',
            'img/small-season2/20.jpg',
            'img/small-season2/21.jpg',
            // 'img/small-season2/22.jpg',
            'img/small-season2/23.jpg',
            'img/small-season2/24.jpg',
            'img/small-season2/25.jpg',
            'img/small-season2/26.jpg',
            // 'img/small-season2/27.jpg',
            'img/small-season2/28.jpg',
            'img/small-season2/29.jpg',
            'img/small-season2/30.jpg',
            'img/small-season2/31.jpg',
            'img/small-season2/32.jpg',

        ];

        function makeAnimation(id) {
            if (_.isEmpty(id)) {
                id = "home";
            }
            var someElement = angular.element(document.getElementById(id));
            $document.scrollToElement(someElement, 75, 1000);
        }
        $scope.$on('$viewContentLoaded', function (event) {
            setTimeout(function () {
                makeAnimation($stateParams.id);
            }, 1000);
        });

        $scope.$on('$viewContentLoaded', function (event) {
            $timeout(function () {
                mySwiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 1200,
                        modifier: 1,
                        slideShadows: true,
                    }
                });
            }, 300);
        });

        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        $scope.alokopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/alokmodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.anilopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/anilmodal.html',
                scope: $scope,
                size: 'lg',
            });
        };

        $scope.harshadaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/harshadamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.kavitaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/kavitamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };

        $scope.nehaopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/nehamodal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.pradeepopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/pradeepmodal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.contestopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/contest.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.digitalcourseopen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/digitalcourse-modal.html',
                scope: $scope,
                size: 'lg',

            });
        };
        $scope.ourpartneropen = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/ourpartner.html',
                scope: $scope,
                size: 'md',

            });
        };

        //Login

        $scope.formData = {};
        $scope.submitForm = function (formData, loginDigitalform) {
            console.log($scope.formData);
            apiService.sendLogin($scope.formData, function (data) {
                console.log(data);
                if (data.value === true) {
                    $state.go('digitalinside');
                } else {
                    $state.go('digitalinside');
                }
            });
        };

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        };
    })

    .controller('PartnersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/partnerspage.html");
        TemplateService.title = "Partners Page"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.information = [{
            "name": "Bhavas of Investing",
            "desc": "<h4 class='text-center'><b>Bhavas of Investing</b></h4><p>Yoga is an ancient art based on a harmonizing system of development for the body, mind, and spirit. Most people relate Yoga to asanas (yoga postures). But there is more to yoga than this. Asanas are but one of eight limbs of yoga as laid out by the Indian Maharishi Patanjali, author of “The Yogasūtra”. They are Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana and Samadhi. So yes, asanas play a part in yoga, but they are certainly not the whole. It has been well known for centuries that the core practice of Yoga is meditation, not asanas. This is because the ultimate aim of Yoga is to create a healthy body & mind leading oneself to moksha or salvation. </p><p>The paths of Bhavas lead to the ultimate goal of 'moksha' in the Indian Yogic philosophy. Literally the word 'Bhava' stands for feeling or attitude. These Bhavas, thus, play a very important role in the path of Yoga. Regular and repeated practice of these techniques slowly enhances the accompanying 'Bhava' in one's personality. </p><p>I am a student of Yoga philosophy and professional in the finance industry, the way I look at it is that Yoga not only helps you attain peace of mind and a healthy body but its principles have universal application. You can follow these very principles defined by our Maharishis thousands of years back to create your wealth. Like I said the ultimate aim of Yoga is salvation. Let’s have a look at the Bhavas are the paths of Yoga through which moksha or salvation can be attained and how these bhavas can be applied to investing</p><br><div><h5><b>DHARMA - Duty and Right Conduct</b></h5><p>It is said that one, who is always on the path of Dharma, is saved from all sorts of pains and sufferings. Dharma in simple words means to do your duty. Similarly it’s important to do your duty before investing. Your Dharma is to research well before investing and invest basis your goals, investment horizon and risk profile. Does this mean it is your dharma to know about fundamental & technical analysis before investing? The answer is NO. However, it is your duty to identify the right source of expert advice so that your hard earned money grows. Make sure you check the success ratio before acting on expert advice.</p></div><br><div><h5><b>JNANA - Knowledge and Understanding</b></h5><p>In whatever you do, go into depths, understand and analyze it. A lot of times, we are so over-whelmed with the noise of outside world that it leads to a state of confusion and frustration. For example, people rely on hearsay and invest their hard earned money based on tips from friends / relatives expecting it to grow overnight. Now compare this to how you typically make a buying decision - you read the features, compare prices, check out the product, seek various reviews and then finally make a purchase. But when it comes to investing, we invest impulsively without thorough background check. For successful investing, you should either research well in the stock or rely on expert advice.</p></div><br><div><h5><b>VAIRAGYA - Objectivity and Detachment</b></h5><p>This is a state of detachment and egolessness. The elements of Vairagya Bhava are humility, and 'let-go' attitude. For e.g. People tend to overreact to news in stock markets that are only temporary in nature. It’s important to detach yourself from noise and check if the underlying structural or fundamental story is intact. Market guru Warren Buffet says “Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years”. Consider the noise as buying opportunities as quality stocks also get battered down during turbulent times.</p></div><br><div><h5><b>AISHWARYA - Will-power and Self-reliance</b></h5><p>This is the culmination of all the above three Bhavas. With practice of Dharma, Jnana & Vairagya; Aishwarya is obtained. The individual becomes very clear in his life, developing strength, will power and self reliance. Therefore, when you do your Dharma/duty to select the right financial advisor, invest using the power of Jnana/knowledge and detach yourself from noise with Vairagya, you’re sure to achieve Aishwarya or a beautiful life with wealth and happiness.</p><p>With efforts, all these attitudes can be achieved & these simple yet powerful principles of Yogic Investing can help to invest optimally to create wealth.</p></div>"
        }, {
            "name": "Gunas of Investing",
            "desc": "<h4 class='text-center'><b>Gunas of Investing</b></h4><p>As a finance professional and Yoga practitioner, I am intrigued by the connection between how principles of Yoga can be applied to make the right investment choices. Most people relate Yoga to asanas (yoga postures). Asanas are but one of eight limbs of yoga as laid out by the Indian Maharishi Patanjali, author of “The Yogasūtra”. They are Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana and Samadhi. So yes, asanas play a part in yoga, but they are certainly not the whole. </p><p>Yoga is about bringing various aspects of our self into balanced harmony. For instance, Patanjali Yogasūtra says that there are three gunas always present in all beings and objects surrounding us but vary in their relative amounts. These gunas are Tamas - the power of inertia, Rajas - the power of energy and Sattva - the power of harmony. A balance in our individual mix or the three qualities can also help us invest optimally</p><br><div><h5><b>Tamas - State of inertia</b></h5><p>We see a lot of people saving all their hard earned money in various fixed income products. I am consciously using the word “Savings” and not “Investments” as savings is done with the intent of capital protection and investments are done for capital growth. Savings in fixed income products do not yield significant real rate of return if you take inflation and tax into account. Therefore, the savings remain in a tamsic state or a state of inertia/inactivity. Fixed income should still form an essential part of one’s overall investment portfolio. However, one must be mindful of the allocation. A disproportionately higher skew would mean underperformance of portfolio and vice-versa may mean an aggressive or risky portfolio.</p></div><br><div><h5><b>Rajas - State of energy</b></h5><p>Rajas is an aggressive guna that is more prevalent among active stock traders. They want their money to be in constant action and movement. They get thrill from trading in stock markets mostly in the short term. I am again consciously using the word “Trading” here and not “Investing” as the intent of trading is to generate quick return in short term vis-a-vis long term investments for wealth creation. A trader doesn't go through the fundamentals of a company in detail as an investor does. He's only focused on “what's happening now, and how can I profit from it”. A trader typically trades in leveraged products like intraday, futures and options. If you are high on rajas or energy and your personal trait is that of a risk taker, if numbers and chart patterns are something that you catch your attention, then maybe you should explore trading backed by strong technical analysis or expert advice.</p></div><br><div><h5><b>Sattva - State of harmony</b></h5><p>Sattva is the guna that reduces rajas & tamas. This guna brings harmony. This is the most desirable guna or state in investing. Investors with this guna invest across various asset classes basis their goals & risk profile. They realise that equity as asset class can reduce tamas or inactivity and that it has the potential to provide multi-fold return in long-term. They reduce rajas by not constantly churning their portfolio or taking risks in the short term. They rely on stocks with strong fundamental story and don’t get bothered with short-term volatility. They don’t overly on any particular asset class and build a diversified portfolio striking balance & harmony.We have the unique ability to consciously alter the levels of the gunas in our bodies and minds. As Satvik guna is most desirable in investing, you can consciously increase it by applying simple yet powerful principles of Yogic Investing to create wealth.</p></div>"
        }, {
            "name": "Panchklesha",
            "desc": "<h4 class='text-center'><b>Panchklesha of Investing</b></h4><p>My profession takes me to various investor education and awareness forums. In my interactions with investors, I have always found that the behavioural aspect of investing plays a critical role in making the right choices. I also see a great connect between Yogic principles and investor psychology.</p><p>Before I delve into the connection between the two, we must first understand the word Yoga in the right context. While most people relate Yoga to asanas, there is much more to it. Asanas constitute only one of eight limbs of ‘Ashtang Yoga’. Yoga helps you attain both a healthy body and a healthy mind. In fact Yoga is a way of life. In my opinion, there are a lot of basic principles in Yogic philosophy that one can follow in order to invest wisely and create wealth. For instance, nearly two thousand years ago, Maharishi Patanjali in Yogasutra identified five causes of suffering or pañchaklesha (‘pancha’ meaning five and ‘klesha’ meaning cause of suffering). These are Avidya (Ignorance), Asmita (Ego), Raga (Attachment), Dvesa (Aversion) and Abhinivesha (Loss). One of the objectives of Yoga is to minimise these kleshas and help the practitioner live a healthy and happy life.</p>Among investments, equity as an asset class that has historically outperformed all others. Equity has become an even more compelling asset class today, given India’s growth story. India is now the fastest growing economy, with slew of reforms and improved macros including falling twin deficits, inflation, interest rates. But despite these factors, a meagre 3% of our population invests in equity. What stops us from choosing equity? Let’s take a deeper look at this in context of the analogy of the panchkleshas.</p><br><div><h5><b>Avidya or Lack of Knowledge </b></h5><p>This is probably the biggest reason for not investing optimally. Take the example of how we make the decision to buy a mobile phone. We look up the features, compare prices, look at the product, check various reviews and then make a purchase decision. This knowledge helps us make the right choice. But when it comes to investing, many retail investors invest their hard-earned money without conducting a thorough background check on promoters or management, financial health, valuations, competitive positioning, etc. Behind every stock is a company, and learning about the company is critical to investing right. Even if you invest in equity through a mutual fund, you need to be aware about details like the investment objective, fund manager performance, investment horizon, etc.</p></div><br><div><h5><b>Asmita or Ego</b></h5><p>A know-it-all attitude can be injurious to your wealth. This typically happens during bull markets when some stocks picked up by investors are rewarded with huge profits. This gives them false sense of superiority and starts a negative loop of ignoring market signals, facts and trends. Eventually, investors take bigger gambles and over-leverage themselves. Even if you are right at times, there is always a scope of improvement, because learning is a never-ending process. Therefore, you should seek expert advice from reputed advisors or institutions to validate your views.</p></div><br><div><h5><b>Raga or Attachment</b></h5><p>Being attached to an asset class or stock is yet another bias that is best avoided. Some people get emotionally attached to an asset and end up parking all their savings in gold or real-estate. Some investors even hold on to a particular company’s stock at all times, even if the financials of the company deteriorate and there are corporate governance issues. Be wary of your emotions, as they can distract you from thinking rationally. An inclination towards a particular asset class or stock can increase portfolio concentration risk. During a downturn or negative cycle, this can erode your wealth. Diversifying your investments through asset allocation is the best way to ensure the predictability of returns.</p></div><br><div><h5><b>Dvesa or Aversion</b></h5><p>This is the opposite of Raga. Aversion to equity can happen due to a bad past experience. There are investors who have tried their hand at investing in markets and suffered losses. Historical data suggests that these retail investors enter the market at the peak of the bull-run and exit in a bear market. During a bull run, stories about stocks doubling or tripling in a short span start circulating. This makes many retail investors feel like they are missing out, and invest a lump sum, intending to make quick profits. When the market corrects, they book losses. They share their experiences with friends or relatives, which further dissuades new investors from entering the markets. But often these experiences are a result of trying to time the market. Instead of timing the market, it is important to stay invested in quality stocks over an extended period of time.</p></div><br><div><h5><b>Abhinivesha or Fear of loss</b></h5><p>This is the final barrier to healthy investing. If your stock appreciates by 10%, you may not be elated but if corrects by 10%, you feel terrible. This illustrates that investors react more to a loss than to a gain of similar magnitude. This makes most investors park their investments in fixed income, which gives them predictable returns. It is important to understand that equity will never give you linear returns, as it is risky in nature, and you may incur losses. But over the longer term, you will be creating wealth.The first step to investing optimally is to simply acknowledge your kleshas and minimise them. Become a ‘Yogic Investor’ by applying these simple mantras and watch your investments grow.</p></div>"
        }, {
            "name": "States of Mind",
            "desc": "<h4 class='text-center'><b>Yoga Sutra: States of Mind</b></h4><p>Yoga helps harmoniously develop your body, mind and spirit. In fact, Yoga is a way of life. It’s overwhelming to know the vastness of the Yogic principles, its philosophy and its literature. Being a certified financial planner and a certified Yoga trainer, I must admit that I find a great connect between Yogic principles and investor psychology. Yogic principles explain in detail about Investor psychology and how it plays an important role in Investment decision making. Maharishi Patanjali in YogaSutra describes five states of mind, which ranges from severely troubled to a completely mastered mind. Let’s understand how it affects our investing behavior - </p><br><div><p><b>1.Kshipta/disturbed:</b> This state of mind is disturbed, troubled and negative. This is the least desirable state of mind. The negative mindset can be because of lack of knowledge. In investing too, our decision is affected by lack of knowledge and sub-optimal investing practices predominantly stem from this. We spend a lot of time to review and buy products online, but when it comes to investing we quickly park our hard earned money based on tips or hearsay. A large number of investors take decisions at the last moment e.g. tax planning. A comprehensive financial planning which includes goals, taxes and contingency should be envisaged with the help of an expert, to avoid impulsive investments.</p></div><br><div><p><b>2. Mudha/dull:</b> It’s a dull & heavy state of mind where we don’t want to take efforts to invest our savings in high yield assets. We leave our savings idle e.g. bank accounts or invest in other asset class which isn’t suitable as per risk appetite or goal value. In investing, we see gold and real estate as a safe haven. But gold has only performed well in uncertain times and real estate hasn’t given better returns than equity in recent past. Considering home loan interests, the real estate returns when compared to equities will be much lesser. Be active towards equity investments and not consider only the traditional route of investments for optimum returns.</p></div><br><div><p><b>3. Vikshipta/distracted:</b> Vikshipta mind is occasionally steady and is distracted easily. If you invest for a shorter tenure the chances are more to make losses. If you see markets in the short term it may seem highly volatile, but if you see for longer horizon, it continues to build an upward trajectory. It’s advisable to remain invested for longer period and not get distracted by market news and noise, to create wealth.</p></div><br><div><p><b>4. Ekagra/one-pointed -</b> The Ekagra mind is one-pointed, focused & concentrated. The chances of getting a distraction in this state of mind are negligible. It’s one of the desirable states of mind. In investing, you should be Ekagra i.e. focused towards your financial goals. It includes knowing your goals, analyzing your financial situation, risk profiling & asset allocation. Periodic monitoring and rebalancing of portfolio is required too for goal achievement.</p></div><br><div><p><b>5. Niruddah/mastered:</b> The Nirruddah mind is highly mastered & controlled. It is the most desirable state of mind. In context of investments, you master the art of investing. It’s easier said than done. To master this art, you should know how to choose stocks that the market has undervalued and they have high growth potential. The selection should be based on fundamentals like promoter’s background, commitment & vision, strengths of business & financials. Follow the principle of value investing and seek stocks that the market has undervalued. </p><p>Out of these five states of mind, the last 2 stages are most desirable and one should avoid being in first 3 states of mind. Identify your state of mind and apply these basic yogic investment principles to grow your wealth.</p></div>"
        }]
    })

    //Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });