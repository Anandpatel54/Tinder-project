let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://source.unsplash.com/1600x900/?girls",
    pendingMessage: 4,
    location: "Delhi India",
    name: "Nishi",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "I Love modling..!",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://source.unsplash.com/1600x900/?fitness",
    pendingMessage: 7,
    location: "mumbai India",
    name: "Ankush",
    age: 30,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "The weights in this gym just aren’t heavy enough… would you mind sitting on my face while I do some crunches..!",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://source.unsplash.com/1600x900/?photography",
    pendingMessage: 1,
    location: "bhopal India",
    name: "Aditi",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "So a line can be a fallen tree, a moving river, or even a slew of rocks leading off into the distance.",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://source.unsplash.com/1600x900/?virat",
    pendingMessage: 9,
    location: "Indore India",
    name: "ayushi",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing",
      },
    ],
    bio: "I took a walk in the woods and came out taller than the trees.!",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${interest.icon}
    <h3 class="text-sm tracking-tighter ">${interest.interest}</h3>
  </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[index].bio;
}
(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;
  
  setData(curr)

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;

        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}
let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", () => {
  imageChange();
  setData(curr-1)
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

accept.addEventListener("click", () => {
  imageChange();
  setData(curr-1)
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

(function containerCreateor() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();


