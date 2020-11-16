var home = document.getElementById('home').onclick = toggleActive;
var about = document.getElementById('aboutme').onclick = toggleActive;
var blog = document.getElementById('blog').onclick = toggleActive;
var contact = document.getElementById('contact').onclick = toggleActive;

function toggleActive() {
    'use strict';
    document.element.color = "purple";
    return false;
}
//switch, remove current active class
//add class to current mouse

home.addEventListener('click', function () {
    'use strict';
    home.classList.to('active');
});

home.addEventListener('click', function () {
    'use strict';
    this.classList.remove('active');
});

about.addEventListener('click', function () {
    'use strict';
    this.classList.add('active');
});

about.addEventListener('click', function () {
    'use strict';
    this.classList.remove('active');
});

blog.addEventListener('click', function () {
    'use strict';
    this.classList.add('active');
});

blog.addEventListener('click', function () {
    'use strict';
    this.classList.remove('active');
});


contact.addEventListener('click', function () {
    'use strict';
    this.classList.add('active');
});

contact.addEventListener('click', function () {
    'use strict';
    this.classList.remove('active');
});
