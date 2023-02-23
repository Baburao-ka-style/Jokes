
// Set of jokes 

let jokes = [`How much money does a pirate pay for corn? A buccaneer.!`, `Where do young trees go to learn? Elementree school!`, `What do you call a hippie's wife? Mississippi!`, `How can you tell it's a dogwood tree? By the bark!`, `What's the stinkiest planet? Poopiter!`, `What did the full glass say to the empty glass? You look drunk!`, `Did you hear the one about the roof? Never mind, it's over your head!`, `What's the best smelling insect? A deodor-ant!`, `Why did the can crusher quit his job? Because it was soda pressing!`, `What do you call someone who doesn't like carbs? Lack-Toast Intolerant!`, `Why did the birthday boy wrap himself in paper? He wanted to live in the present!`, `What's a potato's favorite form of transportation? The gravy trai!`, `Why did the woman go on the date with the mushroom? Because he was a fun-ghi!`, `Why does Snoop Dogg use an umbrella? Fo drizzle!`, `Why is it impossible to starve in the desert? Because of all the sand which is there!`, `Why can't Chuck Norris use the internet? Because he won't submit!`, `What do you call a dog that's been run over by a steamroller? Spot!`, `How does Lady Gaga like her steak? (sing) Raw-raw-raw-ra-ah-aw!`, `What did the cheese say when it looked in the mirror? Haloumi!`, `Why did the developer go broke? Because he used up all his cache!`, `Why did the ghost go to rehab? He was addicted to boos!`, `What's orange and sounds like a parrot? A carrot!`, `What do you call a dinosaur with only one eye? A Do-you-think-he-saw-us!`, `What do you call sad coffee? Despresso!`, `What do you give to a sick lemon? Lemon aid!`, `Why are pirates called pirates? Because they arrgh!`, `What don't ants get sick? They have anty-bodies!`, `What type of candy is always late? A chocolate!`, `What sound does a nut make when it sneezes? Ca-shew!`, `What do you call a Frenchman wearing sandals? Phillipe Phillope!`, `The past, present and future walked into a bar. It was tense!`, `What do you call someone who can't stick with a diet? A desserter!`, `Which table fits in the fridge? VegeTABLE!`, `Hear about the new restaurant called Karma? There's no menu: You get what you deserve!`, `Is Google male or female? Female, because it doesn't let you finish a sentence before making a suggestion!`, `What do you call it when you walk into a cafe you're sure you've been to before? Déjà brew!`, `How do you make holy water? You boil the hell out of it!`, `Are you a cheetah? No, you lion!`, `Which bus never drove on any street? The globus!`, `Where does the General keep his armies? In his sleevies!`, `How do you get Pikachu on a bus? Poke him on!`, `Why doesn't the sun go to college? Because it has a million degrees!`, `How did the hipster burn his mouth? He ate the pizza before it was cool!`, `What's red and moves up and down? A tomato in an elevator!`, `Why can't you hear a pterodactyl go to the bathroom? Because the “P” is silent!`, `How did the blonde die ice fishing? She was hit by the zamboni!`, `What do Alexander the Great and Winnie the Pooh have in common? Same middle name!`, `Why did the nurse need a red pen at work? In case she needed to draw blood!`, `What do you call a rooster staring at a pile of lettuce? A chicken sees a salad!`, `Why don't Calculus majors throw house parties? Because you should never drink and derive!`, `Where are average things manufactured? The satisfactory!`, `What do you call a space magician? A flying saucerer!`, `What is a computer's first sign of old age? Loss of memory!`, `What happened when the computer fell on the floor? It slipped a disk!`, `Why was there a bug in the computer? It was looking for a byte to eat!`, `What is a computer virus? A terminal illness!`, `What kind of doctor fixes broken websites? A URLologist!`, `What's a cat's favorite color? Purrr-ple!`, `What do Martians like to drink? Gravi-TEA!`, `What is an astronaut's favorite meal of the day? Launch!`, `Why did the alien go to the doctor? He was looking a little green!`, `What did Venus say to Saturn? Give me a ring!`, `What do you call ticks in space? Luna-ticks!`, `What do planets sing in a choir? Nep-tunes!`, `What doesn't get any wetter no matter how much it rains? The ocean!`, `What is a gust of wind's favorite color? Blew!`, `Where do happy lightning bolts live? Cloud nine!`, `What does a ghost wear to splash in puddles? BOOOOOOOts!`, `What's an avocado's favorite kind of music? Guac and roll!`, `Why did the dinosaur go to the doctor? He had an eye-saur!`, `How did the dinosaur build her house? With a dino-saw!`, `What do you call a dinosaur that asks a lot of deep questions? A philosiraptor!`, `Why should you never ask a dinosaur to read a story if you are in a hurry? Their tales are too long!`, `What type of flower should you not give on Valentine's Day? Cauli-flower!`, `What is an insect's favorite sport? Cricket!`, `What is the difference between ignorance and apathy? I don't know, and I don't care!`, `How long does it take to make butter? An echurnity!`, `When you look for something, why is it always in the last place you look? Because when you find it, you stop looking!`, `Where did the music teacher leave her keys? In the piano!`, `Which superhero hits home runs? Batman!`, `What fruit do twins love? Pears!`, `Who eats snails? People who don't like fast food!`, `What is the strongest animal in the sea? Mussels!`, `What kind of chicken is the funniest? A comedi-hen!`, `What does a triceratops sit on? Its tricera-bottom!`, `What kind of pizza do dogs eat? Pup-eroni pizza!`, `What do you call a famous turtle? A shell-ebrity!`, `What cookie flavor do monkeys love? Chocolate Chimp!`, `Why do hurricanes wear a monocle to see? Because they have one eye!`, `What did the clock ask the watch? Hour you doing!`, `What's the most famous fish? A starfish!`, `What kind of fish loves going to battle? A swordfish!`, `Where do birds invest their money? The stork-market!`, `What's a pirate's favorite county? Arrrrgh-entina!`, `What do newborn kittens wear? Dia-purrs!`, `Which holiday do cows enjoy most? Moo-Year's Day!`, `What do cheerleaders eat for breakfast? Cheerios!`, `How do ice hockey players stay cool? They sit next to the fans!`, `Why did the piano teacher need a ladder? To reach the high notes!`, `What kind of fishing bait do librarians use? Book-worms!`, `Which state is the smartest? Alabama—it has four As and one B!`,]



// Generating a random joke

// Get random index value

let getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Get random item 

    let item = arr[randomIndex]

    return item
}

const result = getRandomItem(jokes)
console.log(result)

document.getElementById("mainbox").innerHTML = `“ ${result} ”`
















