function commentReplyToggle(parent_id) {
    const row = document.getElementById(parent_id);

    if (row.classList.contains('d-none')) {
        row.classList.remove('d-none');
    } else {
        row.classList.add('d-none');
    }
}

function showNotifications() {
    const container = document.getElementById('notification-container')

    if (container.classList.contains('d-none')) {
        container.classList.remove('d-none');
    } else {
        container.classList.add('d-none');
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function removeNotification(removeNotificationURL, redirectURL) {
    const csrftoken = getCookie('csrftoken');
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE) {
            if (xmlhttp.status === 200) {
                window.location.replace(redirectURL);
            } else {
                alert('There was an error')
            }
        }
    };

    xmlhttp.open("DELETE", removeNotificationURL, true);
    xmlhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xmlhttp.send();
}

function formatTags() {
    const elements = document.getElementsByClassName('body');
    for (let i = 0; i < elements.length; i++) {
        let bodyText = elements[i].children[0].innerText;

        let words = bodyText.split(' ');

        for (let j = 0; j < words.length; j++){
            if (words[j][0] === '#') {
                elements[i].innerHTML = bodyText.replace(/\s\#(.*?)(\s|$)/g, `<a href="/social/explore?query=${words[j].substring(1)}"> ${words[j]}</a>`)
            }
        }
    }
}

formatTags();

document.getElementById('theme-icon').addEventListener('click', function() {
  const bubble = document.getElementById('speech-bubble');
  bubble.style.display = bubble.style.display === 'none' || bubble.style.display === '' ? 'block' : 'none';
});

document.addEventListener('click', function(event) {
  const bubble = document.getElementById('speech-bubble');
  const icon = document.getElementById('theme-icon');
  if (!icon.contains(event.target) && !bubble.contains(event.target)) {
    bubble.style.display = 'none';
  }
});


// Define the available themes and their corresponding colors
const themes = {
  dark: { backgroundColor: '#333', textColor: '#A9A9A9' },
  light: { backgroundColor: '#fff', textColor: '#000' },
  blue: { backgroundColor: '#007bff', textColor: '#A9A9A9' },
  green: { backgroundColor: '#28a745', textColor: '#A9A9A9' },
  red: { backgroundColor: '#dc3545', textColor: '#A9A9A9' },
  yellow: { backgroundColor: '#ffc107', textColor: '#000' },
  purple: { backgroundColor: '#6f42c1', textColor: '#A9A9A9' },
  orange: { backgroundColor: '#fd7e14', textColor: '#A9A9A9' },
  pink: { backgroundColor: '#e83e8c', textColor: '#A9A9A9' },
  grey: { backgroundColor: '#6c757d', textColor: '#A9A9A9' },
  brown: { backgroundColor: '#8b4513', textColor: '#A9A9A9' }
};

// Function to apply the selected theme
function applyTheme(themeName) {
  const theme = themes[themeName];
  if (theme) {
    // Update the background and text colors
    document.body.style.backgroundColor = theme.backgroundColor;
    document.body.style.color = theme.textColor;

    // Update the icon colors
    document.querySelectorAll('i').forEach(icon => {
      icon.style.color = theme.textColor;
    });

    // Update the "Ripple" text color
    const rippleText = document.querySelector('.navbar-brand');
    if (rippleText) {
      rippleText.style.color = theme.textColor;
    }

    // Save the selected theme to localStorage
    localStorage.setItem('selectedTheme', themeName);
  }
}

// Event listeners for each theme button
document.querySelectorAll('.theme-button').forEach(button => {
  button.addEventListener('click', () => {
    const themeName = button.dataset.theme;
    applyTheme(themeName);
  });
});

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

// Optional: Close the speech bubble when clicking outside of it
document.addEventListener('click', function(event) {
    const bubble = document.getElementById('speech-bubble');
    const icon = document.getElementById('theme-icon');
    if (!icon.contains(event.target) && !bubble.contains(event.target)) {
        bubble.style.display = 'none';
    }
});