/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const onSubmit = function () {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setSuccess(email !== '');
    }
  };
  const changeEmail = function (userEmail) {
    setEmail(userEmail);
  };
  return (
    <div className='flex h-screen bg-slate-600'>
      <Container>
        {success ? (
          <SuccessMessage userEmail={email} />
        ) : (
          <SubscribeMessage changeEmail={changeEmail} onSubmit={onSubmit} />
        )}
      </Container>
    </div>
  );
}

function SuccessMessage({ userEmail }) {
  return (
    <div className='flex sm:justify-between gap-8 flex-col justify-start sm:w-96 h-full p-4'>
      <div className='p-1 mt-40 sm:mt-[unset] bg-rose-500 rounded-full min-h-16 h-16 w-16  text-white font-bold min-w-6 mr-3 flex justify-center items-center overflow-hidden'>
        ✓
      </div>
      <Header
        title='Thanks for subscribing!'
        text={
          <p>
            A confirmation email has been sent to <strong>{userEmail}</strong>.
            Please open it and click the button inside to confirm you
            subscription.
          </p>
        }
      />
      <SubscribeButton buttonName={'Dismiss message'} />
    </div>
  );
}

function SubscribeMessage({ changeEmail, onSubmit }) {
  return (
    <>
      {' '}
      <div className='flex flex-col text-slate-800 gap-3 py-12 px-8 sm:w-[50vw] bg-slate-100 h-full'>
        <Header
          title='Stay Updated!'
          text={
            <p>Join 60.000+ product managers receinving monthly updates on:</p>
          }
        />
        <List />
        <Input
          inputName={'Email address'}
          onChange={(event) => changeEmail(event.target.value)}
        />
        <SubscribeButton
          onSubmit={onSubmit}
          buttonName={'Subscribe to monthly newsletter'}
        />
      </div>
      <Image />
    </>
  );
}

function Container({ children }) {
  return (
    <div className=' bg-slate-100 text-lg sm:p-6 flex m-auto flex-col-reverse sm:rounded-xl sm:w-min w-full h-full sm:h-auto sm:flex-row overflow-hidden'>
      {children}
    </div>
  );
}

function Image() {
  return (
    <div className='w-full sm:h-auto h-full'>
      <img
        className='object-cover h-full overflow-hidden'
        src='./20474170.jpg'
      ></img>
    </div>
  );
}

function Input({ inputName, onChange }) {
  const x = inputName.split(' ').join('');
  const inputNameCamel = x.substring(0, 1).toLowerCase() + x.substring(1);
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-semibold p-1' htmlFor={inputNameCamel}>
        {inputName}
      </label>
      <input
        className='w-full p-3 border-solid border border-slate-700 rounded-lg mb-5'
        placeholder='email@company.com'
        id={inputNameCamel}
        onChange={onChange}
      ></input>
    </div>
  );
}

function SubscribeButton({ onSubmit, buttonName }) {
  return (
    <button
      onClick={onSubmit}
      className='mt-auto p-4 hover:scale-105 shadow-2xl transition-all shadow-orange-400 w-full rounded-xl text-slate-50 font-bold bg-gradient-to-r from-rose-500 to-orange-500'
    >
      {buttonName}
    </button>
  );
}

function List() {
  const listItems = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a succes',
    'And much more!',
  ];
  const items = listItems.map((e) => (
    <li className='flex ' key={listItems.indexOf(e)}>
      <div className='p-1 bg-rose-500 rounded-full min-h-6 h-6 w-6 text-white font-bold min-w-6 mr-3 flex justify-center items-center overflow-hidden'>
        ✓
      </div>
      {e}
    </li>
  ));

  return <ul className='flex flex-col gap-4 pb-6'>{items}</ul>;
}

function Header({ title, text }) {
  return (
    <div className='flex flex-col gap-3 sm:m-0 sm:mb-auto pb-6'>
      <h1 className='text-5xl leading-10 mb-4 font-bold'>{title}</h1>

      {text}
    </div>
  );
}

export default App;
