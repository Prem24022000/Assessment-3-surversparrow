showFooterChatBot();

showChatBotContent();

showChatBotResponse();

function showFooterChatBot() {
  const footerChatBot = document.querySelector('.footer__chatBot');

  const footerIcon = document.querySelector('.footer__icon');

  let bool = false;
  footerIcon.addEventListener('click', () => {
    footerChatBot.classList.toggle('active');
    // footerChatBot.style.opacity = 0.7;

    if (!bool) {
      footerIcon.firstElementChild.attributes[0].value = './img/Cancel.png';

      bool = true;
    } else {
      footerIcon.firstElementChild.attributes[0].value =
        './img/Sparrow Bird.png';

      bool = false;
    }
  });
}

function showChatBotContent() {
  const footerBtn = document.querySelector('.footer-btn');

  const footerChatBotContentFirst = document.querySelector(
    '.footer__chatBot__content-first'
  );

  const footerChatBotContentSecond = document.querySelector(
    '.footer__chatBot__content-second'
  );

  footerBtn.addEventListener('click', () => {
    footerChatBotContentFirst.style.display = 'none';

    footerChatBotContentSecond.style.display = 'block';
  });
}

function showChatBotResponse() {
  const form = document.querySelector('form');

  const footerChatBotInput = document.querySelector('.footer__chatBot-input');

  const footerChatBotParent = document.querySelector(
    '.footer__chatBot__content-second--parent'
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (footerChatBotInput.value === '') {
      return;
    }

    const div1 = document.createElement('div');

    div1.className = 'footer__chatBot__content-second--right';

    const article1 = document.createElement('article');

    article1.className = 'right';

    const div2 = document.createElement('div');

    div2.className = 'footer__chatBot__content-second--left';

    const article2 = document.createElement('article');

    article2.className = 'left';

    article1.textContent = footerChatBotInput.value;

    div1.appendChild(article1);

    footerChatBotParent.appendChild(div1);

    footerChatBotParent.style.height = '12rem';

    footerChatBotInput.value = '';

    footerChatBotParent.scrollTop = footerChatBotParent.scrollHeight;

    setTimeout(() => {
      article2.textContent = 'typing.....';

      div2.appendChild(article2);

      footerChatBotParent.appendChild(div2);

      footerChatBotParent.scrollTop = footerChatBotParent.scrollHeight;

      setTimeout(() => {
        getAPI()
          .then((res) => {
            article2.textContent = res;

            div2.appendChild(article2);

            footerChatBotParent.appendChild(div2);

            footerChatBotParent.scrollTop = footerChatBotParent.scrollHeight;
          })
          .catch((err) => {
            article2.textContent = 'unable to chat right now...';

            div2.appendChild(article2);

            footerChatBotParent.appendChild(div2);

            footerChatBotParent.scrollTop = footerChatBotParent.scrollHeight;

            console.log(err);
          });
      }, 1000);
    }, 500);
  });
}

async function getAPI() {
  const response = await fetch('https://api.adviceslip.com/adviceaa');

  const responseData = await response.json();

  const result = await responseData.slip.advice;

  return result;
}

// style.maxHeight = content.scrollHeight + 'px';

const burger = document.querySelector('.burger');

const navLists = document.querySelector('.nav__content__lists');

burger.addEventListener('click', () => {
  navLists.classList.toggle('active');
});
