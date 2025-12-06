import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2';

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661580662522-31b2e5bf2b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNvbXBhbnklMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D",
      bio: "Aisha is a focused operations professional who loves organized workflows and accurate documentation.",
      tag: "Satisfied",
      color: "royalblue",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664478369611-f92e4d837e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNvbXBhbnklMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D",
      bio: "Elena is a confident client-facing specialist known for her friendly communication and professionalism.",
      tag: "Overbanked",
      color: "orange",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661753133030-85acedbca77c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNvbXBhbnklMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D",
      bio: "Hana is a creative marketing coordinator with strong attention to detail and a passion for digital content.",
      tag: "Undergrad",
      color: "cyan",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1664478369611-f92e4d837e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNvbXBhbnklMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D",
      bio: "Elena is a confident client-facing specialist known for her friendly communication and professionalism.",
      tag: "Overbanked",
      color: "lightgreen",
    },
  ];
  return (
    <div>
      <Section1 user={users} />
      <Section2/>
    </div>
  );
}

export default App
