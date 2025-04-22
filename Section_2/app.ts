let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

const generateError = (message: string, code: number) => {
  throw { message, errorCode: code };
};

generateError('에러', 500);
