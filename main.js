onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hey Froggo, boring hai thoda ik!!",
  "Still last tak padhna, no options",
        "I am sorry I need to go faarrrrr...",
        "I mean, utna far bhi nahi, but still..",
        "And, remember the first day we talked,",
        "I never thought aisa bhi din aayega,",
        "Thank you for always being my comfort place",
        "Yaar distance badhega matlab",
        "yeh cringe cheezein bhi badhegi",
        "Ab pata nahi kaise jhelegi,",
        "more songs, more random messages,",
        "random write ups and other stupid,",
        "cringey ways to annoy you",
        "Bas ek cheez hai, sad nahi hona hai,",
        "mai hoon na hamesha",
        "Maybe I am going to be far away,",
        "(833KM) accurate,",
        "Bas yeh bolna hai,",
        "Ik, you have had sad girl moments in the past,",
        "But yaar, tu meri princess hai,",
        "And I am always going to be that annoying furball,",
        "that will never stop telling,",
        "I miss you and kitni badi gadhedo hai tu.",
        "I might be far, but I will always",
        "come back home to annoy you",
        "Yaar, mai annoying hoon, but itna pata hai,",
        "princess ko smile karwaana hai,",
        "Because, sometimes, even if you are far away,",
        "You can't let go of the people your heart choses,",
        "I don't want to give up on us, what we have right now,",
        "Kabhi bhi, Forever prolly,",
        "(unless you get too annoyed and bhaag jao)",
        "Abhi bohot lamba message ho gaya,",
        "Just Remember,",
        "You are one in a billion,",
        "You will always be my one in a billion you idiot,",
        "Chal ab cringe ka quota khatam ho gaya.",
        "Go back to being stoopid",
        "Phool(neeche hai) == Fool(You)",
        "Bhakkkkkkkk",
        "Byeeeeeeee"



];
let currentMessage = 0;


function showMessage() {
  const typewriterText = document.getElementById('typewriterText');
  typewriterText.classList.remove('fade-in');

  setTimeout(() => {
    typewriterText.textContent = messages[currentMessage];
    typewriterText.classList.add('fade-in');
    currentMessage = (currentMessage + 1) % messages.length;
  }, 2000); // This timeout should match the transition time
}

// Start the message display
showMessage();

// Change message every 4 seconds plus fade duration (adjust as needed)
setInterval(showMessage, 4000); // 2s for fade-in, 2s for visible, 2s for fade-out