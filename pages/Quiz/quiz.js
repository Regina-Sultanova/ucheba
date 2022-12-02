const answer_radio_like = {
  like1: document.getElementById("radio_like_1"),
  like2: document.getElementById("radio_like_2"),
  like3: document.getElementById("radio_like_3"),
};

const setRadioAnswersFalse = () => {
  Object.values(answer_radio_like).forEach((item) => {
    item.checked = false;
  });
};

answer_radio_like.like1.addEventListener("click", () => {
  setRadioAnswersFalse();
  answer_radio_like.like1.checked = true;
});
answer_radio_like.like2.addEventListener("click", () => {
  setRadioAnswersFalse();
  answer_radio_like.like2.checked = true;
});
answer_radio_like.like3.addEventListener("click", () => {
  setRadioAnswersFalse();
  answer_radio_like.like3.checked = true;
});
