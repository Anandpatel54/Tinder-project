let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 4,
    location: "Delhi India",
    name: "Uma",
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
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate delectus dolor eveniet sequi sed blanditiis",
    isFriend: null,
  },
  {
    profilePic:
      "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate delectus dolor eveniet sequi sed blanditiis",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1540174401473-df5f1c06c716?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://plus.unsplash.com/premium_photo-1674069720020-41e6dea32366?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    bio: "Lorem ipsum dolor sit amet.Voluptate delectus dolor eveniet sequi sed blanditiis",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    displayPic:
      "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
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
    bio: "dolor sit amet consectetur adipisicing elit.Voluptate delectus dolor eveniet sequi sed blanditiis",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;
(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  select(".prflimg img").src = users[curr].profilePic;
  select(".badge h5").textContent = users[curr].pendingMessage;
  select(".location h3").textContent = users[curr].location;
  select(".name h1:nth-child(1)").textContent = users[curr].name;
  select(".name h1:nth-child(2)").textContent = users[curr].age;

  let clutter = "";
  users[curr].interests.forEach(function (interest) {
    clutter += ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${interest.icon}
    <h3 class="text-sm tracking-tighter ">${interest.interest}</h3>
  </div>`;
  });
  select(".tags").innerHTML = clutter;

  select(".bio p").textContent = users[curr].bio;

 // curr = 2;
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
});

(function containerCreateor() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`);
    div.appendChild(element);
    select(".details").appendChild(div);
    console.log(div);
  });
})();

gsap.from(".details .element", {
  y: "100%",
  opacity: 0,
  stagger: 0.1,
  ease: Circ,
  duration: 1,
});
