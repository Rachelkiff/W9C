


let tweets = [
 {  
    tweet: "Your current situation is not your final destination.",
    username: "LifeTweets",
    age: "17",
    created_at: 01-21-2019, 
},
{
    tweet: "Be brave enough to be bad at something new.",
    username: "LifeTweets",
    age: "20",
    created_at: 01-30-2019, 
},
{
    tweet: "If they say it’s impossible; it’s impossible for them, not you.",
    username: "LifeTweets",
    age: "60",
    created_at: 02-17-2019, 
},
{
    tweet: "You deserve a wild love from a gentle soul.",
    username: "LifeTweets",
    age: "25",
    created_at: 03-03-2019, 
},
{
    tweet: "Let it go. Something beautiful wants to grow in its place.",
    username: "LifeTweets",
    age: "32",
    created_at: 04-14-2019, 
},
{
    tweet: "Keep watering yourself until you feel like you again",
    username: "LifeTweets",
    age: "52",
    created_at: 06-02-2019, 
},
{
    tweet: "Pay attention to the things you are naturally drawn to. They are good for your soul.",
    username: "LifeTweets",
    age: "48",
    created_at: 08-11-2019, 
},
{
    tweet:  "Don’t waste your energy on revenge. Your inner peace is more important.",
    username: "LifeTweets",
    age: "29",
    created_at: 03-15-2020, 
},
{
    tweet: "May the next few months be a period of beautiful transformation for you.",
    username: "LifeTweets",
    age: "55",
    created_at: 07-21-2020, 
},
{
    tweet: "Wherever you're at in your life, you're not alone.",
    username: "LifeTweets",
    age: "19",
    created_at: 09-21-2020, 
   },
];

let tweet = [17, 20, 60, 25, 32, 52, 48, 29, 55, 19];
let age = tweet.filter(tweetAge);

function tweetAge() {
    if(tweetAge >= 18){
        return true;
    }else if(tweetAge < 18) {
        return false;
    };
};
 


//for(var counter = 0; counter < tweetlength; counter = counter + 1) {
  //  console.log(tweets[counter]);
//}







