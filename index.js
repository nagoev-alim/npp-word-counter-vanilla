// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='word-counter'>
    <h1>Word Counter</h1>
    <label>
      <textarea data-textarea='' placeholder='Enter some text below:'></textarea>
    </label>
    <div data-result=''>You've written <span>0</span> words and <span>0</span> characters.</div>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Class
class App {
  constructor() {
    this.DOM = {
      textarea: document.querySelector('[data-textarea]'),
      statsText: document.querySelector('[data-result]'),
    };

    this.DOM.textarea.addEventListener('input', this.onCount);
  }

  /**
   * @function onCount - Count words and characters
   * @param value
   */
  onCount = ({ target: { value } }) => {
    const text = value.trim();
    const matches = text.match(/\S+/g);
    this.DOM.statsText.innerHTML = `You've written <span>${matches ? matches.length : 0}</span> words and <span>${text.length}</span> characters.`
  };
}

// ⚡️Class Instance
new App();

