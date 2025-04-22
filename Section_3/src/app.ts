const button = document.querySelector('button')!;

const clickHandler = (message: string) => {
  let userName = 'Max';
  console.log('click! ' + message);
};

if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'sd'));
}
