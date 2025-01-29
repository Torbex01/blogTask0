// Blog content stored in JavaScript
const blogContent = {
    motivation: "The world of technology has always fascinated me, especially how websites and applications come to life. My journey into frontend development began with curiosity, but it quickly evolved into a passion. I enjoy turning ideas into interactive, user-friendly websites. Mastering HTML, CSS, and JavaScript has empowered me to build visually appealing and functional web applications. However, I want to deepen my knowledge and stay up-to-date with modern technologies. That's why I joined the HNG Internship, a program known for its hands-on learning and real-world projects.",

    hngGrowth: "The HNG Internship presents an incredible opportunity to refine my frontend development skills. Through structured learning, mentorship, and team projects, I will gain practical experience in web development. HNG provides access to resources like <a href='http://hng.tech/premium' target='_blank'>HNG Premium</a>, which offers advanced courses. Additionally, platforms like <a href='http://telex.io' target='_blank'>Telex.io</a> and <a href='http://delve.fun' target='_blank'>Delve.fun</a> will expand my technical knowledge and problem-solving skills.",

    goals: [
        "Master Frontend Technologies such as React.js and JavaScript.",
        "Build and deploy real-world projects.",
        "Improve my collaboration and teamwork skills.",
        "Enhance my understanding of responsive design.",
        "Expand my professional network through HNG's hiring platform."
    ],

    plan: "To achieve these goals, I will actively participate in HNG's training programs, contribute to team projects, and seek mentorship from industry experts. I will also utilize the HNG hiring resources, such as <a href='https://hng.tech/hire/reactjs-developers' target='_blank'>React.js Developers</a> and <a href='https://hng.tech/hire/javascript-developers' target='_blank'>JavaScript Developers</a>, to connect with potential employers."
};

// Dynamically insert content into the page
document.getElementById("motivation").innerHTML = blogContent.motivation;
document.getElementById("hng-growth").innerHTML = blogContent.hngGrowth;
document.getElementById("plan").innerHTML = blogContent.plan;

// Populate goals list dynamically
const goalsList = document.getElementById("goals-list");
blogContent.goals.forEach(goal => {
    const listItem = document.createElement("li");
    listItem.textContent = goal;
    goalsList.appendChild(listItem);
});
