//variables
var Quotes = ["I'm not scary; I'm just misunderstood.",
"Why did the monster eat a light bulb? Because it wanted a light snack!",
"I told my mummy I wanted to be a comedian. She said, 'You're a real mummy jokester!'",
"Why did the monster bring a ladder to the party? Because it heard the food was to die for!",
"I'm on a seafood diet. I see food, and I eat it... especially if it's brains!",
"I tried to scare a human once, but they just offered me a cookie. I couldn't resist!",
"I'm not a morning monster; I'm a night terror!",
"Knock, knock. Who's there? Boo. Boo who? Don't cry; it's just me, the friendly monster!",
"Why did the monster bring a raincoat to the haunted house? In case it ran into a little drizzle!",
"I'm not a monster; I'm a fluffy nightmare with a heart of gold!",];

var Authors = ['Chuckles the Clownster',
'Gigglesnarl the Jester of Doom',
'Fangzilla',
'Groteskull',
'Cacklesnatch the Insane',
'Dracowitza',
'Slimegore',
'Hissifer the Horrific',
'Mirthfang the Grin Reaper',
'Shuddersnatch the Night Terror',];
        
var Images=[
'https://i.pinimg.com/originals/8d/44/1e/8d441e6ad12c420879ead12cb3826b89.gif',
'https://media1.giphy.com/media/A1R148Wl2GOCCBotjF/200w.gif?cid=82a1493b58xpybzako74u18zyiiim907z212zyz708txlcoc&ep=v1_gifs_search&rid=200w.gif&ct=g',
'https://cdn.dribbble.com/users/1320536/screenshots/3332623/monster-pogo-bounce---white.gif',
'https://cdn.dribbble.com/users/1857413/screenshots/5761994/walk.gif',
'https://cdn.dribbble.com/users/5246919/screenshots/11448114/monster-walk-cycle-loop.gif',
'https://cdn.dribbble.com/users/1448034/screenshots/5958027/fuji_monster.gif',
"https://i.pinimg.com/originals/e9/00/f5/e900f57953c9c38f8980b4152f539a8f.gif",
'https://i.pinimg.com/originals/cf/70/0c/cf700c28e32f312a742266b9c63f413a.gif',
'https://i.pinimg.com/originals/a3/59/69/a35969bdfe5d77111491b9b79e2e7c26.gif',
'https://i.pinimg.com/originals/6f/30/2a/6f302af04b22fa72095c24dcac9cd543.gif',
'https://i.pinimg.com/originals/b5/1b/02/b51b023b44d5e554b4eefb9c76b8a36c.gif',
'https://i.pinimg.com/originals/6f/66/a6/6f66a6abed7cef79a86e7764a841ac4b.gif',];

var Colours = ['#FFF59D','#A5D6A7','#B39DDB','#EF9A9A','#D7CCC8','#FFD700','#FFA500'];
              
function newQuote(){
 //Random Number 
  var RdNum = Math.floor(Math.random()*Quotes.length);
 //onclick
  document.getElementById("text").innerHTML =Quotes[RdNum];
  
  document.getElementById("author").innerHTML =Authors[RdNum];
 
  document.randimg.src = Images[RdNum];
  
  document.body.style.backgroundColor = Colours[RdNum];
  
 document.getElementById("button").style.backgroundColor = Colours[RdNum];
  
  document.getElementById("image").style.backgroundColor = Colours[RdNum];
} 
