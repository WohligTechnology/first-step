module.exports = {
    index: function (req, res) {
        res.metaView({
            title: "Pehla Kadam | Season4",
            description: "Pehla Kadam is a strategically designed platform that provides ideas and creates products for people who are looking for a better way to manage their finances. Everything in this world is related to finance and therefore it is important to learn about it.",
            keywords: "file Income Tax Return Form in India,common mistakes in filing income tax return,tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,how to get education loan in india,education loan in india,what is top up loan or personal loan,top up loan eligibility,how to save money from salary in india,importance of saving money for the future,Calculate the salary of a housewife,housewife salary in india,how to manage Indian family monthly budget,middle class family monthly budget in India,reasons to have a credit card,disadvantages of credit card in india,cheque dishonour reasons in india,what are cheque dishonour charges,reasons for rejection of home loan,Home loan rejection in India,what is financial goal setting,long term financial goals,best way to retire early,how to retire early calculator,Mistakes while filing ITR,income tax penalty for undisclosed income,eligibility for personal loan,personal loan rejection reasons,Short term financial goals,is tax evasion a criminal offence in india,tax evasion cases in india,file Income Tax Return Form,file Income Tax Return in India,Income Tax Return Form,mistakes in filing income tax return, tax avoidance cases,tax avoidance in India,punishment for tax evasion,tax evasion and tax avoidance,get education loan in India,get education loan in India,Top up loan or personal loan,top up loan,personal loan,save money from salary in India,saving money for the future,salary of a housewife,Indian family monthly budget,middle class family monthly budget,disadvantages of credit card,cheque dishonour reasons,cheque dishonour charges,rejection of home loan,Home loan rejection,financial goal setting,how to retire early,income tax penalty,tax evasion a criminal offence,tax evasion cases,Delhi,Mumbai,India",
            abstract: "Pehla Kadam is a strategically designed platform that provides ideas and creates products for people who are looking for a better way to manage their finances. Everything in this world is related to finance and therefore it is important to learn about it."
        });
    },
    download: function (req, res) {
        Config.readUploaded(req.param("filename"), null, null, null, res);
    },
    backend: function (req, res) {
        var env = require("../../config/env/" + sails.config.environment + ".js");
        res.view("production/backend", {
            jsFiles: jsFilesBackend,
            title: "Backend",
            description: "Backend",
            keywords: "Backend",
            adminurl: env.realHost + "/api/",
        });
    },
    digitalCourse: function (req, res) {
        if (req.params && req.params.id) {
            res.metaView({
                title: "Pehla Kadam | Digital",
                description: "",
                keywords: "",
                abstract: "",
            });
        }
    },
    digitalQuestion: function (req, res) {
        if (req.params && req.params.id) {
            res.metaView({
                title: "Pehla Kadam | Digital Question",
                description: "",
                keywords: "",
                abstract: "",
            });
        }
    },
    minuteTips: function (req, res) {
        res.metaView({
            title: "Pehla Kadam | One Minute Tips",
            description: "",
            keywords: "",
            abstract: "",
        });
    },
    photoGallery: function (req, res) {
        res.metaView({
            title: "Pehla Kadam | Gallery",
            description: "",
            keywords: "",
            abstract: "",
        });
    },
    galatFehmi: function (req, res) {
        res.metaView({
            title: "Pehla Kadam | Galat Fehmi",
            description: "",
            keywords: "",
            abstract: "",
        });
    },
    latestBuzz: function (req, res) {
        if (req.params && req.params.name) {
            console.log(req.params);
            if (req.params.name == "how-to-deal-with-a-job-loss") {
                res.metaView({
                    title: "How to deal with a job loss|Pehla Kadam",
                    description: "Get advice to help you deal with job loss, How to deal with a job loss and financially traumatic. Learn how to move on from this life-altering event..",
                    abstract: "Get advice to help you deal with job loss, How to deal with a job loss and financially traumatic. Learn how to move on from this life-altering event.",
                    keywords: "How to deal with a job loss,job loss,deal with a job loss,Pehla Kadam, India, Delhi, Mumbai, Trading"
                });
            } else if (req.params.name == "difference-between-rupay-visa-mastercard") {
                res.metaView({
                    title: "DIFFERENCE BETWEEN RUPAY, VISA AND MASTERCARD|Pehla Kadam",
                    description: "Find out what is the difference between the Rupay RUPAY, VISA AND MASTERCARD card launched in India and the international cards companies VISA and Master Card.",
                    abstract: "Find out what is the difference between the Rupay RUPAY, VISA AND MASTERCARD card launched in India and the international cards companies VISA and Master Card.",
                    keywords: "Difference between rupay, visa and mastercard,rupay, visa and mastercard,Pehla Kadam, India, Delhi, Mumbai"
                });
            } else if (req.params.name == "advantages-disadvantages-of-virtual-trading") {
                res.metaView({
                    title: "Advantages and Disadvantages of Virtual Trading|Pehla Kadam",
                    description: "Know what is meant by Advantages and Disadvantages of Virtual Trading. Online investing is made easier with free virtual stock trading.",
                    abstract: "Know what is meant by Advantages and Disadvantages of Virtual Trading. Online investing is made easier with free virtual stock trading.",
                    keywords: "Advantages and Disadvantages of Virtual Trading,Virtual Trading,Disadvantages of Virtual Trading,Advantages of Virtual Trading,Pehla Kadam, India, Delhi, Mumbai, Trading"
                });
            } else if (req.params.name == "how-to-save-during-the-festive-season") {
                res.metaView({
                    title: "HOW TO SAVE DURING THE FESTIVE SEASON|Pehla Kadam",
                    description: "The best time of getting value for your money by saving is when How to save during the festive season One of the best times to get good deals is during the festive season.",
                    abstract: "The best time of getting value for your money by saving is when How to save during the festive season One of the best times to get good deals is during the festive season.",
                    keywords: "HOW TO SAVE DURING THE FESTIVE SEASON,FESTIVE SEASON,Pehla Kadam,India, Delhi, Mumbai"
                });
            } else if (req.params.name == "eligibility-criteria-for-postal-life-insurance") {
                res.metaView({
                    title: "ELIGIBILITY CRITERIA FOR POSTAL LIFE INSURANCE|Pehla Kadam",
                    description: "What are the eligibility Eligibility Criteria for Postal Life Insurance to check if you are entitled to apply for postal  loan insurance.",
                    abstract: "What are the eligibility Eligibility Criteria for Postal Life Insurance to check if you are entitled to apply for postal  loan insurance.",
                    keywords: "ELIGIBILITY CRITERIA FOR POSTAL LIFE INSURANCE,LIFE INSURANCE,ELIGIBILITY CRITERIA,Pehla Kadam,India, Delhi, Mumbai"
                });
            } else if (req.params.name == "how-to-calculate-MAB") {
                res.metaView({
                    title: "HOW TO CALCULATE MAB (MONTHLY AVERAGE BALANCE)|Pehla Kadam",
                    description: "Calculate your average monthly balance to know the amount to be maintained in your account. How to Calculate MAB (MONTHLY AVERAGE BALANCE) is often used by creditors to know your income stability.",
                    abstract: "Calculate your average monthly balance to know the amount to be maintained in your account. How to Calculate MAB (MONTHLY AVERAGE BALANCE) is often used by creditors to know your income stability.",
                    keywords: "HOW TO CALCULATE MAB (MONTHLY AVERAGE BALANCE),MONTHLY AVERAGE BALANCE,Pehla Kadam,India, Delhi, Mumbai"
                });
            } else if (req.params.name == "things-to-know-about-new-tax-form") {
                res.metaView({
                    title: "Pehla Kadam | Things To Know About New Tax Form",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "excuses-avoiding-for-not-having-health-cover") {
                res.metaView({
                    title: "Pehla Kadam | Excuses avoiding, for not having a health cover",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "finance-tips-for-children-18-years-and-above") {
                res.metaView({
                    title: "Pehla Kadam | Finance tips for children who are 18 years and above",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "who-is-liable-for-incorrectly-filed-ITR") {
                res.metaView({
                    title: "Pehla Kadam | Who is liable for incorrectly filed ITR and steps to corrective approach?",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "tips-to-handle-your-own-investments") {
                res.metaView({
                    title: "Pehla Kadam | Tips to handle your own investments",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "avoid-ATM-fraud-checklist") {
                res.metaView({
                    title: "Pehla Kadam | Avoid ATM fraud checklist",
                    description: "",
                    abstract: "",
                    keywords: ""
                });
            } else if (req.params.name == "Common-mistakes-while-filing-Income-Tax-Return-Form-India") {
                res.metaView({
                    title: "Pehla Kadam | File Income Tax Return Form|File Income Tax Return Form in India|Common mistakes in filing Income Tax Return|Mistakes while filing ITR|Income Tax Return Form in India",
                    description: "While filing these returns, there is always the possibility of some Common mistakes people make while filing Income Tax Return Form in India and tips to avoid the same. Here we help you check your preparedness by listing out some common mistakes people often make.",
                    abstract: "While filing these returns, there is always the possibility of some Common mistakes people make while filing Income Tax Return Form in India and tips to avoid the same. Here we help you check your preparedness by listing out some common mistakes people often make.",
                    keywords: "File Income Tax Return Form in India,common mistakes in filing income tax return,Mistakes while filing ITR,File Income Tax Return Return Form,Income tax Return,India"
                });
            } else if (req.params.name == "Penalty-Income-Tax-evasion-avoidance-criminal-offence-India") {
                res.metaView({
                    title: "Pehla Kadam | Tax avoidance cases in India|punishment for tax evasion in india|punishment for tax evasion in india|difference between tax evasion and tax avoidance|income tax penalty for undisclosed income|is tax evasion a criminal offence in india|tax evasion in india statistics|tax evasion cases in India",
                    description: "Understand the difference between avoidance and evasion that is legality and how to avoid tax evasion charges, here are the differences and the implications if you avoid paying tax.",
                    abstract: "Understand the difference between avoidance and evasion that is legality and how to avoid tax evasion charges, here are the differences and the implications if you avoid paying tax.",
                    keywords: "tax avoidance cases in india,punishment for tax evasion in india,difference between tax evasion and tax avoidance,income tax penalty for undisclosed income,is tax evasion a criminal offence in india,tax evasion in india statistics,tax evasion cases in India,India"

                });
            } else if (req.params.name == "How-apply-student-education-loan-with-lowest-interest-rates-India") {
                res.metaView({
                    title: "Pehla Kadam | How to get education loan in India|Education loan in India|Education loan in india with lowest interest rates|How to apply student loan",
                    description: "Anyone in the country who wants to get higher education in India and abroad can apply for Education Loan. Know about all the info to apply student education loan with lowest interest rates in India. Compare the Education loan Interest rates from top providers in India.",
                    abstract: "Anyone in the country who wants to get higher education in India and abroad can apply for Education Loan. Know about all the info to apply student education loan with lowest interest rates in India. Compare the Education loan Interest rates from top providers in India.",
                    keywords: "How to get education loan in India,Education loan in India,Education loan in india with lowest interest rates,How to apply student loan, India"
                });
            } else if (req.params.name == "what-top-up-loan-personal-loan-eligibility") {
                res.metaView({
                    title: "Pehla Kadam | What is top up loan or personal loan|Top up loan eligibility|Eligibility for personal loan|Personal loan rejection reasons",
                    description: "With the help of a top-up or personal loan, you can avail a reasonably priced loan with minimum fuss. However this loan may not be for everyone. Find out what is loan eligibility & personal loan rejection reasons...",
                    abstract: "With the help of a top-up or personal loan, you can avail a reasonably priced loan with minimum fuss. However this loan may not be for everyone. Find out what is loan eligibility & personal loan rejection reasons...",
                    keywords: "Personal loan rejection reasons,What is top up loan or personal loan,Top up loan eligibility,Eligibility for personal loan,personal loan,Top up loan"
                });
            } else if (req.params.name == "How-save-money-from-salary-India-Future") {
                res.metaView({
                    title: "Pehla Kadam | How to save money from salary in India|Importance of saving money for the future",
                    description: "Realize the Importance for having the habit of savings money for everybody. Why  should you start saving money immediately for future in India",
                    abstract: "Realize the Importance for having the habit of savings money for everybody. Why  should you start saving money immediately for future in India",
                    keywords: "importance of saving money for the future,India,Importance of saving money for the future,How to save money from salary in India,saving money for the future,save money from salary,save money from salary for future"
                });
            } else if (req.params.name == "Calculate-salary-housewife-services-India") {
                res.metaView({
                    title: "Pehla Kadam | Calculate the salary of a housewife|Housewife salary in India|Value of housewife services",
                    description: "A house wife works hard throughout the day and at the end of the day it is a thankless job, without any salary. Here is an attempt to Calculate the salary of a housewife for her services day to day activities in India",
                    abstract: "A house wife works hard throughout the day and at the end of the day it is a thankless job, without any salary. Here is an attempt to Calculate the salary of a housewife for her services day to day activities in India",
                    keywords: "India,Calculate the salary of a housewife,Housewife salary in India,Value of housewife services,housewife services,Housewife salary, salary of a housewife"
                });
            } else if (req.params.name == "How-manage-middle-class-Indian-family-monthly-budget-India") {
                res.metaView({
                    title: "Pehla Kadam | How to manage Indian family monthly budget|Middle class family monthly budget in India|Budget for personal expense",
                    description: "How do you calculate your own custom personal or middle class family monthly budget and expesne in India? Click here for some tips to creating a practical monthly budget to help you keep your finances in check.",
                    abstract: "How do you calculate your own custom personal or middle class family monthly budget and expesne in India? Click here for some tips to creating a practical monthly budget to help you keep your finances in check.",
                    keywords: "manage Indian family monthly budget,Indian family monthly budget,How to manage Indian family monthly budget,Middle class family monthly budget in India,Budget for personal expense,India"
                });
            } else if (req.params.name == "What-is-Long-Short-term-financial-goal-setting") {
                res.metaView({
                    title: "Pehla Kadam | What is financial goal setting|Long term financial goals|Short term financial goals",
                    description: "What are the steps to set Long and Short financial goals, Setting goals is proven to be an essential factor in finding success, and this is something that you are on your way to being financially independent.",
                    abstract: "What are the steps to set Long and Short financial goals, Setting goals is proven to be an essential factor in finding success, and this is something that you are on your way to being financially independent.",
                    keywords: "Short term financial goals,Financial goals, What is financial goal setting,Long term financial goals"
                });
            } else if (req.params.name == "How-retire-early-calculator") {
                res.metaView({
                    title: "Pehla Kadam | Best way to retire early|How to retire early calculator",
                    description: "What are the best way retiring early and how to achieve financial independence to pursue your dreams and passion. There are many ways to increase your savings and reach retirement long before your 60s. Here's how ..",
                    abstract: "What are the best way retiring early and how to achieve financial independence to pursue your dreams and passion. There are many ways to increase your savings and reach retirement long before your 60s. Here's how ..",
                    keywords: "How to retire early calculator,Best way to retire early,retire early calculator"
                });
            } else if (req.params.name == "Best-reasons-have-credit-card-for-salaried-person-India") {
                res.metaView({
                    title: "Pehla Kadam | Reasons to have a credit card|Disadvantages of credit card in India|Best credit card in india for salaried person",
                    description: "Analyze the reasons if you really do require a credit card, work out the pros and the cons and then decide if it’s worth having a credit card",
                    abstract: "Analyze the best reasons if you really do require a credit card, work out the advantages and the disadvantages and then decide if it's worth having a credit card for a salaried person in India",
                    keywords: "Reasons to have a credit card,Disadvantages of credit card in India,Best credit card in india for salaried person,credit card in india for salaried person,Disadvantages of credit card,India"
                });
            } else if (req.params.name == "What-are-charges-cheque-dishonour-India") {
                res.metaView({
                    title: "Pehla Kadam | Cheque dishonour reasons in India|What are cheque dishonour charges|Reasons for dishonoured cheque",
                    description: "Do you know what are the important reasons and why banks will dishonour your cheque that you have deposited and what are the steps to avoid this & What are cheque dishonour charges in India?",
                    abstract: "Do you know what are the important reasons and why banks will dishonour your cheque that you have deposited and what are the steps to avoid this & What are cheque dishonour charges in India?",
                    keywords: "cheque dishonour reasons in India,What are cheque dishonour charges,Reasons for dishonoured cheque,cheque dishonour,cheque dishonour charges,India"
                });
            } else if (req.params.name == "stock-market") {
                res.metaView({
                    title: "Pehla Kadam | Learn About Stock Markets Without Risking Your Money",
                    description: "",
                    keywords: "virtual stock trading,  trading platform, virtual money, financial,  investing,investment guide, beginners,virtual stock exchange,buying and selling of stocks, real-time trading"
                });
            } else if (req.params.name == "5big-mistakes") {
                res.metaView({
                    title: "Pehla Kadam | 5 Big Mistakes That Investors Make And Its Impact",
                    description: "",
                    keywords: "Health insurance, Medical care,Accident,Fixed deposit,  investments,debt"
                });
            } else if (req.params.name == "budget-2018") {
                res.metaView({
                    title: "Pehla Kadam | 12 Things About The Budget-2018, Related To The Middle Class",
                    description: "",
                    keywords: "annual budget , middle class, taxation,  deduction, Senior citizens, government"
                });
            } else if (req.params.name == "fake-gst") {
                res.metaView({
                    title: "Pehla Kadam | How To Check A Fake GST Number?",
                    description: "",
                    keywords: "fake GST, business ,  invoice, government, registration, GST Complaint mail ID, GST Helpline Number"

                });
            } else if (req.params.name == "bank-balance") {
                res.metaView({
                    title: "Pehla Kadam | How To Check Your Bank Balance On The Phone Without Internet",
                    description: "",
                    keywords: "bank balance, Internet , mobile phones,registered phone number"

                });
            } else if (req.params.name == "tax-return") {
                res.metaView({
                    title: "Pehla Kadam | Do I Need To File My Income Tax Return?",
                    description: "",
                    keywords: "Income tax, government ,  IT department,  Income Tax Returns, TDS"

                });
            } else if (req.params.name == "buy-healthinsurance") {
                res.metaView({
                    title: "Pehla Kadam | Things To Keep In Mind Before Buying Health Insurance",
                    description: "",
                    keywords: "health insurance,Claim,medical condition,Hospitalization,health insurance policy"

                });
            } else if (req.params.name == "save-moretax") {
                res.metaView({
                    title: "Pehla Kadam | How To Save More Tax!",
                    description: "",
                    keywords: "Taxes, Income Tax Act,Taxation,Exempt"

                });
            } else if (req.params.name == "save-money") {
                res.metaView({
                    title: "Pehla Kadam | 15 Tricks To Save Money!",
                    description: "",
                    keywords: "Expenses, credit card,  household expense, shopping, utility bills,  cash"

                });
            } else if (req.params.name == "cc-limit-enhancement") {
                res.metaView({
                    title: "Pehla Kadam | Credit Card Limit Enhancement - Good Or Bad?",
                    description: "",
                    keywords: "credit card limit, money, borrow,  credit card applicants,high credit limit"

                });
            } else if (req.params.name == "home-purchase") {
                res.metaView({
                    title: "Pehla Kadam | How To Plan A Home Purchase?",
                    description: "",
                    keywords: "Financial planning,  buying a house,financial expenditure,Liabilities,existing loans,"

                });
            } else if (req.params.name == "retirement-savings") {
                res.metaView({
                    title: "Pehla Kadam | 5 Ways To Boost Retirement Savings",
                    description: "",
                    keywords: "Retirement,retirement fund, saving,insurance policy,early retirement,payment of taxes,"

                });
            } else if (req.params.name == "lock-unlock-biometric-details-of-aadhar-card") {
                res.metaView({
                    title: "Pehla Kadam | Lock and unlock online the biometric details of your Aadhar Card",
                    description: "Easy steps on how one can lock the aadhar card biometric details either temporarily and how to unlock the same when you need to use it.",
                    keywords: "lock biometrics online, unlock biometrics online, aadhar card, proof of identity, verification, obtain sim card, aadhar card school admission, retinal scan aadhar card, finger print aadhar card, biometric format aadhar card, disable biometric lock, registered mobile number, OTP aadhar card, uidai, security code aadhar cardPAN card"

                });
            } else if (req.params.name == "link-PAN-Aadhar-to-process-insurance-claims") {
                res.metaView({
                    title: "Pehla Kadam | Link your PAN or Aadhar to process insurance claims",
                    description: "In this article we will show you, how you can easily link your PAN or Aadhar card to your existing insurance policies, in just a few steps",
                    keywords: "Form 60, Form 61, IRDA, PAN card, Aadhar card, insurance policy, insurance policies, insurance companies, insurance company, link Aadhar card, link PAN card, link to insurance, insurance claims"

                });
            } else if (req.params.name == "know-bank-balance-using-smart-phone-without-internet") {
                res.metaView({
                    title: "Pehla Kadam | Know your bank balance using your smart phone without internet",
                    description: "How to access basic data like bank balance without internet connectivity.",
                    keywords: "bank balance offline, bank balance without internet, internet banking offline, missed call alert, dial *99#, NPCI, IFSC code, MMID, dual factor authentication"

                });
            }
        }
    },
    gitPull: function (req, res) {
        function gitPull() {
            exec('git pull', function (error, stdout, stderr) {
                if (error) {
                    return;
                }
                res.callback(error, {
                    stdout: stdout,
                    stderr: stderr
                });
            });
        }

        function decryptData(text) {
            if (text) {
                if (moment.unix(text).isBetween(moment().add(-1, "minute"), moment().add(1, "minute"))) {
                    gitPull();
                } else {
                    res.notFound();
                }
            } else {
                res.notFound();
            }
        }
        if (req.params && req.params.data) {
            decryptData(req.params.data);
        } else {
            res.notFound();
        }
    },
    demo: function (req, res) {
        sails.renderView('email/welcome', {
            name: "Pooja",
            lastname: "Thakre",
            hobbies: ["cricket", "name", "email", "phone"]
        }, function (err, view) {

            res.send(view);
        });
    }
};