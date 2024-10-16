"use strict";
const toggle = document.getElementById('toggle-skills');
const skill = document.getElementById('skills');
toggle.addEventListener('click', () => {
    if (skill.style.display === "none") {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
